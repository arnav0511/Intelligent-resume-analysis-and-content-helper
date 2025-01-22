'use client'
import ATS from "@/app/_components/ATS";
import Caption from "@/app/_components/Caption";
import Optimizer from "@/app/_components/Optimiser";
import { useParams } from "next/navigation";
import React from "react";

function Page() {
  const { slugs } = useParams(); // Get the slug from the URL

  // Conditionally render components based on the slug
  let Component;
  switch (slugs) {
    case "resume-optimizer":
      Component = <ATS />;
      break;
    case "caption-generator":
      Component = <Caption />;
      break;
    case "linkedin-optimizer":
      Component = <Optimizer />;
      break;
    default:
      Component = <div>404: Component Not Found</div>;
  }

  console.log(slugs);
  

  return <div>{Component}</div>;
}

export default Page;
