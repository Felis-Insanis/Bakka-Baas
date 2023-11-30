import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    start: "",
    end: "",
    date: "2023:11:30",
  });

  function callMe(id) {
    fetch(`http://171.23.6.112:3001/info/info/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log("Request complete! response:", res);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    callMe(1);
  }

  function handleInputChange(e) {
    setFormData({ ...formData, name: e.target.value });
  }

  return (
    <div className="">
      <Navbar />
      <div className="bg-1 w-screen h-full flex flex-col items-center justify-center gap-10 mt-16">
        <h1 className="text-5xl">booking</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            {" "}
            Navn:{" "}
            <input
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="text-white bg-transparent border border-white rounded-lg outline-none"
            />
          </div>

          <input
            type="number"
            id="start"
            className="text-black"
            value={formData.start}
            onChange={handleInputChange}
          />
          <input
            type="number"
            id="end"
            className="text-black"
            value={formData.end}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
