import React from "react";
import { Star } from "lucide-react"; 


const FeedbackAndRatings = () => {
  return (
    // <section className="bg-gradient-to-br from-[#e5f2fa] to-[#a7d4f9] py-20 px-4 sm:px-6 lg:px-8">
    //     <div className="max-w-7xl mx-auto">
    //         <div className="text-center">
    //         <h2 className="text-4xl font-bold text-slate-800 tracking-tight">
    //             Voices from Our Community
    //         </h2>
    //         <p className="mt-4 text-lg max-w-2xl mx-auto text-slate-600">
    //             See what people are saying about our recent medical camps and the impact we've made together.
    //         </p>
    //         </div>

    //         <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 bg-white/50 backdrop-blur-sm p-8 rounded-2xl max-w-2xl mx-auto shadow-md">
    //         <div className="text-center sm:text-left">
    //             <p className="text-5xl font-bold text-[#1e74d2]">4.8</p>
    //             <p className="text-slate-600 font-medium">out of 5</p>
    //         </div>
    //         <div className="w-px h-16 bg-slate-300 hidden sm:block"></div>
    //         <div className="text-center sm:text-left">
    //             <div className="flex justify-center sm:justify-start items-center text-3xl text-[#1e74d2]">
    //             {[...Array(5)].map((_, i) => (
    //                 <svg
    //                 key={i}
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 className="h-8 w-8"
    //                 viewBox="0 0 20 20"
    //                 fill="currentColor"
    //                 >
    //                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //                 </svg>
    //             ))}
    //             </div>
    //             <p className="mt-1 text-sm text-slate-500">Based on 250+ participant reviews</p>
    //         </div>
    //         </div>

    //         <div className="mt-16 grid gap-8 lg:grid-cols-3">
    //         {[
    //             {
    //             text: `"The doctors were so patient and thorough. I received a proper check-up for the first time in years. This camp was a true blessing for our village."`,
    //             name: "Abdul Karim",
    //             location: "Rampal, Bagerhat",
    //             },
    //             {
    //             text: `"Getting the right medicines for free has made a huge difference for my family's budget. The organization was fantastic and everyone was so helpful."`,
    //             name: "Selina Akter",
    //             location: "Mongla Port Area",
    //             },
    //             {
    //             text: `"An incredibly well-organized event. The volunteers managed the crowd perfectly, and the entire process was smooth. We need more camps like this!"`,
    //             name: "Rahmat Sheikh",
    //             location: "Bagerhat Sadar",
    //             },
    //         ].map((item, idx) => (
    //             <div
    //             key={idx}
    //             className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
    //             >
    //             <div aria-hidden="true" className="absolute inset-0">
    //                 <svg
    //                 className="absolute top-4 left-4 h-24 w-24 text-slate-200/50"
    //                 fill="currentColor"
    //                 viewBox="0 0 32 32"
    //                 >
    //                 <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L25.864 4z" />
    //                 </svg>
    //             </div>
    //             <p className="relative text-lg text-slate-700">{item.text}</p>
    //             <footer className="mt-6">
    //                 <p className="font-semibold text-slate-800">{item.name}</p>
    //                 <p className="text-sm text-slate-500">{item.location}</p>
    //             </footer>
    //             </div>
    //         ))}
    //         </div>
    //     </div>
    // </section>
    <section className="bg-gradient-to-br from-[#e5f2fa] to-transparent py-20 px-4 sm:px-6 lg:px-8">
  <div className="w-11/12 mx-auto">
    <div className="text-center">
      <h2 className="text-4xl poppins font-bold text-slate-800 tracking-tight">
        What Our Participants Say
      </h2>
      <p className="mt-3 text-lg text-[#1e74d2] font-semibold poppins">
        STORIES OF GRATITUDE & HEALING
      </p>
    </div>

    <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-4">
        <div className="flex flex-col space-y-4">
          <div className="p-4 rounded-xl transition-all duration-300 cursor-pointer hover:bg-white/70">
            <div className="flex items-center space-x-4">
              <img className="h-14 w-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=1924" alt="Photo of Rahman Ali" />
              <div>
                <p className="font-bold text-slate-800">Rahman Ali</p>
                <p className="text-sm text-slate-500">Fakirhat, Bagerhat</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white shadow-2xl ring-2 ring-white/50">
            <div className="flex items-center space-x-4">
              <img className="h-14 w-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887" alt="Photo of Anika Tabassum" />
              <div>
                <p className="font-bold text-slate-900">Anika Tabassum</p>
                <p className="text-sm text-slate-600">Morrelganj, Bagerhat</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl transition-all duration-300 cursor-pointer hover:bg-white/70">
            <div className="flex items-center space-x-4">
              <img className="h-14 w-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1887" alt="Photo of Farida Yasmin" />
              <div>
                <p className="font-bold text-slate-800">Farida Yasmin</p>
                <p className="text-sm text-slate-500">Bagerhat Sadar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:col-span-1 h-64 justify-center">
        <div className="relative w-px h-full bg-blue-200">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-blue-200 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-5 h-5 bg-[#1e74d2] border-4 border-white rounded-full shadow-md"></div>
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-blue-200 rounded-full"></div>
        </div>
      </div>

      <div className="lg:col-span-7">
        <div className="relative">
          <svg className="absolute -top-4 -left-4 w-32 h-32 text-[#1e74d2]/10" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L25.864 4z" />
          </svg>

          <p className="relative text-lg text-slate-700 leading-relaxed">
            "I brought my daughter for her fever and cough. The pediatrician was so kind and gave us the right medicine for free. As a mother, having this quality of care available in our own area gives me so much peace of mind. Thank you to the entire team."
          </p>

          <div className="relative flex items-center mt-6 text-xl text-[#1e74d2]">
            {/* Star SVGs - repeated for rating visual */}
            {[...Array(5)].map((_, idx) => (
              <svg
                key={idx}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default FeedbackAndRatings;
