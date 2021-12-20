import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import TextButton from "./TextButton";

type AppProps = {};

const Header = ({}: AppProps) => (
  <nav className="fixed w-full">
    <div className="w-full flex justify-between px-10 py-3 align-baseline">
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
      <div className="flex no-underline items-center gap-2">
        <Link to="login">
          <Button>Login</Button>
        </Link>
        <Link to="sign-up">
          <Button variant="contained"> Sign Up</Button>
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
