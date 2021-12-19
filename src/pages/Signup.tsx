import { Link } from "react-router-dom";
import Button from "../components/Button";
import TextField from "../components/TextField";

const Signup = () => (
  <div className="h-screen w-full bg-primary-light flex flex-col justify-center items-center">
    <div className="flex items-center">
      <div className="bg-secondary rounded-md px-2 items-center">
        <h1 className="text-4xl font-thin text-primary-light">K</h1>
      </div>
      <Link to="/">
        <h3 className="text-4xl px-3 py-2 font-bold text-primary-dark">
          Kanri
        </h3>
      </Link>
    </div>
    <div className="container mx-auto flex justify-center">
      <div className="w-auto bg-white place-content-center rounded-md shadow-lg flex flex-col px-10 py-10 gap-4 items-center">
        <h1 className="text-xl text-primary-dark/60">Sign-up for your account</h1>
        <TextField placeholder="Email" type="email" classes="" />
        <Button classes="">Sign-up</Button>
        <div className="uppercase font-thin">Or</div>
        <Button classes="">Continue with Google</Button>
        <hr className="w-full my-2" />
        <Link to="/login">
          <p className="hover:underline font-thin text-accent-dark">Already have an account? Login</p>
        </Link>
      </div>
    </div>
  </div>
);

export default Signup;
