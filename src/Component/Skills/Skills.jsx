import React from "react";
import Marquee from "react-fast-marquee";
import img from "../../../public/skills/html.png";
import imgo from "../../../public/skills/css.png";

import imgIcon2 from "../../../public/new-icon/icons8-firebase-144.png";
import imgIcon3 from "../../../public/new-icon/icons8-javascript-128.png";
import imgIcon4 from "../../../public/new-icon/icons8-mongodb-144 (1).png";
import imgIcon5 from "../../../public/new-icon/icons8-nodejs-144 (1).png";
import imgIcon7 from "../../../public/new-icon/icons8-tailwindcss-144 (1).png";
import imgIcon8 from "../../../public/new-icon/icons8-react-100.png";

// new icon
import imgIcon6 from "../../../public/marquie_icon/Bootstrip.png";
// import fool from "../../../public/new-icon/icons8-firebase-144.png";

const Skills = () => {
  return (
    <div className="md:mx-48">
      <div className="text-center my-12 ">
        <h1 className=" text-6xl text-slate-600 font-bold ">Skills In Focus</h1>
        <p className="text-slate-600">Shining a Light on my Expertise</p>
      </div>
      <div className="">
        <Marquee
          speed={50}
          style={{
            // backgroundColor: "lightblue",
            // width: "400px",
            // height: "70px",
            border: "rounded-md",
          }}
        >
          <div className="text-4xl text-gray-500  p-3 font-bold px-4 py-2 flex gap-5">
            <img src={img} alt="" style={{ width: "200px", height: "150px" }} />
            <img src={imgo} alt="" style={{ width: "200px", height: "150px" }} />
          
            <img
              src={imgIcon2}
              alt=""
              style={{ width: "200px", height: "150px" }}
            />
            <img
              src={imgIcon3}
              alt=""
              style={{ width: "200px", height: "150px" }}
            />
            <img
              src={imgIcon4}
              alt=""
              style={{ width: "200px", height: "150px" }}
            />
            <img
              src={imgIcon5}
              alt=""
              style={{ width: "200px", height: "150px" }}
            />
            <img
              src={imgIcon6}
              alt=""
              style={{ width: "200px", height: "150px" }}
            />
            <img
              src={imgIcon7}
              alt=""
              style={{ width: "200px", height: "150px" }}
            />
              <img
              src={imgIcon8}
              alt=""
              style={{ width: "200px", height: "150px" }}
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
