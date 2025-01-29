"use client"; // Ensures this is a Client Component

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Dashboard_Card from "./Card/Dashboard_Card"; // Import the server component
import { Briefcase, FileText, Linkedin, UserCheck, Bot } from "lucide-react";

const features = [
  {
    title: "Resume Optimization",
    description:
      "Upload your resume to get ATS-friendly optimization tips tailored to your desired job role.",
    actionText: "Optimize Resume",
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    action: "/Dashboard/ResumeOptimizer",
  },
  {
    title: "LinkedIn Caption Generator",
    description:
      "Generate professional LinkedIn captions from your informal inputs to enhance your profile engagement.",
    actionText: "Generate Caption",
    icon: <Linkedin className="w-8 h-8 text-blue-600" />,
    action: "/Dashboard/Caption",
  },
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Upload your LinkedIn profile to receive actionable tips for improving visibility and appeal.",
    actionText: "Optimize Profile",
    icon: <UserCheck className="w-8 h-8 text-blue-600" />,
    action: "/Dashboard/Optimize-Profile",
  },
  {
    title: "Generate New Resume",
    description:
      "Create a professional resume from scratch by entering your details step by step.",
    actionText: "Create Resume",
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    action: "/Dashboard/Create-Resume",
  },
  {
    title: "AI Interviewer",
    description:
      "Practice job interviews with an AI interviewer and get instant feedback.",
    actionText: "Start Interview",
    icon: <Bot className="w-8 h-8 text-blue-600" />,
    action: "/Dashboard/Start_Interview",
  },
];

export default function SwiperDashboard() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper max-w-md mx-auto"
    >
      {features.map((feature) => (
        <SwiperSlide key={feature.title} className="flex justify-center">
          <Dashboard_Card
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            actionText={feature.actionText}
            action={feature.action}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
