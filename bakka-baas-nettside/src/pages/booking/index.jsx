import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";

export default function Booking() {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="bg-1 w-screen h-screen flex justify-center gap-10 mt-16">
        <h1 className="text-5xl">booking</h1>
        <form
          method="POST"
          action="https://www.formbackend.com/f/664decaabbf1c319"
        ></form>
      </div>
    </div>
  );
}
