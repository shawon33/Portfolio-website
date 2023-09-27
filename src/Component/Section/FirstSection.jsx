import React from "react";
import img from "../../../public/section-1/giphy.gif";
import Marquee from "react-fast-marquee";

const FirstSection = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="text-6xl font-semibold mb-4">
            Welcome <br /> to My Creative Journey!{" "}
          </h2>
          <div className="text-gray-600 rounded-md overflow-hidden mt-10 ">
            <Marquee speed={50} style={{ backgroundColor: "lightblue",width:'400px' ,height:'70px', border:'rounded-md' }}>
              <div className="text-4xl text-gray-500  p-3 font-bold px-4 py-2"> In the world of pixels and code, I create masterpieces</div>
            </Marquee>
          </div>
        </div>

        <div className="md:w-1/2 px-4 mt-4 md:mt-0">
          <img src={img} className="w-full rounded-md" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
