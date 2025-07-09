import React from "react";
import { Link } from "react-router";

const campData = [
  {
    id: "wc2025-bagerhat",
    name: "Community Wellness & Health Screening",
    image: "https://res.cloudinary.com/dv6p7mprd/image/upload/v1752003100/freepik__the-style-is-candid-image-photography-with-natural__73695_qakv6h.jpg",
    fees: "Free",
    dateTime: "October 26, 2025 at 9:00 AM",
    location: "Bagerhat Stadium Complex",
    doctor: "Dr. Fatima Ahmed",
    participants: "250+ Participants",
  },
  {
    id: "hc2025-dhaka",
    name: "Urban Health Checkup Drive",
    image: "https://res.cloudinary.com/dv6p7mprd/image/upload/v1752003100/freepik__the-style-is-candid-image-photography-with-natural__73695_qakv6h.jpg",
    fees: "$15",
    dateTime: "November 3, 2025 at 10:00 AM",
    location: "Dhaka Central Medical Hall",
    doctor: "Dr. Hossain Kabir",
    participants: "180+ Participants",
  },
  {
    id: "rc2025-cox",
    name: "Coastal Rural Camp",
    image: "https://res.cloudinary.com/dv6p7mprd/image/upload/v1752003100/freepik__the-style-is-candid-image-photography-with-natural__73695_qakv6h.jpg",
    fees: "Free",
    dateTime: "December 1, 2025 at 8:30 AM",
    location: "Cox’s Bazar Rural Clinic",
    doctor: "Dr. Nasima Sultana",
    participants: "300+ Participants",
  },
  {
    id: "fc2025-khulna",
    name: "Family Health Awareness Camp",
    image: "https://res.cloudinary.com/dv6p7mprd/image/upload/v1752003100/freepik__the-style-is-candid-image-photography-with-natural__73695_qakv6h.jpg",
    fees: "$10",
    dateTime: "October 30, 2025 at 11:00 AM",
    location: "Khulna Community Center",
    doctor: "Dr. Tanveer Alam",
    participants: "220+ Participants",
  },
  {
    id: "mc2025-rajshahi",
    name: "Mother & Child Care Camp",
    image: "https://res.cloudinary.com/dv6p7mprd/image/upload/v1752003100/freepik__the-style-is-candid-image-photography-with-natural__73695_qakv6h.jpg",
    fees: "Free",
    dateTime: "November 10, 2025 at 9:00 AM",
    location: "Rajshahi Health Campus",
    doctor: "Dr. Mahiya Rahman",
    participants: "270+ Participants",
  },
  {
    id: "ec2025-sylhet",
    name: "Elderly Wellness Screening",
    image: "https://res.cloudinary.com/dv6p7mprd/image/upload/v1752003100/freepik__the-style-is-candid-image-photography-with-natural__73695_qakv6h.jpg",
    fees: "$8",
    dateTime: "November 18, 2025 at 10:30 AM",
    location: "Sylhet Health Plaza",
    doctor: "Dr. Saiful Haque",
    participants: "190+ Participants",
  },
];

const PopularCamps = () => {
  return (
      <div>
          <div className="text-center py-26 pb-8">
              <h1 className="poppins text-4xl font-bold">Popular Medical Camps</h1>
          </div>
        <div className="w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto p-8 ">
        {campData.map((camp) => (
            <div
            key={camp.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 group"
            >
            <div className="relative">
                <img
                src={camp.image}
                alt={camp.name}
                className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#e5f2fa] text-[#1e74d2] text-sm font-bold px-4 py-1.5 rounded-full shadow-md">
                Fees: {camp.fees}
                </div>
            </div>

            <div className="p-6">
                <h3
                className="text-2xl poppins font-bold text-slate-800 mb-3 truncate"
                title={camp.name}
                >
                {camp.name}
                </h3>

                <div className="space-y-3 text-slate-600">
                <div className="flex items-center">
                    <svg className="h-5 w-5 text-[#1e74d2] mr-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
                    <span>{camp.dateTime}</span>
                </div>
                <div className="flex items-center">
                    <svg className="h-5 w-5 text-[#1e74d2] mr-3" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    <span>{camp.location}</span>
                </div>
                {/* <div className="flex items-center">
                    <svg className="h-5 w-5 text-[#1e74d2] mr-3" viewBox="0 0 20 20" fill="currentColor"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
                    <span>Led by: <span className="font-medium">{camp.doctor}</span></span>
                </div> */}
                </div>
            </div>

            <div className="px-6 pb-6 pt-4 border-t border-slate-200 mt-4 flex justify-between items-center">
                <div className="flex items-center text-sm text-slate-500">
                <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm-1.5 5.5a3 3 0 00-3 0V12a2 2 0 00-2 2v1a2 2 0 002 2h6a2 2 0 002-2v-1a2 2 0 00-2-2v-.5a3 3 0 00-3 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zm-1.5 5.5a3 3 0 00-3 0V12a2 2 0 00-2 2v1a2 2 0 002 2h6a2 2 0 002-2v-1a2 2 0 00-2-2v-.5a3 3 0 00-3 0z" /></svg>
                <span>{camp.participants}</span>
                </div>

                <Link
                to={`/CampDetails/${camp.id}`}            
                className="bg-[#1e74d2] text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center group-hover:pl-4 group-hover:pr-6"
                >
                Details
                <svg className="h-5 w-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </Link>
            </div>
            </div>
        ))}
        </div> 
        <div className="mb-32 flex items-center justify-center p-8">
            <Link className="text-2xl poppins text-white bg-[#1e74d2] hover:to-blue-500 rounded-md py-2 px-5 ">See All</Link>            
        </div>         
    </div>
  );
};

export default PopularCamps;
