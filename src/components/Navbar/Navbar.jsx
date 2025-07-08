import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router";
import './nav.css'

const Navbar = () => {

    const links = <>
        <NavLink>Home</NavLink>
        <NavLink>Available Camps</NavLink>
        {/* <NavLink></NavLink>
        <NavLink></NavLink> */}
    </>

  return (
    <div className="sticky top-0 z-50 backdrop-blur-3xl shadow-2xs py-3">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm flex gap-3 text-base dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center ">
                <img 
                className=" w-18" 
                src="https://res.cloudinary.com/dv6p7mprd/image/upload/v1751923329/logo02_h3at9o.png" alt="" />
                <a className=" text-3xl font-bold text-[#1e74d2] poppins ">MediCamp</a>            
            </div>        
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4 text-base">
           {links}
          </ul>
        </div>
        <div className="navbar-end ">
          <NavLink className="text-base">Join Us</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
