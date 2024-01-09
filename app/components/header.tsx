import React from "react";

export default function Header() {
  return (
    <div className="absolute top-0 right-0 left-0 px-8 z-50">
      <div className="flex flex-col sm:flex-row py-4 gap-2 sm:gap-8 justify-between items-center border-b border-solid border-black">
        <div className="hidden w-1/3 sm:flex">
          <h3 className="text-md text-left">
            Art Director specializing in visual identity, illustration and
            motion.
          </h3>
        </div>
        <div className="flex text-center justify-center flex-1">
          <h1 className="font-medium text-xl">maddy hartle</h1>
        </div>
        <div className="flex justify-end md:w-1/3">
          <h3 className="text-md text-center sm:text-right ">
            maddy.hartle@gmail.com
            <br />
            +44 7428173081
          </h3>
        </div>
      </div>
    </div>
  );
}
