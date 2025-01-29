"use server";
import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

async function SideNav() {
  const user = await currentUser();

  return (
    <div className=" w-60 border-r divide-y">
      <div className="flex justify-center my-5">
        <Image
          src={"/logo.svg"}
          height={200}
          width={200}
          alt="Home"
          className="btn btn-ghost "
        />
      </div>
      <div className="flex flex-col items-center py-5 ">
        <Image
          src={user?.imageUrl}
          height={100}
          width={100}
          alt="Avatar"
          className="border-4 border-blue-500 shadow-md rounded-full"
        />
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
