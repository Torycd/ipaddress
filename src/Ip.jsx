import desktopHeader from "./assets/pattern-bg-desktop.png";
import smallHeader from "./assets/pattern-bg-mobile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ip = () => {
  function handleForm(e) {
    e.preventDefault();
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
          className="rounded-tl-full rounded-bl-full w-[300px] py-3 px-5"
          name="ip-input"
          minLength="7"
          maxLength="15"
          size="15"
          placeholder="Search for any Ip Address or Domain"
          pattern="^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$"
        />
        <button className="bg-black w-[50px] text-white rounded-tr-full rounded-br-full">
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
          </svg> */}
          <FontAwesomeIcon
            icon="fa-solid fa-greater-than"
            className=" h-6 w-6"
          />
        </button>
      </form>
    </div>
  );
};

export default Ip;
