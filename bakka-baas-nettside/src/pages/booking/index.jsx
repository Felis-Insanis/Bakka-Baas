import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    start: "",
    end: "",
    date: "",
  });

  const [baas, setbaas] = useState(0);
  const handleSelectChange = (e) => {
    setbaas(e.target.value);
  };

  function callMe(id) {
    fetch(`http://10.58.176.42:3000/info/info/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log("Request complete! response:", res);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    callMe(parseInt(baas));
  }

  function handleInputChange(e) {
    switch (e.target.id) {
      case "name":
        setFormData({ ...formData, name: e.target.value });
        break;
      case "start":
        setFormData({ ...formData, start: e.target.value });
        break;
      case "end":
        setFormData({ ...formData, end: e.target.value });
        break;
      case "date":
        setFormData({ ...formData, date: e.target.value });
        break;
    }
  }

  return (
    <div className="">
      <Navbar />
      <div className="bg-1 z-10 w-screen h-screen flex flex-col items-center justify-center gap-10 ">
        <h1 className="text-5xl">Book en bås</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-1/4">
          {" "}
          <input
            placeholder="Navn"
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className="text-white bg-transparent border border-white rounded-lg outline-none p-2"
          />{" "}
          <label className="">Velg bås</label>
          <select
            className="text-white bg-transparent border p-2 rounded-lg border-white placeholder:text-white "
            id="baas"
            value={baas}
            onChange={handleSelectChange}
            // value={}
            // onChange={(e) => setbaas(e.target.value)}
            // name="baas"
            // id="baas"
          >
            <option value={0}>bås 1</option>
            <option value={1}>bås 2</option>
            <option value={2}>bås 3</option>
            <option value={3}>bås 4</option>
          </select>
          dato{" "}
          <input
            type="date"
            id="date"
            className=" p-2 rounded-lg text-white bg-transparent border border-white outline-none focus:border-green-400"
            value={formData.date}
            onChange={handleInputChange}
          />
          start tid{" "}
          <input
            type="time"
            placeholder="example:01:30 PM"
            id="start"
            className="text-white bg-transparent border border-white rounded-lg outline-none p-2 focus:border-green-400"
            value={formData.start}
            onChange={handleInputChange}
          />
          slutt tid{" "}
          <input
            type="time"
            id="end"
            className="text-white bg-transparent border border-white rounded-lg outline-none p-2 focus:border-green-400"
            value={formData.end}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="border w-full border-white text-white text-xl h-12  rounded-lg hover:bg-green-400 hover:text-black hover:border-green-400  "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
