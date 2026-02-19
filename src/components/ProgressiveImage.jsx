import React, { useState } from 'react';

// Logic: Image rendering with simulated delay for cinematic effect
const ProgressiveImage = ({ src, placeholder, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    // Simulate network delay (0.3s)
    setTimeout(() => {
      setIsLoaded(true);
    }, 300); 
  };

  // Render Strategy:
  // 1. Layer 1 (Bottom): Low-Res Placeholder (Blur) -> Disappears when loaded
  // 2. Layer 2 (Top): High-Res Image -> Fades in when loaded
  return (
    <div className={`relative overflow-hidden ${className} bg-neutral-900`}>
      <img
        src={placeholder}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover filter blur-md scale-110 transition-opacity duration-[1000ms] ease-out ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ zIndex: 1 }}
      />

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={handleLoad}
        className={`relative w-full h-full object-cover transition-opacity duration-[1000ms] ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: 2 }}
      />
    </div>
  );
};

export default ProgressiveImage;