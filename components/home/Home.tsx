import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <UserButton />
    </div>
  );
};

export default Home;
