import { useEffect } from 'react';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

const GoogleAnalytics = () => {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    // Initialize dataLayer
    const dataLayer = window.dataLayer || [];
    window.dataLayer = dataLayer;

    // Define gtag function
    window.gtag = (...args) => {
      dataLayer.push(args);
    };

    // Load GA4 script with SRI
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.integrity = 'sha384-43ad284fb37fbc2bf6e695b3eb0d33c79a070203c2576cffcb27a08ffae6f90ff9a030f144c863152798130abbc4d200';
    script.crossOrigin = 'anonymous';
    script.onload = () => {
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_location: window.location.href,
        send_page_view: true
      });
    };
    script.onerror = () => {
      if (import.meta.env.DEV) {
        console.warn('Failed to load Google Analytics');
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      // Cleanup: remove gtag and dataLayer? Not necessary
    };
  }, []);

  return null;
};

export default GoogleAnalytics;
