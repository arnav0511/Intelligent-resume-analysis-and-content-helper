"use server";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

async function SideNav() {
  const user = await currentUser();
  const userButtonAppearance = {
    elements: {
      userButtonAvatarBox: "w-24 h-24",
      userButtonPopoverCard: "bg-blue-100",
    },
  };

  return (
    <div className=" w-72 border-r divide-y">
      <div className="flex justify-center my-5">
        <Link href={"/"}>
          <Image
            src={"/logo.svg"}
            height={200}
            width={200}
            alt="Home"
            className="btn btn-ghost "
          />
        </Link>
      </div>
      <div className="flex flex-col items-center py-5 ">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
            <UserButton appearance={userButtonAppearance} />
          </div>
        </div>
        {/* <UserButton /> */}
        <h2 className="font-extrabold text-lg text-gray-800 mt-4 text-center">
          {user?.firstName} {user?.lastName || "User"}
        </h2>
        <p className="text-sm text-gray-600 font-medium mt-1 px-2">
          {user?.primaryEmailAddress?.emailAddress || "No Email Provided"}
        </p>
        {user?.primaryPhoneNumber?.phoneNumber && (
          <p className="text-sm text-gray-600 font-medium mt-1">
            {user?.primaryPhoneNumber?.phoneNumber}
          </p>
        )}
      </div>
      <div>
        <span className="flex flex-col items-center font-bold">History</span>
      </div>
    </div>
  );
}

export default SideNav;
