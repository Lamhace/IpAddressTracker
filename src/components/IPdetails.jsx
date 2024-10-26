const IPdetails = () => {
  return (
    <div className="flex md:flex-row xs:flex-col items-center xl:gap-8 lg:gap-5 sm:gap-4 xs:gap-3 xl:p-5 md:p-4  xl:pr-20 lg:pr-16 md:pr-14  xs:py-4 xs:px-9 bg-white text-black xl:text-xl lg:text-lg md:text-base sm:text-xl xs:text-lg  font-semibold rounded-lg">
      <div className="flex flex-col md:items-start xs:items-center">
        <div className=" lg:text-sm md:text-xs sm:text-base xs:text-sm  text-gray-400">
          IP ADDRESS
        </div>
        <div>192.212.174.101</div>
      </div>
      <div className="flex items-center lg:gap-2 md:gap-1">
        <div className=" rotate-90 w-12 md:block xs:hidden">
          <hr />
        </div>
        <div className="flex flex-col md:items-start xs:items-center">
          <div className=" lg:text-sm md:text-xs sm:text-base xs:text-sm  text-gray-400">
            LOCATION
          </div>
          <div>
            Brooklyn, NY
            <br className=" md:block xs:hidden" />
            10001
          </div>
        </div>
      </div>
      <div className="flex items-center lg:gap-2 md:gap-1">
        <div className=" rotate-90 w-12 md:block xs:hidden">
          <hr />
        </div>
        <div className="flex flex-col md:items-start xs:items-center">
          <div className=" lg:text-sm md:text-xs sm:text-base xs:text-sm  text-gray-400">
            TIMEZONE
          </div>
          <div>UTC -5:00</div>
        </div>
      </div>
      <div className="flex items-center lg:gap-2 md:gap-1">
        <div className=" rotate-90 w-12 md:block xs:hidden">
          <hr />
        </div>
        <div className="flex flex-col md:items-start xs:items-center">
          <div className=" lg:text-sm md:text-xs sm:text-base xs:text-sm text-gray-400">
            ISP
          </div>
          <div>
            Space X <br className=" md:block xs:hidden" /> Starlink
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPdetails;
