import desktopHeader from "./assets/pattern-bg-desktop.png";
import smallHeader from "./assets/pattern-bg-mobile.png";
import { IoIosArrowForward as SlArrowRight } from "react-icons/io";
import { useState, useCallback, useEffect } from "react";
import Details from "./Details";
import useHttp from "./hooks/useHttp.js";
import API_KEY from "./Config";
import PropTypes from "prop-types";

const Ip = ({ setLocation }) => {
  const [input, setInput] = useState("");

  const { data, fetchData } = useHttp(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${input}`,
    input
  );

  const handleForm = useCallback(
    (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const formData = Object.fromEntries(fd.entries());
      const number = formData["input"];
      setInput(number);
      e.target.reset();
      fetchData();
    },
    [fetchData]
  );

  // Update location state in App component when data is fetched
  useEffect(() => {
    if (data && data.latitude && data.longitude) {
      setLocation([data.latitude, data.longitude]);
    }
  }, [data, setLocation]);

  return (
    <div
      className={`w-full h-auto pt-10 text-white ${
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
      <Details data={data} />
    </div>
  );
};

Ip.propTypes = {
  setLocation: PropTypes.array,
};

export default Ip;
