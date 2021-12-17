import { Link } from "react-router-dom";
import Button from "./Button";
import TextButton from "./TextButton";

type AppProps = {};

const Header = (props: AppProps) => (
  <nav className="fixed w-full">
    <div className="w-full flex justify-between px-10 py-3 align-baseline">
      <div className="flex items-center">
        <div className="bg-white rounded-md px-2 items-center">
          <h1 className="text-2xl font-bold text-black">K</h1>
        </div>
        <h3 className="text-4xl px-3 py-2 font-bold text-white">Kanri</h3>
      </div>
      <div className="flex no-underline items-center">
        <Link to="login">
          <TextButton>Login</TextButton>
        </Link>
        <Link to="sign-up">
          <Button> Sign Up</Button>
        </Link>
      </div>
    </div>
  </nav>
);

export default Header;
