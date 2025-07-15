import React, { useState, useMemo } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ChevronDown, ChevronUp, Search, FilePenLine, Trash2, ShieldAlert } from 'lucide-react';
import useAxiosSecure from '../../hooks/useAxiosSecure/useAxiosSecure';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, campName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-2xl flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-95 hover:scale-100">
        <div className="p-8 text-center">
          <ShieldAlert className="mx-auto h-16 w-16 text-red-500 animate-pulse" />
          <h3 className="mt-4 text-2xl font-bold text-gray-800">Confirm Deletion</h3>
          <p className="mt-3 text-gray-600">
            Are you sure you want to permanently delete the camp: <br />
            <span className="font-semibold text-red-600">{campName}</span>?
          </p>
          <p className="mt-2 text-sm text-gray-500">This action cannot be undone.</p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-6 py-3 rounded-lg font-semibold text-white bg-red-600 hover:bg-red-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Delete Camp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const ManageCamps = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'date', direction: 'ascending' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCamp, setSelectedCamp] = useState(null);
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient(); 
  const navigate =useNavigate()

  const { data: camps = [], isLoading, isError, error } = useQuery({
    queryKey: ["camps"],
    queryFn: async () => {
      const res = await axiosSecure.get("/camps");
      return res.data; 
    },
  });


  const deleteCampMutation = useMutation({
    mutationFn: (campId) => {
      return axiosSecure.delete(`/delete-camp/${campId}`);
    },
    onSuccess: () => {





      queryClient.invalidateQueries({ queryKey: ['camps'] });
      Swal.fire({
                icon: 'success',
                title: 'Deleted!',
                text: 'Camp Delete successfully.',
                timer: 2000,
                showConfirmButton: false,
              });
    },
    onError: (err) => {
        console.error("Deletion failed:", err);
        alert("Failed to delete camp. Please try again.");
    }
  });

  const sortedAndFilteredCamps = useMemo(() => {
    let sortableCamps = [...camps];

    // Sorting logic
    if (sortConfig !== null) {
      sortableCamps.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }

    if (!searchTerm) {
        return sortableCamps;
    }

    return sortableCamps.filter(camp =>
      camp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      camp.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (camp.professionalName && camp.professionalName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [camps, sortConfig, searchTerm]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleUpdate = (id) => {
    // console.log(`Navigating to update page for camp ID: /update-camp/${campId}`);
    // alert(`Simulating navigation to: /update-camp/${campId}`);
    console.log(id);
    
    navigate(`/Dashboard/UpdateCamp/${id}`)
  };

  const handleDeleteClick = (camp) => {
    setSelectedCamp(camp);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedCamp) {
      deleteCampMutation.mutate(selectedCamp._id);
    }
    setIsModalOpen(false);
    setSelectedCamp(null);
  };

  const SortableHeader = ({ children, columnKey }) => {
    const isSorted = sortConfig.key === columnKey;
    const icon = isSorted ? (sortConfig.direction === 'ascending' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />) : null;
    return (
      <th onClick={() => requestSort(columnKey)} className="p-4 text-left text-sm font-semibold text-gray-100 uppercase tracking-wider cursor-pointer hover:bg-blue-600 transition-colors duration-200">
        <div className="flex items-center gap-2">
          {children} {icon}
        </div>
      </th>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">Manage Your Camps</h1>
          <p className="mt-2 text-lg text-gray-500">Oversee, update, and organize all your scheduled medical camps.</p>
        </header>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search camps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="bg-[#1e74d2]">
                <tr>
                  <SortableHeader columnKey="name">Camp Name</SortableHeader>
                  <SortableHeader columnKey="date">Date & Time</SortableHeader>
                  <SortableHeader columnKey="location">Location</SortableHeader>
                  <SortableHeader columnKey="professionalName">Healthcare Professional</SortableHeader>
                  <th className="p-4 text-center text-sm font-semibold text-gray-100 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {isLoading ? (
                    <tr><td colSpan="5" className="text-center p-8">Loading camps...</td></tr>
                ) : isError ? (
                    <tr><td colSpan="5" className="text-center p-8 text-red-500">Error: {error.message}</td></tr>
                ) : sortedAndFilteredCamps.length > 0 ? sortedAndFilteredCamps.map((camp, index) => (
                  <tr key={camp._id} className={`transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50`}>
                    <td className="p-4 font-medium text-gray-900 whitespace-nowrap">{camp.name}</td>
                    <td className="p-4 whitespace-nowrap">
                      <div>{new Date(camp.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                      <div className="text-xs text-gray-500">{camp.time}</div>
                    </td>
                    <td className="p-4 whitespace-nowrap">{camp.location}</td>
                    <td className="p-4 whitespace-nowrap">{camp.professionalName}</td>
                    <td className="p-4 text-center whitespace-nowrap">
                      <div className="flex justify-center items-center gap-3">
                        <button
                          onClick={() => handleUpdate(camp._id)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-[#1e74d2] hover:bg-[#81b0d6] transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1e74d2] focus:ring-offset-2"
                          aria-label={`Update ${camp.name}`}
                        >
                          <FilePenLine className="h-4 w-4" />
                          <span>Update</span>
                        </button>
                        <button
                          onClick={() => handleDeleteClick(camp)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-rose-500 hover:bg-rose-600 transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
                          aria-label={`Delete ${camp.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span>Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="5" className="text-center p-8 text-gray-500">
                      <div className="flex flex-col items-center gap-2">
                        <Search className="h-10 w-10 text-gray-400" />
                        <span className="font-semibold">No camps found</span>
                        <span className="text-sm">Try adjusting your search terms.</span>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        campName={selectedCamp?.name}
      />
    </div>
  );
};

export default ManageCamps;