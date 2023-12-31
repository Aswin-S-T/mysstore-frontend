import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";
function ChartComponent() {
    const data = [
      { name: "Geeksforgeeks", students: 400 },
      { name: "Technical scripter", students: 700 },
      { name: "Geek-i-knack", students: 200 },
      { name: "Geek-o-mania", students: 1000 },
      { name: "Geeksforgeeks", students: 400 },
      { name: "Technical scripter", students: 700 },
      { name: "Geek-i-knack", students: 200 },
      { name: "Geek-o-mania", students: 1000 },
      { name: "Geeksforgeeks", students: 400 },
      { name: "Technical scripter", students: 700 },
      { name: "Geek-i-knack", students: 200 },
      { name: "Geek-o-mania", students: 1000 },
    ];
  return (
    <div>
      <BarChart width={600} height={600} data={data}>
        <Bar dataKey="students" fill="yellow" />
        {/* <CartesianGrid stroke="#ccc" /> */}
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </div>
  );
}

export default ChartComponent