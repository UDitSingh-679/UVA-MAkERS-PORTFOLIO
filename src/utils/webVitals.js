import { onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Buffer for metrics sent before gtag loads
const metricBuffer = [];
let gtagReady = false;

// Check if gtag is available
const checkGtag = () => typeof window !== 'undefined' && typeof window.gtag === 'function';

// Wait for gtag to be ready, then flush buffered metrics
const waitForGtag = (callback) => {
  if (gtagReady || checkGtag()) {
    gtagReady = true;
    callback();
    return;
  }

  let attempts = 0;
  const maxAttempts = 50;
  const interval = setInterval(() => {
    attempts++;
    if (checkGtag()) {
      gtagReady = true;
      clearInterval(interval);
      callback();
    } else if (attempts >= maxAttempts) {
      clearInterval(interval);
      if (import.meta.env.DEV) {
        console.warn('webVitals: gtag not available after 5s, discarding buffered metrics');
      }
    }
  }, 100);
};

// Send metric to GA4
const sendToGA4 = (metric) => {
  if (!GA_MEASUREMENT_ID) return;

  window.gtag('event', metric.name, {
    value: Math.round(metric.value * 1000) / 1000,
    metric_id: metric.id,
    metric_delta: Math.round(metric.delta * 1000) / 1000,
    metric_rating: metric.rating,
    page_path: window.location.pathname + window.location.search,
  });
};

// Report function that buffers or sends immediately
const report = (metric) => {
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: Math.round(metric.value * 1000) / 1000,
      rating: metric.rating,
      delta: Math.round(metric.delta * 1000) / 1000,
    });
  }

  if (gtagReady) {
    sendToGA4(metric);
  } else {
    metricBuffer.push(metric);
  }
};

// Initialize: wait for gtag, then flush buffer
if (GA_MEASUREMENT_ID) {
  waitForGtag(() => {
    metricBuffer.forEach(sendToGA4);
    metricBuffer.length = 0;
  });
}

// Core Web Vitals (Google's ranking factors)
onCLS(report);
onLCP(report);
onINP(report);

// Additional metrics for debugging
onFCP(report);
onTTFB(report);
