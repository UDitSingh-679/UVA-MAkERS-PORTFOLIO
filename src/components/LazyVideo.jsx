import { useState, useEffect, useRef } from 'react';

const LazyVideo = ({ src, poster, className, width, height, altText = "Video preview", fallbackSrc }) => {
  const [isVisible, setIsVisible] = useState(() => {
    // Check for prefers-reduced-motion on initial render
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  // Auto-generate MP4 fallback from WebM filename if not provided
  const mp4Fallback = fallbackSrc || (src?.endsWith('.webm') ? src.replace('.webm', '.mp4') : null);

  // Check for prefers-reduced-motion (re-evaluate on mount for dynamic changes)
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  // Set up intersection observer for lazy loading
  useEffect(() => {
    // If reduced motion is preferred, we already set isVisible to true via initial state
    if (prefersReducedMotion) return;

    const currentRef = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) observer.observe(currentRef);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const handleVideoError = () => {
    setHasError(true);
  };

  // If reduced motion OR video error, show static poster
  const showStaticPoster = prefersReducedMotion || hasError;

  return (
    <div ref={videoRef} className="relative w-full h-full">
      {isVisible && !showStaticPoster ? (
        <video
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={className}
          width={width}
          height={height}
          aria-label={altText}
          onError={handleVideoError}
        >
          <source src={src} type="video/webm" />
          {mp4Fallback && <source src={mp4Fallback} type="video/mp4" />}
        </video>
      ) : (
         <img
           src={poster}
           alt={altText}
           className={`${className} opacity-60 blur-[2px] scale-105`}
           width={width}
           height={height}
           loading="lazy"
           decoding="async"
         />
      )}
    </div>
  );
};

export default LazyVideo;
