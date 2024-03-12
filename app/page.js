"use client";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState(new Date());
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="border rounded-md"
      />
    </main>
  );
}
