import React from "react";

const Footer5 = () => {
  return (
    <div className="bg-gray-800 ">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className=" sm:block">
          <div className="flex justify-between items-center text-center py-6 ">
            <span className="text-sm text-gray-300">
              @copyright 2024 Bon Maximus Companies Ltd
            </span>

            <span className="text-sm text-gray-400 ">
              <ul className="flex gap-3">
                <li className="hover:text-white">Privacy Policy</li>
                <li className="hover:text-white">Terms & Conditions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer5;
