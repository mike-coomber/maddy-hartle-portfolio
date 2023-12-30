import React from "react";

export default function Header() {
  return (
    <div className="absolute top-0 right-0 left-0 px-8 z-50">
      <div className="flex justify-between items-center border-y-1 border-solid border-black">
        <div className="flex-1 my-2">
          <div className="text-md text-left">
            Art Director specializing in visual <br />
            identity, illustration and motion.
          </div>
        </div>
        <div className="flex-1 my-2">
          <h1 className="font-medium">maddy hartle</h1>
        </div>
        <div className="flex-1 my-2">
          <div className="text-md text-right">
            maddy.hartle@gmail.com
            <br />
            +44 7428173081
          </div>
        </div>
      </div>
    </div>
  );
}
