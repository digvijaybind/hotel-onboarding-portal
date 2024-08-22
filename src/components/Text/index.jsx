import React from 'react';

// Define a mapping of text size classes
const sizeClasses = {
  txtMontserratMedium14RedA100: 'font-medium font-montserrat text-red-500',
  txtInterExtraBold48: 'font-extrabold font-inter text-4xl',
  txtMontserratRegular16: 'font-montserrat font-normal text-base',
  txtMontserratMedium14: 'font-medium font-montserrat text-sm',
  txtMontserratRegular14: 'font-montserrat font-normal text-sm',
  txtMontserratRegular16Gray900:
    'font-montserrat font-normal text-base text-gray-900',
};

// Text component for rendering different styles and sizes
const Text = ({
  children,
  className = '',
  size,
  as: Component = 'p', 
  ...restProps
}) => {
  // Combine default and conditional class names
  const sizeClass = size ? sizeClasses[size] : '';

  return (
    <Component className={`text-left ${sizeClass} ${className}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
