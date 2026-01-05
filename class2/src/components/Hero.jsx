import React from "react";

const Hero = () => {
  return (
    <div className="my-40 flex flex-col w-full items-center justify-center">
      <h1 className=" text-6xl font-bold tracking-tight max-w-xl text-center leading-tight bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-500  ">
        Unleash the power of intuitive finance
      </h1>
      <p className="mx-auto mt-10 max-w-3xl text-center text-neutral-500 selection:bg-white">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </p>
      <div className="flex max-w-lg  mt-8 justify-center">
        <input
          type="text"
          className="rounded-xl text-white
           px-4 border  flex-1  mr-4 border-neutral-600 placeholder:text-neutral-500 focus:ring-sky-500 focus:outline-none "
          placeholder="Enter your email"
        />
        <button className="relative px-4 py-0.5 border-neutral-700 rounded-xl border cursor-pointer text-white">
          <div className="absolute -bottom-px inset-x-0  w-full h-px bg-linear-to-r from-transparent via-sky-600 to-transparent"></div>
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default Hero;
