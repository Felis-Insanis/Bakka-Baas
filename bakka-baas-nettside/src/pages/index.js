import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import { FcCheckmark } from "react-icons/fc";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Home() {
  const [baas1Available, setBaas1Available] = useState(false); // state som kontrollerer om bås 1 er ledig eller ikke
  const [baas2Available, setBaas2Available] = useState(true);
  const [baas3Available, setBaas3Available] = useState(true);
  const [baas4Available, setBaas4Available] = useState(false);
  const checkmarkStyles = "w-10 h-10";
  const xIconStyles = "w-11 h-11 text-red-500";
  const parentDivBaasStyles =
    "flex flex-col gap-3 border-2 p-3 border-white justify-center items-start pl-8 h-full w-full ";
  const childDivBaasStyles =
    "flex flex-row gap-4 w-full h-16 items-center items-center";
  return (
    <main className="flex flex-col gap-20 w-screen h-screen bg-1">
      <Navbar />

      <h1 className="flex justify-center items-center text-6xl text-text w-full">
        Ledige båser
      </h1>

      {/* hvilke båser er ledige del av nettsiden */}
      <section className="flex justify-center items-center h-full w-full ">
        <div className="flex flex-col gap-5 w-1/2 text-xl sm:text-2xl medium:grid medium:grid-cols-2 medium:gap-6 medium:h-3/4 medium:w-1/2">
          <div className={parentDivBaasStyles}>
            {/*denne diven går rundt hver bås boks*/}
            <span>Bås 1</span>
            <div className={childDivBaasStyles}>
              {/*sjekker om bås 1 er ledig, hvis den er ledig kjøres første del av koden, hvis den er opptatt kjøres andre del av koden*/}
              {baas1Available ? (
                <div className={childDivBaasStyles}>
                  {" "}
                  <span> Bås 1 er ledig</span>
                  <FcCheckmark className={checkmarkStyles} />
                </div>
              ) : (
                <div className={childDivBaasStyles}>
                  <span>Bås 1 er opptatt</span>
                  <IoMdClose className={xIconStyles} />
                </div>
              )}
            </div>
          </div>{" "}
          <div className={parentDivBaasStyles}>
            <span>Bås 2</span>
            <div className={childDivBaasStyles}>
              {baas2Available ? (
                <div className={childDivBaasStyles}>
                  {" "}
                  <span> Bås 2 er ledig</span>
                  <FcCheckmark className={checkmarkStyles} />
                </div>
              ) : (
                <div className={childDivBaasStyles}>
                  <span>Bås 2 er opptatt</span>
                  <IoMdClose className={xIconStyles} />
                </div>
              )}
            </div>
          </div>{" "}
          <div className={parentDivBaasStyles}>
            <span>Bås 3</span>
            <div className={childDivBaasStyles}>
              {baas3Available ? (
                <div className={childDivBaasStyles}>
                  {" "}
                  <span> Bås 3 er ledig</span>
                  <FcCheckmark className={checkmarkStyles} />
                </div>
              ) : (
                <div className={childDivBaasStyles}>
                  <span>Bås 3 er opptatt</span>
                  <IoMdClose className={xIconStyles} />
                </div>
              )}
            </div>
          </div>{" "}
          <div className={parentDivBaasStyles}>
            <span>Bås 4</span>
            <div className={childDivBaasStyles}>
              {baas4Available ? (
                <div className={childDivBaasStyles}>
                  {" "}
                  <span> Bås 4 er ledig</span>
                  <FcCheckmark className={checkmarkStyles} />
                </div>
              ) : (
                <div className={childDivBaasStyles}>
                  <span>Bås 4 er opptatt</span>
                  <IoMdClose className={xIconStyles} />
                </div>
              )}
            </div>
          </div>{" "}
        </div>
      </section>
    </main>
  );
}
