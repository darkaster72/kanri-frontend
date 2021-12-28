import { Button, TextField } from "@mui/material";
import Header from "../components/Header";
import hero from "../assets/hero.png";

const Home = () => (
  <div className="h-full w-full bg-background">
    <Header />
    {/* Hero Section */}
    <div className="container flex pt-24 mx-auto px-6 items-center">
      <div className="mx-10 w-full">
        <h3 className="font-bold text-5xl text-black leading-tight">
          Kanri helps teams move work forward.
        </h3>
        <p className="mt-2 text-lg font-thin text-black">
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is
          unique—accomplish it all with Kanri.
        </p>
        <div className="flex mt-8 gap-4">
          <TextField placeholder="Email" className="basis-4/6"></TextField>
          <Button variant="contained" className="basis-2/6" color="secondary">
            Sign Up
          </Button>
        </div>
      </div>
      <div className="basis-4/6">
        <img src={hero} alt="illustration" />
      </div>
    </div>
  </div>
);

export default Home;
