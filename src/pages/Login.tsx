import { Link } from "react-router-dom";
import Button from "../components/Button";
import TextField from "../components/TextField";

const Login = () => (
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
        <h1 className="text-xl text-primary-dark/60">Login to Kanri</h1>
        <TextField placeholder="Email" type="email" classes="" />
        <TextField placeholder="Password" type="password" classes="" />
        <Button classes="">Login</Button>
        <div className="uppercase font-thin">Or</div>
        <Button classes="">Login with Google</Button>
        <hr className="w-full my-2" />
        <div className="flex justify-around gap-2 font-thin tracking-tighter text-accent-dark">
          <Link to="/">
            <p className="hover:underline">Can't log in?</p>
          </Link>
          <p>&bull;</p>
          <Link to="/sign-up">
            <p className="hover:underline">Sign up for an account</p>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
