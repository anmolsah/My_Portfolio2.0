import { useRef, useEffect, useState } from 'react';

export const useInViewVideo = (options = {}) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsInView(isVisible);
        
        if (isVisible) {
          if (!hasLoaded) {
            video.load();
            setHasLoaded(true);
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '50px',
        ...options 
      }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [hasLoaded]);

  return { videoRef, isInView, hasLoaded };
};

export default useInViewVideo;
