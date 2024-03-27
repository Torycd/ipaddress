import desktopHeader from "./assets/pattern-bg-desktop.png";
import smallHeader from "./assets/pattern-bg-mobile.png";
import { SlArrowRight } from "react-icons/sl";
import { useState } from "react";

const Ip = () => {
  useState()

  function handleForm(e) {
    e.preventDefault();
    const fd = new FormData(e.target)
    const data = Object.fromEntries(fd.entries())
    console.log(data);
    e.target.reset()

  }
  return (
    <div
      className={`w-dvh h-[500px] md:h-[300px]  text-white ${
        window.innerWidth >= 375 ? "md:flex flex-col" : ""
      }`}
      style={{
        backgroundImage: `url(${
          window.innerWidth < 375 ? smallHeader : desktopHeader
        })`,
        backgroundSize: "cover",
        backgroundPosition: "top",

        width: "100%",
      }}
    >
      <h2 className="mt-10 text-center font-bold text-3xl">
        IP Address Tracker
      </h2>
      <form onSubmit={handleForm} className="flex justify-center mt-10">
        <input
          className="rounded-tl-full text-black rounded-bl-full w-[300px] py-3 px-5"
          type="number"
          name="number"
          pattern="^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$"
          placeholder="Search for any IP Address or Domain"
        />

        <button className="bg-black w-[50px] flex justify-center text-white rounded-tr-full rounded-br-full hover:bg-slate-700">
          <SlArrowRight className="self-center" />
        </button>
      </form>
    </div>
  );
};

export default Ip;
