import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router';
import { PlusCircle, ArrowRight } from 'lucide-react';

const user = {
  name: 'Anika',
};

const stats = [
  { name: 'Total Camps', value: '12',  },
  { name: 'Total Registrations', value: '1,845',  },
  { name: 'Upcoming Camps', value: '3',  },
  { name: 'Avg. Participants', value: '153', },
];

const chartData = [
  { month: 'Jan', registrations: 65 },
  { month: 'Feb', registrations: 59 },
  { month: 'Mar', registrations: 80 },
  { month: 'Apr', registrations: 81 },
  { month: 'May', registrations: 56 },
  { month: 'Jun', registrations: 95 },
  { month: 'Jul', registrations: 110 },
];

const recentActivity = [
    { id: 1, type: 'New Registration', text: 'Rahim Sheikh registered for "Dental Care Camp".', time: '2 hours ago' },
    { id: 2, type: 'Camp Update', text: '"Wellness Camp - Morrelganj" was updated.', time: '5 hours ago' },
    { id: 3, type: 'New Registration', text: 'Fatima Akter registered for "Eye Care Camp".', time: '1 day ago' },
    { id: 4, type: 'New Camp Added', text: 'A new camp "Pediatric Health - Fakirhat" was created.', time: '2 days ago' },
];


const Overview = () => {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-800">Good morning, {user.name}!</h1>
                <p className="text-slate-500 mt-1">Here's a summary of your organization's activities.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.name} className="bg-white p-6 rounded-2xl shadow-md border border-slate-200/80">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-slate-500">{stat.name}</p>
                            <span className="text-2xl">{stat.icon}</span>
                        </div>
                        <p className="text-4xl font-bold text-slate-800 mt-2">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* --- Registration Trends Chart --- */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md border border-slate-200/80">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Registration Trends</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorRegistrations" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1e74d2" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#1e74d2" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                                <XAxis dataKey="month" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" />
                                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.75rem' }} />
                                <Area type="monotone" dataKey="registrations" stroke="#1e74d2" fillOpacity={1} fill="url(#colorRegistrations)" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200/80">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        {recentActivity.map(activity => (
                            <div key={activity.id} className="flex items-start gap-3">
                                <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${activity.type === 'New Registration' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                                <div>
                                    <p className="text-sm text-slate-700">{activity.text}</p>
                                    <p className="text-xs text-slate-400">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Link to="/dashboard/AddACamp" className="group bg-white p-6 rounded-2xl shadow-md border border-slate-200/80 flex items-center justify-between transition-all hover:border-[#1e74d2] hover:shadow-lg">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#e5f2fa] p-3 rounded-full">
                                <PlusCircle className="w-6 h-6 text-[#1e74d2]" />
                            </div>
                            <div>
                                <p className="font-bold text-slate-800">Add a New Camp</p>
                                <p className="text-sm text-slate-500">Create and publish a new medical camp.</p>
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#1e74d2] transition-colors" />
                    </Link>
                    <Link to="/dashboard/manage-registrations" className="group bg-white p-6 rounded-2xl shadow-md border border-slate-200/80 flex items-center justify-between transition-all hover:border-[#1e74d2] hover:shadow-lg">
                         <div className="flex items-center gap-4">
                            <div className="bg-[#e5f2fa] p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1e74d2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-slate-800">View All Registrations</p>
                                <p className="text-sm text-slate-500">Manage participants for all camps.</p>
                            </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#1e74d2] transition-colors" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Overview;
