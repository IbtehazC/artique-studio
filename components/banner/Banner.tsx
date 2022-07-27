import React from "react";

export default function Banner() {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center mx-auto w-full pt-8">
      <div className="mb-4 lg:pt-10 lg:pr-16">
        <img
          src="./logo.svg"
          alt="logo"
          className="h-32 w-32 lg:h-80 lg:w-72"
        />
      </div>
      <div className="flex flex-col justify-between h-fit lg:h-72 lg:pr-8 mb-4">
        <div className="hidden lg:block"></div>
        <h2 className="text-5xl text-center lg:text-8xl">
          ARTIQUE <hr className="border-0" /> STUDIO BD
        </h2>
      </div>

      <div className="hidden lg:flex flex-col justify-between h-fit lg:h-72">
        <div className="hidden md:block"></div>
        <div className="flex">
          <img
            src="./fb-logo.svg"
            alt="fb"
            className=" h-12 w-12 lg:h-20 lg:w-20"
          />
          <img
            src="./insta-logo.svg"
            alt="insta"
            className=" h-12 w-12 lg:h-20 lg:w-20"
          />
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col lg:justify-center mx-auto w-full pt-8">
      <div className="pt-10 pr-16">
        <img src="./logo.svg" alt="logo" className="h-80 w-72" />
      </div>
      <div className="flex flex-col justify-between h-72 pr-8">
        <div className=""></div>
        <h2 className=" text-8xl">
          ARTIQUE <hr className="border-0" /> STUDIO BD
        </h2>
      </div>

      <div className="flex flex-col justify-between h-72">
        <div></div>
        <div className="flex">
          <img src="./fb-logo.svg" alt="fb" className="h-20 w-20" />
          <img src="./insta-logo.svg" alt="insta" className="h-20 w-20" />
        </div>
      </div>
    </div> */
}
