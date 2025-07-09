import React from 'react';

// In a real application, you would pass a `camp` object as a prop
// const CampDetailsPage = ({ camp }) => { ... };
// And use the data like `camp.name`, `camp.imageUrl`, etc.

const CampDetails = () => {
  return (
    <main className=" py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mb-32">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        {/* ~~~~~~ Left Column: Info At a Glance ~~~~~~~ */}
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <div className="lg:col-span-1 space-y-8">
            
            {/* Camp Image */}
            <div className="rounded-2xl shadow-2xl overflow-hidden aspect-w-1 aspect-h-1">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070" alt="A doctor kindly speaking to a patient." />
            </div>

            {/* Details Card */}
            <div className="bg-gradient-to-br from-[#e5f2fa] to-transparent backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-slate-800 poppins border-b pb-3 mb-4">Camp Details</h2>
                <ul className="space-y-4 text-slate-700">
                    <li className="flex items-start">
                        
                        <div>
                            <span className="font-semibold text-slate-800">Date & Time</span><br />
                            Saturday, August 16, 2025<br />9:00 AM - 5:00 PM
                        </div>
                    </li>
                    <li className="flex items-start">
                        
                        <div>
                            <span className="font-semibold text-slate-800">Location</span><br />
                            Morrelganj Upazila Health Complex, Bagerhat
                        </div>
                    </li>
                    <li className="flex items-start">
                        
                        <div>
                            <span className="font-semibold text-slate-800">Camp Fees</span><br />
                            Completely Free of Charge
                        </div>
                    </li>
                    <li className="flex items-start">
                        
                        <div>
                            <span className="font-semibold text-slate-800">Available Slots</span><br />
                            Over 300+ slots available
                        </div>
                    </li>
                </ul>
            </div>
        </div>

      
        {/* Main Content  */}
        
        <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[#e5f2fa] to-transparent backdrop-blur-sm rounded-2xl shadow-lg p-8 sm:p-12">
                
                {/* Camp Name */}
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 poppins leading-tight">
                    Comprehensive Health & Wellness Camp - Morrelganj
                </h1>

                {/* Lead Professional */}
                <div className="mt-6 flex items-center space-x-4 border-t border-b border-slate-200 py-4">
                    <img className="h-16 w-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070" alt="Portrait of Dr. Ibrahim Chowdhury" />
                    <div>
                        <p className="text-sm text-slate-500">Lead Healthcare Professional</p>
                        <p className="text-xl font-bold text-[#1e74d2]">Dr. Ibrahim Chowdhury</p>
                        <p className="text-sm text-slate-600">MBBS, MD (Internal Medicine)</p>
                    </div>
                </div>

                {/* Description Section */}
                <div className="mt-8 prose prose-lg max-w-none text-slate-600">
                    <h2 className="text-slate-800">About this Camp</h2>
                    <p>ProHealth is proud to bring a full-day Comprehensive Health & Wellness Camp to the residents of Morrelganj. Our mission is to provide accessible, high-quality medical care to every member of the community, free of charge. This camp is an opportunity for you and your family to receive thorough health check-ups, expert consultations, and essential medicines without any financial burden.</p>

                    <h3 className="text-slate-800">Services Offered:</h3>
                    <ul className="text-slate-600">
                        <li><strong>General Medicine:</strong> Consultation for common illnesses, fevers, and chronic conditions like diabetes and hypertension.</li>
                        <li><strong>Pediatrics:</strong> Specialized care and growth monitoring for children.</li>
                        <li><strong>Maternal Health:</strong> Prenatal check-ups and guidance for expectant mothers.</li>
                        <li><strong>Dental Care:</strong> Basic dental examinations and advice on oral hygiene.</li>
                        <li><strong>Eye Care:</strong> Vision tests and screening for common eye diseases.</li>
                        <li><strong>Free Pharmacy:</strong> Dispensing of prescribed essential medicines.</li>
                    </ul>
                    
                    <p>Our dedicated team of doctors, nurses, and volunteers is committed to providing you with compassionate and respectful care. We look forward to welcoming you.</p>
                </div>
                
                {/* Join Camp Button */}
                <div className="mt-10">
                    <button className="inline-block w-full sm:w-auto text-center px-10 py-4 bg-[#1e74d2] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-[#185dab] cursor-pointer transition-all duration-300 transform hover:scale-105">
                        Join Camp
                    </button>
                </div>

            </div>
        </div>
      </div>
    </main>
  );
};

export default CampDetails;