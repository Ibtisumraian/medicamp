import React from 'react';
import { signOut } from 'firebase/auth';
import { Link, NavLink, Outlet } from 'react-router';
import { toast, Bounce } from 'react-toastify';
import { auth } from '../components/firebase/firebase.init';
import { GoHome, GoSignOut } from 'react-icons/go';
import { MdOutlineDashboard, MdOutlinePerson,MdOutlineAddLocation,MdOutlineSettings} from 'react-icons/md';
import { RiFileList3Line } from 'react-icons/ri';
import { BsCheck2Square } from "react-icons/bs";

    // const NavItem = ({ to, icon, children }) => (
    //     <NavLink
    //         to={to}
    //         className={({ isActive }) => 
    //             `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ease-in-out font-semibold text-slate-700 hover:bg-white/50 ` +
    //             (isActive ? 'bg-white text-[#1e74d2] shadow-md' : 'hover:text-[#1e74d2]')
    //         }
    //     >
    //         {icon}
    //         <span>{children}</span>
    //     </NavLink>
    // );


const Dashboard = () => {

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success('Sign Out Successful!', {
                    position: 'top-right',
                    autoClose: 3000,
                    theme: 'light',
                    transition: Bounce,
                });
            })
            .catch((error) => {
                console.error(error);
                toast.error('Sign Out Failed.', {
                    position: 'top-right',
                    autoClose: 3000,
                    theme: 'light',
                    transition: Bounce,
                });
            });
    };

    const sidebarLinks = (
        <>
            <Link className='flex items-center gap-2 mb-4' to="/Dashboard" ><MdOutlineDashboard size={22} /> Overview</Link>
            <Link className='flex items-center gap-2 mb-4' to="/Dashboard/OrganizerProfile" ><MdOutlinePerson size={22} />Profile</Link>
            <Link className='flex items-center gap-2 mb-4' to="/Dashboard/add-camp" ><MdOutlineAddLocation size={22} />Add a Camp</Link>
            <Link className='flex items-center gap-2 mb-4' to="/Dashboard/manage-camps" ><MdOutlineSettings size={22} />Manage Camps</Link>
            <Link className='flex items-center gap-2 mb-4' to="/Dashboard/manage-registrations" ><BsCheck2Square size={22} />Manage Registrations</Link>
        </>
    );

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            {/* --- DESKTOP SIDEBAR --- */}
            <aside className="w-72 bg-gradient-to-br from-[#e5f2fa] to-[#a7d4f9] sticky top-0 h-screen hidden lg:flex flex-col p-6">
                <div className="flex items-center gap-3 mb-10">
                    <div className="bg-[#1e74d2] p-2 rounded-lg">
                        <img className='w-12' src="https://res.cloudinary.com/dv6p7mprd/image/upload/v1752010021/ChatGPT_Image_Jul_8__2025__03_05_06_AM-removebg-preview_nbdpj2.png" alt="" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-600">MediCamp</h1>
                </div>

                <nav className="flex-1 flex flex-col gap-3 text-gray-600">
                    {sidebarLinks}
                </nav>

                <div className="pt-4 mt-4 border-t border-gray-400">
                    <Link className='flex items-center gap-2 text-gray-600'  to="/"><GoHome size={22} />Back to Home</Link>
                    <button
                        onClick={handleSignOut}
                        className="flex items-center gap-4 w-full mt-2 py-3 rounded-xl text-red-500 font-semibold transition-all duration-300 hover:bg-red-100"
                    >
                        <GoSignOut size={22} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* --- MAIN CONTENT & MOBILE DRAWER --- */}
            <main className="flex-1 overflow-y-auto">
                <div className="drawer lg:hidden">
                    <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col">
                        {/* Navbar for Mobile */}
                        <div className="navbar bg-gradient-to-br from-[#e5f2fa] to-[#a7d4f9] text-gray-600 shadow-lg">
                            <div className="flex-none">
                                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                                </label>
                            </div>
                            <div className="flex-1 px-2 mx-2 font-bold">MediCamp Dashboard</div>
                        </div>
                        {/* Page content will be rendered here */}
                        <div className="p-4 sm:p-6  min-h-screen">
                           <Outlet />
                        </div>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="menu p-4 w-72 min-h-full bg-white flex flex-col">
                            <h1 className="text-xl font-bold text-slate-800 p-4 mb-4">MediCamp</h1>
                            <nav className="flex-1 flex flex-col gap-2 text-gray-600">
                                {sidebarLinks}
                            </nav>
                            <div className="pt-4 mt-4 border-t border-slate-200">
                                <Link className='flex items-center gap-2 text-gray-600' to="/"><GoHome size={22} />Back to Home</Link>
                                <button
                                    onClick={handleSignOut}
                                    className="flex items-center gap-4 w-full mt-2 py-3 rounded-xl text-red-500 font-semibold transition-all duration-300 hover:bg-red-100"
                                >
                                    <GoSignOut size={22} />
                                    <span>Sign Out</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main content area for desktop */}
                <div className="hidden lg:block p-6 sm:p-8 h-full">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;