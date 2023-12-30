import React from "react";

export default function Header() {
  return (
    <div className="absolute top-0 right-0 left-0 px-8 z-50">
      <div className="flex py-4 gap-8 justify-between items-center border-b border-solid border-black">
        <div className="flex w-1/3">
          <h3 className="text-md text-left">
            Art Director specializing in visual identity, illustration and
            motion.
          </h3>
        </div>
        <div className="flex text-center justify-center flex-1 w-1/3">
          <h1 className="font-medium text-xl">maddy hartle</h1>
        </div>
        <div className="flex w-1/3 justify-end">
          <h3 className="text-md text-right ">
            maddy.hartle@gmail.com
            <br />
            +44 7428173081
          </h3>
        </div>
      </div>
    </div>
  );
}
