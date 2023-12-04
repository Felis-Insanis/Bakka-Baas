import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import { FcCheckmark } from "react-icons/fc";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import ReactLoading from "react-loading";
import { FaWpforms } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const [baas1Available, setBaas1Available] = useState(true);
  const [baas2Available, setBaas2Available] = useState(true);
  const [baas3Available, setBaas3Available] = useState(true);
  const [baas4Available, setBaas4Available] = useState(true);
  const [baas1occupiedBy, setBaas1occupiedBy] = useState("");
  const [baas2occupiedBy, setBaas2occupiedBy] = useState("");
  const [baas3occupiedBy, setBaas3occupiedBy] = useState("");
  const [baas4occupiedBy, setBaas4occupiedBy] = useState("");

  const [loaded, setLoaded] = useState(false);
  const checkmarkStyles = "w-10 h-10";
  const xIconStyles = "w-11 h-11 text-red-500";
  const parentDivBaasStyles =
    "flex flex-col gap-3 border-2 p-3 justify-center items-start pl-8 h-full w-full rounded-md";
  const childDivBaasStyles =
    "flex flex-row gap-4 w-full h-16 justify-between items-center";
  const linkStyles =
    "text-sm flex gap-5 justify-center items-center hover:text-green-400 hover:text-lg hover:duration-300 ";
  const getInfo = async () => {
    try {
      console.log("Fetching...");
      setLoaded(false);
      const response = await fetch("http://10.58.177.101:3000/info");
      const data = await response.json();

      setBaas1Available(!data.båser[0].isOccupied);
      setBaas2Available(!data.båser[1].isOccupied);
      setBaas3Available(!data.båser[2].isOccupied);
      setBaas4Available(!data.båser[3].isOccupied);
      setBaas1occupiedBy(data.båser[0].occupiedBy);
      setBaas2occupiedBy(data.båser[1].occupiedBy);
      setBaas3occupiedBy(data.båser[2].occupiedBy);
      setBaas4occupiedBy(data.båser[3].occupiedBy);

      setLoaded(true);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    getInfo();
    console.log("Start");
    const interval = setInterval(() => {
      console.log("Prepering to fetch!");
      getInfo();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col gap-20 w-screen h-screen bg-1">
      <Navbar />

      <h1 className="flex justify-center items-center text-6xl text-text w-full">
        Ledige båser
      </h1>

      <section className="flex justify-center items-center h-full w-full ">
        <div className="flex flex-col gap-5 w-1/2 text-xl sm:text-2xl medium:grid medium:grid-cols-2 medium:gap-6 medium:h-3/4 medium:w-1/2">
          {loaded ? (
            <>
              {baas1Available ? (
                <div className={`${parentDivBaasStyles}  border-green-500`}>
                  <span>Bås 1</span>
                  <div className={childDivBaasStyles}>
                    <span className="">Ledig</span>
                    <FcCheckmark className={checkmarkStyles} />
                    <Link href={"/booking/0"} className={linkStyles}>
                      <span>book bas 1</span>
                      <FaWpforms />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={`${parentDivBaasStyles}  border-red-500`}>
                  <span>Bås 1</span>
                  <div className={childDivBaasStyles}>
                    <span>Okkupert av {baas1occupiedBy}</span>
                    <IoMdClose className={xIconStyles} />
                  </div>
                </div>
              )}
              {baas2Available ? (
                <div className={`${parentDivBaasStyles}  border-green-500`}>
                  <span>Bås 2</span>
                  <div className={childDivBaasStyles}>
                    {" "}
                    <span>Ledig</span>
                    <FcCheckmark className={checkmarkStyles} />
                    <Link href={"/booking/1"} className={linkStyles}>
                      <span>book bas 2</span>
                      <FaWpforms />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={`${parentDivBaasStyles}  border-red-500`}>
                  <span>Bås 2</span>
                  <div className={childDivBaasStyles}>
                    <span>Okkupert av {baas2occupiedBy}</span>
                    <IoMdClose className={xIconStyles} />
                  </div>
                </div>
              )}
              {baas3Available ? (
                <div className={`${parentDivBaasStyles}  border-green-500`}>
                  <span className="text-3xl">Bås 3</span>
                  <div className={childDivBaasStyles}>
                    {" "}
                    <span>Ledig</span>
                    <FcCheckmark className={checkmarkStyles} />
                    <Link href={"/booking/2"} className={linkStyles}>
                      <span>book bas 3</span>
                      <FaWpforms />
                    </Link>
                  </div>{" "}
                </div>
              ) : (
                <div className={`${parentDivBaasStyles}  border-red-500`}>
                  <span>Bås 3</span>
                  <div className={childDivBaasStyles}>
                    <span>Okkupert av {baas3occupiedBy}</span>
                    <IoMdClose className={xIconStyles} />
                  </div>
                </div>
              )}
              {baas4Available ? (
                <div className={`${parentDivBaasStyles}  border-green-500`}>
                  <span>Bås 4</span>
                  <div className={childDivBaasStyles}>
                    {" "}
                    <span>Ledig</span>
                    <FcCheckmark className={checkmarkStyles} />
                    <Link href={"/booking/3"} className={linkStyles}>
                      <span>book bas 4</span>
                      <FaWpforms />
                    </Link>
                  </div>
                </div>
              ) : (
                <div className={`${parentDivBaasStyles}  border-red-500`}>
                  <span>Bås 4</span>
                  <div className={childDivBaasStyles}>
                    <span>Okkupert av</span>
                    <IoMdClose className={xIconStyles} />
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  ">
                <ReactLoading type="spinningBubbles" />{" "}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
