import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SignUp path="/register" signInUrl="/login" />
    </div>
  );
};

export default page;
