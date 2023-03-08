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
  const aiNews = data[0].articles;
  const teslaNews = data[1].articles;
  const cryptoNews = data[2].articles;
  console.log(aiNews);
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
    <Fragment>
      <div className="flex w-full gap-4 justify-evenly my-6">
        <Button
          className="bg-slate-400 rounded-md p-4 px-8 text-4xl m-4 text-white hover:bg-slate-500 transition-all"
          variant="filled"
        >
          AI News
        </Button>
        <Button
          className="bg-slate-400 rounded-md p-4 px-8 text-4xl m-4 text-white hover:bg-slate-500 transition-all"
          variant="filled"
        >
          Tesla News
        </Button>
        <Button
          className="bg-slate-400 rounded-md p-4 px-8 text-4xl m-4 text-white hover:bg-slate-500 transition-all"
          variant="filled"
        >
          Crypto News
        </Button>
      </div>
      <div className="ml-2 border-b-2 border-gray-400 px-10 w-full grid grid-cols-10 gap-1 justify-items-start text-start">
        <p className="text-lg font-bold">#</p>
        <p className="col-span-4 ml-[-50px] text-lg font-bold">Title</p>
        <div className="grow"></div>
        <p className="text-lg font-bold">Author</p>
        <p className="col-span-2 text-lg font-bold">Published</p>
      </div>
      {aiNews.map((item, index) => (
        <Accordion
          key={index}
          open={open === index + 1}
          animate={customAnimation}
          className="px-10"
        >
          <AccordionHeader
            className="grid grid-cols-10 gap-2 pl-2 justify-items-start text-start text-lg hover:bg-slate-200"
            onClick={() => handleOpen(index + 1)}
          >
            <h3>{index + 1}</h3>
            <h2 className="col-span-4 ml-[-50px]">{item.title}</h2>
            <div className="grow"></div>
            <h2>{item.author}</h2>

            <h2 className="col-span-2">
              {moment(item.publishedAt).format("DD/MM/YY, h:mm:ss a")}
            </h2>
            <p className="justify-items-end">
              {open !== index + 1 ? "➕" : "➖"}
            </p>
          </AccordionHeader>
          <AccordionBody>
            <Link className="ml-10" href={item.url}>
              Read more at:{" "}
              <h1 className="text-lg  underline ml-10 hover:text-slate-500">
                {item.url}
              </h1>
            </Link>
          </AccordionBody>
        </Accordion>
      ))}
    </Fragment>
  );
};

export default Hero;
