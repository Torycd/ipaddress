import desktopHeader from "./assets/pattern-bg-desktop.png";
import smallHeader from "./assets/pattern-bg-mobile.png";
import { SlArrowRight } from "react-icons/sl";
import { useEffect, useState, useCallback } from "react";
import Details from "./Details";

const Ip = () => {
  const [input, setInput] = useState("");
  const handleForm = useCallback(function handleForm(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    const number = data['number']
    setInput(number);
    // console.log(number);
    e.target.reset();
  }, []);

  useEffect(() => {
    async function fetchRequest() {
      console.log(input)
      // to use this input in the API
      const response = await fetch(
        "https://geo.ipify.org/api/v2/country?apiKey=at_K17fN7GAmlyTrbnxTGKX480U9xxV0&ipAddress=8.8.8.8"
      );
      const data = response.json();
      return { location: data.location };
    }
    fetchRequest();
  }, [handleForm, input]);

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
          type="number"
          name="number"
          pattern="^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$"
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
