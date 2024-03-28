

const Details = () => {
  return (
    <div className="mx-5 md:mx-20 z-50 text-center md:text-left bg-white space-y-5 md:space-y-0 text-black rounded-lg translate-y-1/2 grid md:grid-cols-4 p-10 justify-center md:space-x-5">
        <div className="md:border-r-2">
          <h4 className="font-bold md:text-[13px] opacity-50">IP ADDRESS</h4>
          <p className="md:stext-[22px] uppercase font-bold">192.48338383</p>
        </div>
        <div className="md:border-r-2">
          <h4 className="font-bold md:text-[13px] opacity-50">LOCATION</h4>
          <p className="md:text-[22px] uppercase font-bold">WHERE EVER YOU WANT</p>
        </div>
        <div className="md:border-r-2">
          <h4 className="font-bold md:text-[13px] opacity-50">TIMEZONE</h4>
          <p className="md:text-[22px] uppercase font-bold">NIGERIA, LAGOS</p>
        </div>
        <div>
          <h4 className="font-bold md:text-[13px] opacity-50">ISP</h4>
          <p className="md:text-[22px] uppercase font-bold">
            WEST AFRICAN TIMEZONE
          </p>
        </div>
      </div>
  )
}

export default Details