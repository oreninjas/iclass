"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Left from "./Left";
import { useEffect, useState } from "react";
import Top from "./Top";
// Client-Server side imports
import axios from "axios";
import { toast, Toaster } from "sonner";

const Home = () => {
  const [className, setClassName] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let trimmedClassName = className.trim();
    if (trimmedClassName.length === 0) {
      alert("Class name cannot be empty.");
      return;
    }
    if (trimmedClassName.length > 25) {
      alert("Class name cannot exceed 25 characters.");
      return;
    }

    await axios
      .post("/api/class/create", { title: className })
      .then((response) => {
        toast.success("Class created successfully!");
        setClassName("");
      })
      .catch((error) => {
        toast.error("Failed to create class. Please try again.");
      });
  };
  return (
    <>
      <Toaster />
      <div className="w-full h-screen flex">
        <Left icons={false} />
        {/* Right */}
        <div className="flex-1 h-full flex flex-col">
          {/* TOP */}
          <div className="flex w-full h-16 bg-[#E6E6E6]/33 items-center justify-between px-4">
            <Top content="This app is still under development." />

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" className="p-2">
                  <svg
                    aria-hidden="true"
                    role="graphics-symbol"
                    viewBox="0 0 20 20"
                    style={{
                      width: 22,
                      height: 22,
                      display: "block",
                      fill: "rgba(0, 0, 0, 0.46)",
                    }}
                  >
                    <path d="m16.774 4.341-.59.589-1.109-1.11.596-.594a.784.784 0 0 1 1.103 0c.302.302.302.8 0 1.102zM8.65 12.462l6.816-6.813-1.11-1.11-6.822 6.808a1.1 1.1 0 0 0-.236.393l-.289.932c-.052.196.131.38.315.314l.932-.288a.9.9 0 0 0 .394-.236"></path>
                    <path d="M4.375 6.25c0-1.036.84-1.875 1.875-1.875H11a.625.625 0 1 0 0-1.25H6.25A3.125 3.125 0 0 0 3.125 6.25v7.5c0 1.726 1.4 3.125 3.125 3.125h7.5c1.726 0 3.125-1.4 3.125-3.125V9a.625.625 0 1 0-1.25 0v4.75c0 1.036-.84 1.875-1.875 1.875h-7.5a1.875 1.875 0 0 1-1.875-1.875z"></path>
                  </svg>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit} className="grid gap-4 mt-4">
                  <DialogHeader>
                    <DialogTitle>Create a class</DialogTitle>
                    <DialogDescription>
                      Give a title to your class and invite others to join it.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Input
                        onChange={(e) => setClassName(e.target.value)}
                        value={className}
                        id="name-1"
                        name="name"
                        placeholder="e.g. CS 2nd Year"
                      />
                    </div>
                  </div>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Create</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          {/* MAIN */}
          <div className="flex-1 flex items-center justify-center">
            {/* TEMP BG SVG PATTERN :0 */}
            <svg
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="diagonal-pattern"
                  width="16"
                  height="16"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0,16 L16,0"
                    stroke="#E6E6E6"
                    strokeWidth="1"
                    strokeOpacity="0.33"
                  />
                </pattern>
              </defs>
              <rect fill="url(#diagonal-pattern)" width="100%" height="100%" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
