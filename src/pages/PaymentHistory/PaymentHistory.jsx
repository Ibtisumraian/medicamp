import React, { useState, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChevronDown, ChevronUp, CreditCard, DollarSign, Calendar, Hash } from 'lucide-react';

import useAuth from '../../hooks/useAuth/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure/useAxiosSecure';


const SortableHeader = ({ children, columnKey, sortConfig, requestSort }) => {
    const isSorted = sortConfig.key === columnKey;
    const icon = isSorted ? (sortConfig.direction === 'ascending' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />) : null;
    
    return (
        <th onClick={() => requestSort(columnKey)} className="p-4 text-sm font-semibold text-slate-600 uppercase tracking-wider cursor-pointer hover:bg-slate-200 transition-colors">
            <div className="flex items-center gap-2">
                {children} {icon}
            </div>
        </th>
    );
};

const PaymentHistory = () => {
    const { user, loading: authLoading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [sortConfig, setSortConfig] = useState({ key: 'paidAt', direction: 'descending' });

    const { data: payments = [], isLoading } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        enabled: !authLoading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/participants/email/${user.email}`);
            return data;
        },
    });

    const sortedPayments = useMemo(() => {
        let sortableItems = [...payments];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                let aValue = a[sortConfig.key];
                let bValue = b[sortConfig.key];

                if (sortConfig.key === 'paidAt') {
                    aValue = new Date(aValue);
                    bValue = new Date(bValue);
                }

                if (aValue < bValue) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortableItems;
    }, [payments, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
            direction = 'ascending';
        }
        setSortConfig({ key, direction });
    };

    if (isLoading || authLoading) {
        return <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg text-indigo-600"></span></div>;
    }

    return (
        <div className="bg-slate-50 min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Payment History</h1>
                    <p className="mt-2 text-lg text-slate-500">A record of all your completed payments.</p>
                </header>

                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-700">
                            <thead className="bg-slate-100 border-b-2 border-slate-200">
                                <tr>
                                    <SortableHeader columnKey="camp_name" sortConfig={sortConfig} requestSort={requestSort}>Camp Name</SortableHeader>
                                    <SortableHeader columnKey="amountPaid" sortConfig={sortConfig} requestSort={requestSort}>Amount Paid</SortableHeader>
                                    <th className="p-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Transaction ID</th>
                                    <SortableHeader columnKey="paidAt" sortConfig={sortConfig} requestSort={requestSort}>Payment Date</SortableHeader>
                                    <th className="p-4 text-sm font-semibold text-slate-600 uppercase tracking-wider">Payment Method</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {sortedPayments.length > 0 ? sortedPayments.map((payment) => (
                                    (payment.isPayment_confirmed === true ? <tr key={payment._id} className="hover:bg-slate-50">
                                        <td className="p-4 font-medium text-slate-900">{payment.camp_name}</td>
                                        <td className="p-4">
                                            <div className="flex items-center font-semibold text-green-600">
                                                <DollarSign className="w-4 h-4 mr-1" />
                                                {payment.camp_fee}
                                            </div>
                                        </td>
                                        <td className="p-4 font-mono text-slate-500 text-xs">
                                            <div className="flex items-center gap-2">
                                                <Hash className="w-4 h-4" />
                                                {payment.data?.transactionId}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                                                {new Date(payment.data?.paidAt).toLocaleDateString('en-US', {
                                                    year: 'numeric', month: 'long', day: 'numeric',
                                                })}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <div className="inline-flex items-center gap-2 capitalize bg-slate-200 text-slate-800 px-3 py-1 rounded-full font-semibold">
                                                <CreditCard className="w-4 h-4" />
                                                {payment.data?.paymentMethod}
                                            </div>
                                        </td>
                                    </tr> : "")
                                )) : (
                                    <tr>
                                        <td colSpan="5" className="text-center p-12 text-slate-500">
                                            <div className="flex flex-col items-center gap-2">
                                                <CreditCard className="w-12 h-12 text-slate-300" />
                                                <span className="font-semibold text-lg">No Payment History Found</span>
                                                <span>It looks like you haven't made any payments yet.</span>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;