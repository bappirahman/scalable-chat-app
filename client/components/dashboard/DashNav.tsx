import Link from "next/link";
import React from "react";
import ProfileMenu from "../auth/ProfileMenu";
import { UserAvatarProps } from "@/types/user";

function DashNav({ name, image }: UserAvatarProps) {
  return (
    <div>
      <nav className="p-6 flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-xl md:text-2xl font-extrabold">QuickChat</h1>
        <div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
          <Link href="/">Home</Link>
          <Link href="#features">
            <ProfileMenu name={name} image={image} />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default DashNav;
