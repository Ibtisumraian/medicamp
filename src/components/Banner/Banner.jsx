import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 90000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {/* Slide 1 */}
        <SwiperSlide>
            <div
                className="relative w-full h-[750px] bg-cover bg-center"
                style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/dv6p7mprd/image/upload/v1751979396/happy-doctor-holding-clipboard-witjkh-patients_qwwxzh.jpg')",
                }}
            >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-transparent to-transparent"></div>

                {/* right top section */}
                <div className=' absolute top-8 right-66 z-10 flex items-center gap-1'>
                    <div className="avatar-group -space-x-6">
                            <div className="avatar">
                                <div className="w-8">
                                <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1748020486/images_dcbx12.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-8">
                                <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1748019889/people-2402-1H6A2446gaffney-20210923170531_sy6y6n.jpg" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-8">
                                <img src="https://res.cloudinary.com/dd4np04jl/image/upload/v1748020271/istockphoto-517234226-612x612_vpugax.jpg" />
                                </div>
                            </div>
                            </div>
                            <div className="">
                              <h1 className='text-md'>150k +</h1>
                              <p className='text-sm'>Patient Satisfied </p>
                            </div>
                </div>
                {/* Content */}
                <div className="absolute top-36 left-18 h-full flex flex-col gap-4 text-white z-10">
                <h2 className="text-3xl md:text-4xl font-bold">Bringing Hope <br /> and Health to Everyone</h2>
                <p className='max-w-[600px]'>Our recent medical camp provided free check-ups, essential medicines, and specialized care to over 500 residents, transforming lives one consultation at a time.</p>
                <div className='my-4'>
                    <div className='flex gap-6'>
                        <h1 className='border-b-2 border-b-white h-fit text-lg font-bold'>Pro Health</h1>
                        <p className='w-[600px]'>Our team of experienced doctors and healthcare professionals are committed to providing quality care and personalized attention to our patients.</p>
                    </div>
                    <div className='my-8'>
                        <button className='py-1.5 px-3 bg-[#1e74d2] text-white rounded-lg'>Ask Our AI</button>                        
                    </div>
                </div>
                </div>
                <div className="absolute w-full bottom-12 flex flex-col justify-center items-center text-white z-10">
                <div className="">
                    <div className="grid h-[150px] grid-cols-2 md:grid-cols-4 gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-white text-center">
                        <div className='flex flex-col items-center justify-center'>
                        <p className="text-2xl font-bold">20+</p>
                        <p className="text-sm md:text-base">Years of Experience</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                        <p className="text-2xl font-bold">95%</p>
                        <p className="text-sm md:text-base">Patient Satisfaction</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                        <p className="text-2xl font-bold">500+</p>
                        <p className="text-sm md:text-base">Patients Served</p>
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                        <p className="text-2xl font-bold">10+</p>
                        <p className="text-sm md:text-base">Pro Medical Units</p>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
            <div
                className="relative w-full h-[750px] bg-cover bg-center"
                style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/dv6p7mprd/image/upload/v1751980188/medium-shot-nurse-doctor-checking-epatient_tbr97c.jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-transparent to-transparent"></div>

                {/* Top-Left Heading */}
                <div className="absolute top-10 left-10 text-white z-10 space-y-4">
                <h2 className="text-4xl font-bold leading-tight">
                    Restoring Health, <br /> Rebuilding Lives
                </h2>
                <p className="max-w-md text-lg">
                    Our dedicated volunteers provided dental, eye, and primary care services to underserved communities — all in one day.
                </p>
                <div className='my-8'>
                    <button className='py-1.5 px-3 bg-[#1e74d2] text-white rounded-lg'>Ask Our AI</button>                        
                </div>
                </div>

                {/* Center Statistic/Highlight Box */}
                <div className="absolute bottom-[140px] left-10 bg-white/10 backdrop-blur-md rounded-xl text-white px-6 py-4 z-10 shadow-lg w-[500px]">
                <h3 className="text-xl font-semibold mb-4">Impact Snapshot</h3>
                <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <li>120+ Dental Checkups</li>
                    <li>90 Eye Screenings</li>
                    <li>300+ Consultations</li>
                    <li>100% Free Services</li>
                </ul>
                </div>

                {/* Bottom-Right Quote */}
                <div className="absolute bottom-6 right-6 text-white z-10 max-w-xs text-end">
                <p className="text-lg italic font-light">
                    “This camp gave my mother a second chance at health.”  
                </p>
                <p className="text-sm mt-2">— Rina Akter, Participant</p>
                </div>
            </div>
            </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
  <div
    className="relative w-full h-[750px] bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/dv6p7mprd/image/upload/v1751985911/close-up-medical-team-ready-work_x9ddrn.jpg')",
    }}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-transparent to-transparent"></div>

    {/* Left Content */}
    <div className="absolute left-18 inset-0 flex flex-col justify-center items-start  text-white px-4 z-10 space-y-6">
      <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Bringing Care<br />Where It’s Needed Most
      </h2>
      <p className="max-w-xl text-lg md:text-xl">
        Our mobile medical units have reached 30+ remote villages with diagnostics, medicines, and first-aid kits — at no cost.
      </p>
      
      {/* Timeline Box */}
      <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 text-left text-sm w-fit shadow-lg">
        <h4 className="text-base font-semibold mb-2">Outreach Timeline:</h4>
        <ul className="space-y-1">
          <li>Jan - Mymensingh: 400+ patients served</li>
          <li>Mar - Rangpur: 350+ checkups done</li>
          <li>May - Sylhet: 300+ families reached</li>
        </ul>
      </div>
      <div className='my-8'>
          <button className='py-1.5 px-3 bg-[#1e74d2] text-white rounded-lg'>Ask Our AI</button>                        
      </div>
    </div>

    {/* Bottom-left Tagline */}
    <div className="absolute bottom-6 right-6 text-white z-10">
      <span className="bg-[#1e74d2] text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
        100% Free | Volunteer Driven | Always Ready
      </span>
    </div>
  </div>
</SwiperSlide>

        {/* <SwiperSlide>
          <div
            className="relative w-full h-[750px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dv6p7mprd/image/upload/v1751980348/close-up-medical-team-ready-hwork_exaphc.jpg')",
            }}
          >
            <div className="absolute inset-0  bg-opacity-40"></div>
            <div className="absolute top-6 left-6 text-white z-10">
              <h2 className="text-3xl md:text-4xl font-bold">Accessible Medical Services</h2>
            </div>
            <div className="absolute bottom-6 right-6 text-white z-10">
              <p className="text-lg md:text-xl font-medium">Anywhere. Anytime. For Everyone.</p>
            </div>
          </div>
        </SwiperSlide> */}

      </Swiper>
    </div>
  );
};

export default Banner;
