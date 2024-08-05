import React from "react";
import sateliteImg from "../assets/save.jpg";
import google from "../assets/google.png";
import apple from "../assets/apple.svg";
import { FaDotCircle } from "react-icons/fa";

const Satelite = () => {
  return (
    <section className="bg-primary text-white py-7">
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
          <div>
            <img
              src={sateliteImg}
              alt=""
              className="w-full rounded-lg sm:w-[80%] mx-auto max-h-[350px] object-cover"
            />
          </div>
          <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
            <h3 className="text-sky-800 uppercase font-bold">Our Mission</h3>
            <h1 className="uppercase border-b-2 text-4xl font-bold mb-3">
              Church Activities
            </h1>

            {/* <div style={{ display: "flex", justifyContent: "center" }}>
              <FaDotCircle size={20} />
              <span> Profile</span>
            </div> */}

            <div style={{ display: "flex" }}>
              <FaDotCircle size={20} />
              <span className="ml-2"> Daily readings</span>
            </div>
            <div style={{ display: "flex" }}>
              <FaDotCircle size={20} />
              <span className="ml-2"> Church announcements & programs</span>
            </div>
            <div style={{ display: "flex" }}>
              <FaDotCircle size={20} />
              <span className="ml-2"> Watch live church programs</span>
            </div>
            <div style={{ display: "flex" }}>
              <FaDotCircle size={20} />
              <span className="ml-2">
                {" "}
                Preaching & Publications from Pastors
              </span>
            </div>
            <div style={{ display: "flex" }}>
              <FaDotCircle size={20} />
              <span className="ml-2"> In app Bible & Hymns</span>
            </div>
            <div style={{ display: "flex" }}>
              <FaDotCircle size={20} />
              <span className="ml-2"> Get map direction to a church</span>
            </div>
            <div style={{ display: "flex" }}>
              <FaDotCircle size={20} />
              <span className="ml-2"> Send prayer requests</span>
            </div>
            <div style={{ display: "flex" }}>
              <FaDotCircle size={20} />
              <span className="ml-2">
                {" "}
                Follow different Pastors & Preachers.
              </span>
            </div>
          </div>
        </div>
        <div class="flex mt-10 justify-center">
          <p>
            <img
              className="h-20 w-44"
              style={{ width: 210 }}
              src={google}
              alt=""
            />
          </p>
          <p>
            <img
              className="h-20 w-40"
              style={{ width: 182 }}
              src={apple}
              alt=""
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Satelite;
