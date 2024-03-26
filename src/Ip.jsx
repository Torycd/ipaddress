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
          <FontAwesomeIcon icon="fa-solid fa-greater-than" className="text-white h-6 w-6"/>
        </button>
      </form>
    </div>
  );
};

export default Ip;
