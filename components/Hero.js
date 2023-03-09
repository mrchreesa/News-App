"use client";
import React from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import moment from "moment";

const Hero = ({ data }) => {
  const [open, setOpen] = useState(0);
  const [selectedNews, setSelectedNews] = useState(null);

  const aiNews = data[0].articles;
  const teslaNews = data[1].articles;
  const cryptoNews = data[2].articles;

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const handleNewsSearch = (selectedNews) => {
    setSelectedNews(selectedNews);
  };
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
    <Fragment>
      {/* Header */}
      <header className="w-full flex justify-center mt-7 text-slate-700 ">
        <div className="flex flex-col">
          <h1 className="font-bold text-4xl text-center font-inter mb-2">
            SELECT News Category
          </h1>
          <p className="text-center text-xl">
            articles published <br /> <span>08/02/2023 - 08/03/2023</span>
          </p>
          <div className="border-b border-4 border-orange-500"></div>
        </div>
      </header>
      {/* News Buttons */}
      <div className="flex w-full gap-4 justify-evenly py-6 overflow-hidden">
        <Button
          className="bg-slate-400 rounded-md p-4 px-8 text-4xl m-4 text-white hover:bg-slate-500 focus:bg-slate-500 focus:ring focus:ring-slate-300 transition-all"
          variant="filled"
          onClick={() => handleNewsSearch(aiNews)}
        >
          <span className="text-[#bae7e6]"> AI</span>{" "}
          <span className="italic">News</span>
        </Button>
        <Button
          className="bg-slate-400 rounded-md p-4 px-8 text-4xl m-4 text-white hover:bg-slate-500  focus:bg-slate-500 focus:ring focus:ring-slate-300 transition-all"
          variant="filled"
          onClick={() => handleNewsSearch(teslaNews)}
        >
          <span className="text-[#bae7e6]"> Tesla</span>{" "}
          <span className="italic">News</span>
        </Button>
        <Button
          className="bg-slate-400 rounded-md p-4 px-8 text-4xl m-4 text-white hover:bg-slate-500  focus:bg-slate-500 focus:ring focus:ring-slate-300 transition-all"
          variant="filled"
          onClick={() => handleNewsSearch(cryptoNews)}
        >
          <span className="text-[#bae7e6]"> Crypto </span>{" "}
          <span className="italic">News</span>
        </Button>
      </div>

      {/* News Table */}
      {selectedNews ? (
        <div className="border-b-2 border-gray-400 font-inter  px-10 items-center w-full grid grid-cols-10 gap-1 justify-items-start text-start">
          <p className="ml-2 text-lg font-bold">#</p>
          <p className="col-span-4 ml-[-50px] text-lg font-bold pl-2">Title</p>
          <div className="grow"></div>
          <p className="text-lg font-bold pl-3">Author</p>
          <p className="col-span-2 text-lg font-bold pl-3">Published</p>
        </div>
      ) : null}
      {/* News Content */}
      {selectedNews ? (
        selectedNews.map((item, index) => (
          <Accordion
            key={index}
            open={open === index + 1}
            animate={customAnimation}
            className="px-10  text-slate-900"
          >
            <AccordionHeader
              className="grid grid-cols-10 gap-4 pl-2 h-[10vh]  justify-items-start text-start content-center text-lg hover:bg-slate-200"
              onClick={() => handleOpen(index + 1)}
            >
              <h3>{index + 1}</h3>
              <h2 className="col-span-4 ml-[-50px] pt-5">{item.title}</h2>
              <div className="grow"></div>
              <h2 className="text-sm">{item.author}</h2>

              <h2 className="col-span-2 text-sm">
                {moment(item.publishedAt).format("DD/MM/YY, h:mm:ss a")}
              </h2>
              <p className="justify-items-end text-orange-500 text-4xl font-bold">
                {open !== index + 1 ? "+" : "-"}
              </p>
            </AccordionHeader>
            <AccordionBody className="my-6">
              <Link className="ml-10" href={item.url} target="_blank">
                Read more at:{" "}
                <h1 className="text-lg  underline ml-10 hover:text-slate-500">
                  {item.url}
                </h1>
              </Link>
            </AccordionBody>
          </Accordion>
        ))
      ) : (
        <div className="flex w-full justify-center">
          <h1 className="text-[210px]">🗞</h1>
        </div>
      )}
    </Fragment>
  );
};

export default Hero;
