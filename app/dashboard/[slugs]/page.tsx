'use client'
import ATS from "@/app/_components/Forms/Resume_optimization";
import Caption from "@/app/_components/Forms/Caption_Genrator";
import Optimizer from "@/app/_components/Forms/LinkedIn_Optimization";
import { useParams } from "next/navigation";
import React from "react";

function Page() {
  const { slugs } = useParams(); // Get the slug from the URL

  // Conditionally render components based on the slug
  let Component;
  switch (slugs) {
    case "ResumeOptimizer":
      Component = <ATS />;
      break;
    case "Caption":
      Component = <Caption />;
      break;
    case "Optimize-Profile":
      Component = <Optimizer />;
      break;
    default:
      Component = <div>404: Component Not Found</div>;
  }

  console.log(slugs);
  

  return <div>{Component}</div>;
}

export default Page;
