"use client";

import { RadialBarChart, RadialBar, PolarRadiusAxis, Label } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const progress = 75;

const chartData = [
  {
    name: "Background",
    value: 100,
    fill: "#6fcfff2f",
  },
  {
    name: "Progress",
    value: progress,
    fill: "#4C8ECB",
  },
];

export function ProgressChart() {
  return (
    <RadialBarChart
      width={250}
      height={150}
      innerRadius={60}
      outerRadius={80}
      barSize={10}
      data={chartData}
      startAngle={180}
      endAngle={0} // Full 180-degree semicircle
      className=" absolute top-5"
    >
      <PolarRadiusAxis
        type="number"
        domain={[0, 100]}
        tick={false}
        axisLine={false}
      >
        <Label
          value={`${progress}%`}
          position="center"
          className="fill-black text-xl font-bold"
        />
      </PolarRadiusAxis>

      <RadialBar
        minAngle={5}
        clockWise={true}
        dataKey="value"
        cornerRadius={10}
      />
    </RadialBarChart>
  );
}
