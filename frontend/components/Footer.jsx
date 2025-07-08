import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../public/hiresenseOpp.png";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  return (
    <div className="w-full pt-20 bg-[#4C8ECB] font-funnel flex flex-col gap-16">
      <div className="text-4xl px-[9.7rem] font-medium">
        Helping job seekers optimize their resumes with AI ✨
      </div>
      <div className="flex w-full px-[6rem] justify-around">
        <div className="flex flex-col gap-3">
          <div>
            <Link href="/">
              <Image
                src={Logo}
                width={800}
                height={800}
                alt="Logo"
                className="w-40"
              />
            </Link>
          </div>
          <p className="w-80 ml-1.5 text-xs font-medium text-gray-800">
            Resume Analyzer helps job seekers instantly compare their resume
            with any job description using AI — get a match score, missing
            skills, and actionable feedback in seconds.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 font-medium">Navigate</p>
          <Link href="/">Analyze Resume</Link>
          <Link href="/about">About Us</Link>
          <Link href="/about">Contact</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 font-medium">Connect</p>
          <Link href="#">GitHub</Link>
          <Link href="#">LinkedIn</Link>
          <Link href="#">X (Twitter)</Link>
          <Link href="#">Instagram</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 font-medium">Contact</p>
          <p>info@hiresense.in</p>
          <p>+91 88896-27193</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="mb-2 font-medium">Legal</p>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Use</Link>
        </div>
      </div>
      <div className="w-full bg-white py-1 text-sm text-center font-medium">
        Built with 💻, ☕, and a lot of late nights by Aayush Chaudhary
      </div>
    </div>
  );
}
