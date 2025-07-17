import React from 'react'; 
import { signOut } from 'firebase/auth';
import { Link, NavLink, Outlet } from 'react-router';
import { toast, Bounce, ToastContainer } from 'react-toastify';
import { useQuery } from '@tanstack/react-query'; 
import { auth } from '../components/firebase/firebase.init';
import { GoHome, GoSignOut } from 'react-icons/go';
import { MdOutlineDashboard, MdOutlinePerson, MdOutlineAddLocation, MdOutlineSettings } from 'react-icons/md';
import { BsCheck2Square } from 'react-icons/bs';
import useAxiosSecure from '../hooks/useAxiosSecure/useAxiosSecure';
import useAuth from '../hooks/useAuth/useAuth';

const Dashboard = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: userData, isLoading: isRoleLoading } = useQuery({
        queryKey: ['userRole', user?.email],
        queryFn: async () => {
            if (!user?.email) return null;
            const res = await axiosSecure.get(`/users/${user.email}`);
            return res.data[0];
        },
        enabled: !!user?.email,
    });

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success('Sign Out Successful!', {
                    position: 'top-right', autoClose: 3000, theme: 'light', transition: Bounce,
                });
            })
            .catch((error) => {
                console.error(error);
                toast.error('Sign Out Failed.', {
                    position: 'top-right', autoClose: 3000, theme: 'light', transition: Bounce,
                });
            });
    };

    const adminSidebarLinks = (
        <>
            <Link className='flex items-center gap-2 mb-4 w-fit' to="/Dashboard"><MdOutlineDashboard size={22} /> Overview</Link>
            <Link className='flex items-center gap-2 mb-4 w-fit' to="/Dashboard/OrganizerProfile"><MdOutlinePerson size={22} />Profile</Link>
            <Link className='flex items-center gap-2 mb-4 w-fit' to="/Dashboard/AddACamp"><MdOutlineAddLocation size={22} />Add a Camp</Link>
            <Link className='flex items-center gap-2 mb-4 w-fit' to="/Dashboard/ManageCamps"><MdOutlineSettings size={22} />Manage Camps</Link>
            <Link className='flex items-center gap-2 mb-4 w-fit' to="/Dashboard/manage-registrations"><BsCheck2Square size={22} />Manage Registrations</Link>
        </>
    );

    const userSidebarLinks = (
        <>
            <Link className='flex items-center gap-2 mb-4 w-fit' to="/Dashboard"><MdOutlineDashboard size={22} /> Analytics</Link>
            <Link className='flex items-center gap-2 mb-4 w-fit' to="/Dashboard/OrganizerProfile"><MdOutlinePerson size={22} />Participant Profile</Link>
            <Link className='flex items-center gap-2 mb-4 w-fit' to="/Dashboard/RegisteredCamps"><MdOutlineAddLocation size={22} />Registered Camps</Link>
            <Link className='flex items-center gap-2 mb-4 w-fit' to="/Dashboard/PaymentHistory"><MdOutlineSettings size={22} />Payment History</Link>
        </>
    );

    const SidebarSkeleton = () => (
        <div className="flex flex-col gap-4">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 bg-slate-300 rounded-lg animate-pulse"></div>
            ))}
        </div>
    );

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            <ToastContainer />
            {/* --- DESKTOP SIDEBAR --- */}
            <aside className="w-72 bg-gradient-to-br from-[#e5f2fa] to-[#a7d4f9] sticky top-0 h-screen hidden lg:flex flex-col p-6">
                <Link to='/' className="flex items-center gap-3 mb-10">
                    <div className="bg-[#1e74d2] p-2 rounded-lg">
                        <img className='w-12' src="https://res.cloudinary.com/dv6p7mprd/image/upload/v1752010021/ChatGPT_Image_Jul_8__2025__03_05_06_AM-removebg-preview_nbdpj2.png" alt="" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-600">MediCamp</h1>
                </Link>

                <nav className="flex-1 flex flex-col gap-3 text-gray-600">
                    {isRoleLoading || !userData ? (
                        <SidebarSkeleton />
                        ) : userData.role.toLowerCase() === 'admin' ? adminSidebarLinks : userSidebarLinks}
                </nav>

                <div className="pt-4 mt-4 border-t border-gray-400">
                    <Link className='flex items-center gap-2 text-gray-600' to="/"><GoHome size={22} />Back to Home</Link>
                    <button
                        onClick={handleSignOut}
                        className="flex items-center gap-4 w-full mt-2 py-3 rounded-xl text-red-400 font-semibold transition-all duration-300 hover:bg-red-100"
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
                        <div className="p-4 sm:p-6  min-h-screen">
                           <Outlet />
                        </div>
                    </div>
                    <div className="drawer-side z-50">
                        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="menu p-4 w-72 min-h-full bg-white flex flex-col">
                            <h1 className="text-xl font-bold text-slate-800 p-4 mb-4">MediCamp</h1>
                            <nav className="flex-1 flex flex-col gap-2 text-gray-600">
                                {isRoleLoading || !userData ? (
                                    <SidebarSkeleton />
                                    ) : userData.role.toLowerCase() === 'admin' ? adminSidebarLinks : userSidebarLinks}
                            </nav>
                            <div className="pt-4 mt-4 border-t border-slate-200">
                                <Link className='flex items-center gap-2 text-gray-600' to="/"><GoHome size={22} />Back to Home</Link>
                                <button
                                    onClick={handleSignOut}
                                    className="flex items-center gap-4 w-full mt-2 py-3 rounded-xl text-red-400 font-semibold transition-all duration-300 hover:bg-red-100"
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