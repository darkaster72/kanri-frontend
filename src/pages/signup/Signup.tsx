import { Button, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "components/logo/Logo";

const Signup = () => (
  <div className="h-screen w-full bg-white flex flex-col justify-center items-center">
    <div className="flex items-center">
      <Logo></Logo>
      <Link to="/" component={RouterLink} underline="none">
        <h3 className="text-4xl px-3 py-6 font-bold text-black">Kanri</h3>
      </Link>
    </div>
    <div className="container mx-auto flex justify-center">
      <div className="w-auto bg-white place-content-center rounded-md shadow-lg flex flex-col px-12 py-10 gap-4 items-center">
        <h1 className="text-xl text-black/60">Sign-up for your account</h1>
        <TextField placeholder="Email" type="email" fullWidth/>
        <Button variant="contained" fullWidth>Sign-up</Button>
        <div className="uppercase font-thin">Or</div>
        <Button variant="outlined" fullWidth>Continue with Google</Button>
        <hr className="w-full my-2" />
        <Link
          to="/login"
          component={RouterLink}
          underline="hover"
          color="black"
        >
          <p className="hover:underline font-thin text-accent-dark">
            Already have an account? Login
          </p>
        </Link>
      </div>
    </div>
  </div>
);

export default Signup;
