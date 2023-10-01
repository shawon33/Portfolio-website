import React from "react";
import img from "../../../public/section-1/Shawan_profile.jpg";
import img1 from "../../../public/iconphoto/icons8-book-100.png";
import img2 from "../../../public/iconphoto/icons8-sup-80.png";
import img3 from "../../../public/iconphoto/icons8-goal-100.png";



const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-8  ">
      <div className="text-center my-8">
        <h1 className=" text-6xl text-slate-600 font-bold ">About Me</h1>
        <p className="text-slate-600">The little Story of mine</p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mb-5">
        <div className="md:w-1/3 border-4 border-solid border-indigo-700  rounded-lg">
          <img src={img} alt="" className="mx-auto h-auto my-6" />
        </div>

        <div className="md:w-2/3 px-4 mt-4 md:mt-0 border-4 border-solid border-indigo-700 rounded-md">
          <div className="my-12 mx-12">
            <div>
              <div className="flex gap-4">
                <img src={img1} alt="" className="bg-indigo-500 rounded-lg " style={{width:'80px',height:'80px'}} />
                <h1 className=" text-5xl text-slate-600 font-bold mt-5">
                  My Learning Journey
                </h1>
              </div>
              <p className="font-bold text-2xl">
                I'm constantly learning and improving my skills through online
                courses on platforms like Programming Hero.
              </p>
            </div>

            <div>
              <div className="flex gap-4">
                <img src={img2} alt="" className="bg-indigo-500 rounded-lg " style={{width:'80px',height:'80px'}}/>
                <h1 className=" text-5xl text-slate-600 font-bold mt-5">
                  My Interest
                </h1>
              </div>
              <p className="font-bold text-2xl">
                Apart from coding, I have a love for outdoor games and
                traveling. Engaging in physical activities not only keeps me fit
                but also helps me sharpen my problem-solving skills. I strongly
                believe in maintaining a healthy work-life balance.
              </p>
            </div>

            <div>
              <div className="flex gap-4">
                <img src={img3} alt="" className="bg-indigo-500 rounded-lg" style={{width:'80px',height:'80px'}} />
                <h1 className=" text-5xl text-slate-600 font-bold mt-5">
                  My Goal
                </h1>
              </div>
              <p className="font-bold text-2xl">
                With my continuous learning mindset and diverse range of
                interests, I consider myself a well-rounded web developer who is
                always ready for new challenges. My portfolio website reflects
                my exceptional skills and showcases my passion for both web
                development and adventure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
