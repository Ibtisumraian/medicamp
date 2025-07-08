import React from "react";
import { Star } from "lucide-react"; // optional: you can use HeroIcons or fontawesome

const feedbacks = [
  {
    id: 1,
    name: "Ayesha Siddiqua",
    role: "Camp Participant",
    rating: 5,
    comment:
      "This camp was a life-changing experience! The doctors were caring and the facilities were excellent.",
  },
  {
    id: 2,
    name: "Tanvir Alam",
    role: "Local Attendee",
    rating: 4,
    comment:
      "Very well-organized and helpful. I appreciated the free services and expert consultation.",
  },
  {
    id: 3,
    name: "Rina Akter",
    role: "Mother of a Patient",
    rating: 5,
    comment:
      "Highly professional and friendly healthcare staff. Would definitely recommend to others!",
  },
];

const FeedbackAndRatings = () => {
  return (
    // <section className="w-11/12 mx-auto pt-32 py-12">
    //   <h2 className="text-3xl font-bold text-center text-[#1e74d2] mb-10">
    //     Participant Feedback & Ratings
    //   </h2>

    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    //     {feedbacks.map((feedback) => (
    //       <div
    //         key={feedback.id}
    //         className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-100"
    //       >
    //         <div className="mb-4">
    //           <div className="flex items-center space-x-2">
    //             {[...Array(feedback.rating)].map((_, idx) => (
    //               <Star key={idx} size={18} className="text-yellow-400 fill-yellow-400" />
    //             ))}
    //           </div>
    //         </div>

    //         <p className="text-gray-700 italic border-l-4 border-blue-400 pl-4 mb-5 leading-relaxed">
    //           “{feedback.comment}”
    //         </p>

    //         <div className="text-right">
    //           <p className="text-sm font-semibold text-slate-800">{feedback.name}</p>
    //           <p className="text-xs text-slate-500">{feedback.role}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    <section class="bg-gradient-to-br from-[#e5f2fa] to-[#a7d4f9] py-20 px-4 sm:px-6 lg:px-8">
  <div class="max-w-7xl mx-auto">

    <div class="text-center">
      <h2 class="text-4xl font-bold text-slate-800 tracking-tight">
        Voices from Our Community
      </h2>
      <p class="mt-4 text-lg max-w-2xl mx-auto text-slate-600">
        See what people are saying about our recent medical camps and the impact we've made together.
      </p>
    </div>

    <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 bg-white/50 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto shadow-md">
      <div class="text-center sm:text-left">
        <p class="text-5xl font-bold text-[#1e74d2]">4.8</p>
        <p class="text-slate-600 font-medium">out of 5</p>
      </div>
      <div class="w-px h-16 bg-slate-300 hidden sm:block"></div> <div class="text-center sm:text-left">
        <div class="flex justify-center sm:justify-start items-center text-3xl text-[#1e74d2]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /><path d="M10 2.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12A.75.75 0 0110 2.25z" fill="#a7d4f9"/></svg>
        </div>
        <p class="mt-1 text-sm text-slate-500">Based on 250+ participant reviews</p>
      </div>
    </div>
    
    <div class="mt-16 grid gap-8 lg:grid-cols-3">
      
      <div class="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div aria-hidden="true" class="absolute inset-0">
          <svg class="absolute top-4 left-4 h-24 w-24 text-slate-200/50" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L25.864 4z"/></svg>
        </div>
        <p class="relative text-lg text-slate-700">"The doctors were so patient and thorough. I received a proper check-up for the first time in years. This camp was a true blessing for our village."</p>
        <footer class="mt-6">
          <p class="font-semibold text-slate-800">Abdul Karim</p>
          <p class="text-sm text-slate-500">Rampal, Bagerhat</p>
        </footer>
      </div>

      <div class="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div aria-hidden="true" class="absolute inset-0">
          <svg class="absolute top-4 left-4 h-24 w-24 text-slate-200/50" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L25.864 4z"/></svg>
        </div>
        <p class="relative text-lg text-slate-700">"Getting the right medicines for free has made a huge difference for my family's budget. The organization was fantastic and everyone was so helpful."</p>
        <footer class="mt-6">
          <p class="font-semibold text-slate-800">Selina Akter</p>
          <p class="text-sm text-slate-500">Mongla Port Area</p>
        </footer>
      </div>
      
      <div class="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <div aria-hidden="true" class="absolute inset-0">
          <svg class="absolute top-4 left-4 h-24 w-24 text-slate-200/50" fill="currentColor" viewBox="0 0 32 32"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L25.864 4z"/></svg>
        </div>
        <p class="relative text-lg text-slate-700">"An incredibly well-organized event. The volunteers managed the crowd perfectly, and the entire process was smooth. We need more camps like this!"</p>
        <footer class="mt-6">
          <p class="font-semibold text-slate-800">Rahmat Sheikh</p>
          <p class="text-sm text-slate-500">Bagerhat Sadar</p>
        </footer>
      </div>

    </div>
  </div>
</section>
  );
};

export default FeedbackAndRatings;
