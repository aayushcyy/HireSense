import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";
import Image1 from "../../public/image-1.webp";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <div className="w-full h-screen bg-white">
      <Navbar />
      <div className="w-full min-h-screen px-24 mb-24 flex flex-col gap-28 font-funnel relative">
        <div className="flex flex-col mt-20 gap-5">
          <div className="w-full text-5xl font-medium flex items-center justify-start">
            About Us
          </div>
          <p className="text-lg w-[60%]">
            An AI-powered resume analyzer that compares your resume with any job
            description and gives you a match score, missing skills, and smart
            suggestions instantly.
          </p>
        </div>
        <div>
          <Image
            src={Image1}
            width={800}
            height={800}
            alt="About us image"
            className="w-full rounded-lg"
          />
        </div>
        <div className="flex w-full py-10 px-5">
          <div className="w-1/2 text-4xl font-medium">
            <p className="text-xl mb-2 text-[#4C8ECB]">The Story</p>
            <p>
              Built During My Job Hunt <br /> To Help Yours Be Easier
            </p>
          </div>
          <div className="w-1/2">
            <div className="text-lg flex flex-col gap-1">
              I still remember the feeling — staring at my inbox with 50+ job
              applications sent and barely any replies. I had decent projects, a
              strong grasp on the MERN stack, and yet… silence.
              <p>Then I realized something.</p>{" "}
              <p>
                It wasn’t just about having the skills. It was about presenting
                them right — matching my resume with what companies were
                actually looking for.
              </p>
              <p className="mt-1">That’s when I started thinking:</p>
              <p className="italic">
                “What if there was a tool that could act like a recruiter — one
                that reads your resume and tells you how well it fits the job
                you’re applying for?”
              </p>
              <p className="mt-1">
                And so,{" "}
                <span className="font-medium text-2xl text-[#4287c8]">
                  HireSense
                </span>{" "}
                was born.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-10 rounded-lg py-28 bg-[#0000000a]">
          <p className="text-3xl font-medium text-center">
            <span className="">
              This platform is built by a{" "}
              <span className="text-[#4C8ECB]">developer</span>
            </span>{" "}
            <br /> for
            <span className="text-[#4C8ECB]"> developers</span>,{" "}
            <span className="text-[#ff8e1d]">designers</span>,{" "}
            <span className="text-[#3CDC96]">marketers</span>, and{" "}
            <span className="text-[#4C8ECB]">anyone job-hunting</span>. It uses
            AI (OpenAI GPT) to compare your resume with a job description and
            gives you
          </p>
          <div className="w-full px-32 grid grid-cols-3 grid-rows-1 gap-20 h-40 text-lg py-10">
            <div className="bg-[#4c8ecb2b] border-2 border-[#4C8ECB] px-10 py-0.5 flex items-center text-center justify-center rounded-lg">
              A match score <br /> (out of 100)
            </div>
            <div className="bg-[#ff8e1d30] border-2 border-[#ff8e1d] px-10 py-0.5 flex items-center text-center rounded-lg">
              Missing skills you should highlight
            </div>
            <div className="bg-[#3cdc9739] border-2 border-[#3CDC96] px-10 py-0.5 flex items-center justify-center text-center rounded-lg">
              Suggestions to improve your resume instantly
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-15 py-10">
          <div className="text-xl text-center items-center flex justify-center flex-col">
            <p>
              Whether you’re applying to startups, MNCs, or freelancing
              platforms — Resume Analyzer helps you tweak your resume before
              hitting send.
            </p>
            <p>
              This is built to help others avoid the confusion and
              second-guessing during any job search.{" "}
            </p>
          </div>
          <div className="w-full flex flex-col gap-13 justify-center">
            <p className="text-center text-3xl font-medium">
              Ready to land more interviews with fewer applications?
            </p>
            <div className="flex justify-center">
              <Button
                text="Analyze your resume now"
                classname="px-4 py-2 bg-[#4C8ECB] text-white rounded-lg text-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
