import { MdNavigateNext } from "react-icons/md";

const Search = () => {
  return (
    <div className="flex flex-col items-center sm:mt-8 xs:mt-10 xl:gap-6 md:gap-5 sm:gap-4 xs:gap-4">
      <div className=" text-white xl:text-3xl md:text-2xl xs:text-xl ">IP Address Tracker</div>
      <div className="flex ">
        <input
         
          className=" sm:w-96 xs:w-72 xl:h-10 md:h-9 sm:h-8 xs:h-12 outline-none md:pl-4 sm:pl-3 xs:pl-5 md:text-lg sm:text-base xs:text-lg rounded-l-xl"
          placeholder="Search for IP address or domain"
        />{" "}
        <button className=" px-2 bg-black rounded-r-xl">
          {" "}
          <MdNavigateNext className=" text-2xl text-white" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Search;
