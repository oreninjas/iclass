import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn path="/login" signUpUrl="/register" />
    </div>
  );
};

export default page;
