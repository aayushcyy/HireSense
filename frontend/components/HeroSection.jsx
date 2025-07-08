"use client";

import React from "react";
import Button from "./Button";
import { LockClosedIcon } from "@heroicons/react/24/solid";
import { RetroGrid } from "@/components/magicui/retro-grid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function HeroSection() {
  return (
    <div className="w-full h-[90vh] flex">
      <RetroGrid className="z-0" />
      <div className="w-full text-black flex flex-col items-center font-funnel gap-6 z-10">
        <p className="uppercase text-blue-400 font-semibold text-sm mt-20">
          resume checker
        </p>
        <h1 className="text-5xl font-bold mt-12">
          Is your resume good enough?
        </h1>
        <p className="text-lg text-[#000000d3] font-normal">
          Upload your resume & a job description — get a match score, missing
          skills, and personalized suggestions instantly.
        </p>
        <Dialog>
          <DialogTrigger>
            <div className="flex flex-col items-center px-20 cursor-pointer hover:bg-[#4c8ecb34] py-5 gap-1 border-1 border-dashed border-[#4C8ECB] rounded-lg mt-16">
              <p className="text-sm mb-3 text-center">
                Drop your resume and <br /> paste your job description here
              </p>
              <Button
                text="Upload Your Resume and JD"
                classname="font-medium text-white bg-[#4C8ECB] rounded-sm px-3  py-1.5 hover:bg-[#4c8ecbe9]"
              />
              <div className="text-[#00000080] flex items-center gap-1">
                <span>
                  <LockClosedIcon className="size-4" />
                </span>
                <p className="flex items-center text-sm font-semibold mt-0.5">
                  Privacy guaranteed
                </p>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Upload the resume and paste the job description
              </DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-1">
              <p className="text-gray-600 text-sm font-normal">Resume</p>
              <Input type="file" accept="application/pdf" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <p className="text-gray-600 text-sm font-normal">
                Job description
              </p>
              <Textarea className="w-full break-words resize-none overflow-y-auto min-h-[120px] max-h-[300px] sm:max-h-[400px] md:max-h-[500px]" />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
