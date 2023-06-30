import React from "react";

const sizeClasses = {
  txtInterBold32Purple700: "font-bold font-inter",
  txtInterBold48: "font-bold font-inter",
  txtInterBold16: "font-bold font-inter",
  txtPoppinsBold20: "font-bold font-poppins",
  txtPoppinsRegular12IndigoA200: "font-normal font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtInterBold32: "font-bold font-inter",
  txtInterBold16Black900: "font-bold font-inter",
  txtPoppinsRegular12WhiteA700: "font-normal font-poppins",
  txtInterBold12: "font-bold font-inter",
  txtInterBold40: "font-bold font-inter",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtInterBold48WhiteA700: "font-bold font-inter",
  txtPoppinsBold150: "font-bold font-poppins",
  txtPoppinsRegular14Purple700: "font-normal font-poppins",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
