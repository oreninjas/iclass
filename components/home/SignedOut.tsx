"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../navbar/Navbar";

const Home = () => {
  const router = useRouter();
  return (
    <>
    <Navbar />
    <section className="w-full h-[90vh] flex flex-col justify-center items-center">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold ">iClass</h1>
        <h2 className="text-2xl md:text-3xl font-light italic text-gray-600">
          by{" "}
          <a href="https://github.com/oreninjas" target="_blank">
            faiyan
          </a>
        </h2>
        <p className="text-lg text-gray-600">
          Join and create classes, manage your students, and enhance your learning experience with iClass.
        </p>
      </div>
      <button className="mt-8">
        <Link href={"/register"}>Get Started</Link>
      </button>
    </section>
    </>
  );
};

export default Home;
