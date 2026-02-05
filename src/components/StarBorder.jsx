const StarBorder = ({
  as: Component = 'div', // MODIFIED: Set to 'div' for the Header wrapper
  className = '',
  color = '#000000', 
  speed = '5s',     
  thickness = 1,    
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{
        padding: `${thickness}px`, 
        ...rest.style
      }}
      {...rest}>
      {/* Moving Stars */}
      <div
        className="absolute w-[300%] h-[50%] opacity-100 -bottom-2.75 right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 20%)`,
          animationDuration: speed
        }}></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-100 -top-2.5 left-[-250%] rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 20%)`,
          animationDuration: speed
        }}></div>
      
      {/* INNER CONTENT: Changed bg-black to bg-white to match your portfolio */}
      <div className="relative z-1 bg-white rounded-[calc(1rem-1px)] w-full h-full">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;