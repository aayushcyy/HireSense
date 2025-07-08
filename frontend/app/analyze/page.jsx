import Navbar from "@/components/Navbar";
import { ProgressChart } from "@/components/ProgressBar";
import React from "react";
import { BoltIcon } from "@heroicons/react/24/outline";
import { TrendingUp, ThumbsDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Button from "@/components/Button";

export default function page() {
  return (
    <div className="w-full h-auto relative overflow-hidden bg-white font-funnel">
      <Navbar />
      <div className="w-full min-h-screen grid grid-cols-5 grid-rows-3 gap-4 py-4 px-24">
        <div className="col-end-6 col-start-1  flex gap-4 overflow-hidden">
          <div className="flex flex-col w-[80%] gap-4">
            <div className="row-start-1 col-start-1 col-end-5 gap-5 px-4 py-2 bg-[#F3F3F3] rounded-lg">
              <div className="w-[70%] text-2xl flex gap-2">
                <div>
                  <p className="text-xl">Congratulations Aayush,</p>
                  <p>Your Resume Match score is:</p>
                </div>
                <div className="flex mt-auto text-3xl">
                  {45}
                  <span className="text-2xl mt-auto">/100</span>
                </div>
              </div>
            </div>
            <div className="row-start-2 col-start-1 col-end-5 px-4 py-3 bg-[#F3F3F3] rounded-lg ">
              <p className="font-medium text-lg">Review</p>
              <p>
                Your resume demonstrates a strong understanding of frontend
                development using React and Tailwind CSS. However, it lacks
                mention of TypeScript and testing practices such as Jest or unit
                testing — both are commonly expected in senior frontend roles.
                Adding measurable impact (e.g., “improved page load speed by
                30%”).
              </p>
            </div>
          </div>
          <div className="w-[18%] flex items-center justify-center">
            <div className="rounded-lg flex flex-col items-center gap-4">
              <Button
                classname="bg-[#fab951] text-white px-3 py-2 rounded-md font-medium"
                text="Sign In to Save Analysis"
              />
              <Button
                classname="bg-[#4C8ECB] text-white px-3 py-2 rounded-md font-medium"
                text="Download Report"
              />
            </div>
          </div>
        </div>
        <div className="row-start-2 row-end-4 bg-[#0000000c] px-4 py-0 rounded-lg">
          <div className="flex flex-col w-52 gap-3 mt-3 rounded-lg">
            <p className="flex items-center font-medium justify-between text-lg">
              Missing Skills <BoltIcon className="size-4 text-blue-500" />
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="border-[#0000003e]" variant="outline">
                Docker
              </Badge>
              <Badge className="border-[#0000003e]" variant="outline">
                Kubernetes
              </Badge>
              <Badge className="border-[#0000003e]" variant="outline">
                REST API Design
              </Badge>
              <Badge className="border-[#0000003e]" variant="outline">
                System Design
              </Badge>
              <Badge className="border-[#0000003e]" variant="outline">
                Unit Testing (Jest)
              </Badge>
              <Badge className="border-[#0000003e]" variant="outline">
                TypeScript
              </Badge>
              <Badge className="border-[#0000003e]" variant="outline">
                GraphQL
              </Badge>
            </div>
          </div>
        </div>
        <div className="row-start-2 rounded-lg relative bg-[#0000000c] py-3 px-4">
          <p className="text-lg font-medium">Keyword matched</p>
          <div className="w-full h-full flex overflow-hidden relative">
            <ProgressChart />
          </div>
        </div>
        <div className="row-start-2 col-start-3 col-end-6 flex gap-4 rounded-lg text-base">
          <div className="bg-[#0000000c] w-full flex flex-col gap-3 rounded-lg py-3 px-4">
            <p className="text-lg font-medium">Time to Read Resume</p>
            <div className="flex gap-5 items-center">
              <p className="text-4xl">2.3min</p>
              <ThumbsDown color="red" size="20" />
            </div>
            <p>Your resume is 2.3 min read, keep it under 2 min for recrui </p>
          </div>
          <div className="bg-[#0000000c] w-full flex flex-col gap-3 rounded-lg py-3 px-4">
            <p className="text-lg font-medium">Resume Score Insights</p>
            <div className="flex gap-5 items-center">
              <p className="text-4xl">15%</p>
              <p>
                <TrendingUp color="green" />
              </p>
            </div>
            <p className="">
              Compared to other users who applied for similar roles, your score
              is in the top 15%.
            </p>
          </div>
        </div>
        <div className="row-start-3 flex flex-col gap-2 py-3 px-4 col-start-4 col-end-6 bg-[#0000000c] rounded-lg">
          <p className="text-lg font-medium">Resume Summary</p>
          <p>
            Experienced MERN Stack Developer skilled in building responsive UIs
            with React.js and scalable APIs with Node.js and Express. Proficient
            in MongoDB and deploying full-stack applications using Render and
            Vercel. Built multiple projects including a Slack-based approval
            system and a cafe booking portal.
          </p>
        </div>
        <div className="col-start-2 flex flex-col gap-2 py-3 px-4 col-end-4 row-start-3 bg-[#0000000c] rounded-lg">
          <p className="text-lg font-medium">Job Description Summary</p>
          <p>
            We are looking for a frontend engineer with strong React.js
            fundamentals, experience in TypeScript, testing libraries like Jest,
            and familiarity with GraphQL and CI/CD pipelines. The role involves
            working closely with backend engineers and designing scalable UI
            systems.
          </p>
        </div>
      </div>
      <div className="w-full px-24 py-14 flex justify-center">
        <div className="flex gap-10 items-center">
          <Button
            text="Analyze Another Resume"
            classname="py-2 px-3 bg-[#4C8ECB] text-white rounded-lg"
          />
          <Button
            text="Update & Try Again"
            classname="py-2 px-3 bg-[#FAB951] text-white rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
