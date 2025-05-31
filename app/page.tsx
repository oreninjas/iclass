import SignedOutHome from "@/components/home/SignedOut";
import Home from "@/components/home/Home";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <>
      <SignedOut>
        <SignedOutHome />
      </SignedOut>
      <SignedIn>
        <Home />
      </SignedIn>
    </>
  );
};

export default HomePage;
