import React, { useEffect } from "react";
import Search from "./Search";
import IPdetails from "./IPdetails";
import Map from "./map";
import { useDispatch, useSelector } from "react-redux";
import { fetchIPData } from "../REDUX/IPtrackerSlice";

const TrackerMainPage = () => {
  const dispatch = useDispatch();
  const ipData = useSelector((store) => store.tracker);

  useEffect(() => {
    dispatch(fetchIPData());
    console.log;
  }, []);
  console.log(ipData);
  return (
    <>
      <div
        style={{
          backgroundImage: `url('/pattern-bg-desktop.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative flex justify-center xl:h-56 md:h-52 xs:h-72"
      >
        <Search />
        <div className=" absolute lg:-bottom-14 md:-bottom-12 sm:-bottom-36 xs:-bottom-32 z-50">
          <IPdetails />
        </div>
      </div>
      <div className="">
        <Map />
      </div>
    </>
  );
};

export default TrackerMainPage;
