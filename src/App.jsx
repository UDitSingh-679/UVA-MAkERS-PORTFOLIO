import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Collaboration from './components/Collaboration';
import SEOHelmet from './components/SEOHelmet';
import GoogleAnalytics from './components/GoogleAnalytics';
import OrganizationSchema from './components/OrganizationSchema';
import ErrorBoundary from './components/ErrorBoundary';

const Portfolio = lazy(() => import('./sections/Portfolio'));
const Testimonials = lazy(() => import('./sections/Testimonials'));
const Process = lazy(() => import('./sections/Process'));
const Contact = lazy(() => import('./sections/Contact'));
const Footer = lazy(() => import('./sections/Footer'));

const LoadingFallback = () => (
  <div className="w-full py-32 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#FF3AF2] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <>
      <SEOHelmet />
      <GoogleAnalytics />
      <OrganizationSchema />

      <Navbar />

      <Hero />
      <Stats />
      <Services />

      <div className="h-[5px] bg-[#FF3AF2] w-full relative z-20" />
      <Collaboration />

      <div className="h-[5px] bg-[#FFE600] w-full relative z-20" />
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Portfolio />
        </Suspense>
      </ErrorBoundary>

      <div className="h-[5px] bg-[#00F5D4] w-full relative z-20" />
      <ErrorBoundary>
        <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense>
      </ErrorBoundary>

      <div className="relative z-10 bg-[#0d0d1a]">
        <div className="h-[5px] bg-[#FFE600] w-full relative z-20" />
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Process />
          </Suspense>
        </ErrorBoundary>
        <div className="h-[5px] bg-[#FF3AF2] w-full relative z-20" />
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}