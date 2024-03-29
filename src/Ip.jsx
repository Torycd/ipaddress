import desktopHeader from "./assets/pattern-bg-desktop.png";
import smallHeader from "./assets/pattern-bg-mobile.png";
import { SlArrowRight } from "react-icons/sl";
import { useEffect, useState, useCallback } from "react";
import Details from "./Details";
import  API_KEY  from "./Config";
const Ip = () => {
  const [input, setInput] = useState("");
  const handleForm = useCallback(function handleForm(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    const number = data["input"];
    setInput(number);
    // console.log(number);
    e.target.reset();
  }, []);

  useEffect(() => {
    async function fetchRequest() {
      // console.log(input);
      const randomIP = input
      const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${randomIP}`;
      const response = await fetch(url);
      const data = response.json();
      console.log(data);
      return { location: data.location };
    }
    if (input) {
      fetchRequest();
    }
  }, [input]);

  return (
    <div
      className={`w-dvh h-auto pt-10 text-white ${
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
      <h2 className="text-center font-bold text-3xl">IP Address Tracker</h2>
      <form onSubmit={handleForm} className="flex justify-center mt-10 mx-5">
        <input
          className="rounded-tl-lg text-black rounded-bl-lg max-w-[500px] w-full md:w-[500px]  py-3 px-5"
          type="text"
          name="input"
          pattern="^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$"
          placeholder="Search for any IP Address or Domain"
        />

        <button className="bg-black w-[50px] flex justify-center text-white rounded-tr-lg rounded-br-lg hover:bg-slate-700">
          <SlArrowRight className="self-center" />
        </button>
      </form>
      <Details />
    </div>
  );
};

export default Ip;
