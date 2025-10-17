import React from 'react';

/**
 * A button component styled with a "Glassmorphism" or frosted glass effect,
 * inspired by modern Apple UI design (e.g., macOS/VisionOS).
 * It accepts an optional 'className' prop to apply custom styles.
 */
const GlassButton = ({ children,  onClick, className = '' }) => {

  // Base styles for the glass effect and interaction
  const glassClasses = `
    backdrop-filter backdrop-blur-lg 
    bg-white/10            /* Semi-transparent white background */
    py-1 px-3 mx-2
    rounded-2xl            /* Highly rounded corners */
    ring-1 ring-white/30   /* Subtle white border/highlight */
    shadow-lg shadow-black/30 /* Drop shadow for depth */
    transition-all duration-200 ease-out 
    flex items-center justify-center space-x-2
    hover:bg-white/20      /* Brighter on hover */
    hover:ring-white/50    /* Stronger highlight on hover */
    active:scale-[0.98]
    cursor-pointer
  `;

  // Combine all classes
  const finalClasses = `${glassClasses} ${className}`;

  return (
    <button onClick={onClick} className={finalClasses}>      
      {/* Button content */}
      <span>
        {children}
      </span>
    </button>
  );
};

export default GlassButton