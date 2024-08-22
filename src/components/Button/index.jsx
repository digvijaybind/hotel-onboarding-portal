import React from 'react';


const shapes = { round: 'rounded' };
const variants = {
  fill: { cyan_300: 'bg-cyan-300 text-gray-900_01' },
};
const sizes = { xs: 'p-[15px]' };


const Button = ({
  children,
  className = '',
  leftIcon,
  rightIcon,
  shape = 'round',
  size = 'xs',
  variant = 'fill',
  color = 'cyan_300',
  ...restProps
}) => {
  const computedClassName = [
    className,
    shapes[shape] || '',
    sizes[size] || '',
    variants[variant]?.[color] || '',
  ].join(' ');

  return (
    <button className={computedClassName.trim()} {...restProps}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export { Button };
