import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import './nav.css'
import useAuth from "../../hooks/useAuth/useAuth";
import { Bounce, toast } from "react-toastify";
import { signOut } from 'firebase/auth';
import { auth } from '../../components/firebase/firebase.init';

const Navbar = () => {

    const { user } =useAuth()
    
    const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success('Sign Out Successful!', {
          position: 'top-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

    const links = <>
        <NavLink to='/'>Home</NavLink>
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
        <div className="navbar-end">
          {!user ? (
            <Link
              to="/SignIn"
              className="text-base border border-gray-400 rounded-2xl py-2 px-4 hover:bg-gray-100 transition"
            >
              Join Us
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full border-3 border-[#1e74d2]">
                  <img src={user.photoURL || 'https://i.ibb.co/YTsRKgQ/default-avatar.png'} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="bg-gradient-to-br from-[#e5f2fa] to-transparent mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <span className="font-semibold text-lg pointer-events-none poppins">{user.displayName || 'User'}</span>
                </li>
                <hr />
                <li>
                  <Link to="/dashboard" className="text-base">Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleSignOut} className="text-base hover:bg-red-50 text-red-300">Signout</button>
                </li>
              </ul>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;
