'use client'
<<<<<<< HEAD
import ATS from "@/app/_components/ATS";
import Caption from "@/app/_components/Caption";
import Optimizer from "@/app/_components/Optimiser";
=======
import ATS from "@/app/_components/Forms/Resume_optimization";
import Caption from "@/app/_components/Forms/Caption_Genrator";
import Optimizer from "@/app/_components/Forms/LinkedIn_Optimization";
>>>>>>> 0ec330c (mid evaluation update)
import { useParams } from "next/navigation";
import React from "react";

function Page() {
  const { slugs } = useParams(); // Get the slug from the URL

  // Conditionally render components based on the slug
  let Component;
  switch (slugs) {
<<<<<<< HEAD
    case "resume-optimizer":
      Component = <ATS />;
      break;
    case "caption-generator":
      Component = <Caption />;
      break;
    case "linkedin-optimizer":
=======
    case "ResumeOptimizer":
      Component = <ATS />;
      break;
    case "Caption":
      Component = <Caption />;
      break;
    case "Optimize-Profile":
>>>>>>> 0ec330c (mid evaluation update)
      Component = <Optimizer />;
      break;
    default:
      Component = <div>404: Component Not Found</div>;
  }

<<<<<<< HEAD
  console.log(slugs);
=======

>>>>>>> 0ec330c (mid evaluation update)
  

  return <div>{Component}</div>;
}

export default Page;
