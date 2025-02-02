import React, { forwardRef } from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className=" paddings innerWidth h-container">
        <img src="./logo.png" alt="" width={100} />
        <div className="flexCenter h-menu">
          <a href="">Residencies</a>
          <a href="">Our Value</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="button">
            <a href="">Contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;

// export const Button = forwardRef(({ children, ...props }, ref) => {
//   return (
//     <button ref={ref} {...props} className="btn">
//       {children}
//     </button>
//   );
// });

// Button.displayName = "button";
