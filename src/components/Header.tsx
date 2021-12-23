import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "./Logo";

type AppProps = {};

const Header = ({}: AppProps) => (
  <nav className="fixed w-full">
    <div className="container mx-auto flex justify-between px-10 py-3 align-baseline">
      <div className="flex items-center">
        <Logo></Logo>
        <Link to="/">
          <h3 className="text-4xl px-3 py-2 font-bold text-black">Kanri</h3>
        </Link>
      </div>
      <div className="flex no-underline items-center gap-2">
        <Link to="login">
          <Button>Login</Button>
        </Link>
        <Link to="sign-up">
          <Button variant="outlined"> Sign Up</Button>
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
