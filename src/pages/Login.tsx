import Button from "../components/Button";

const Login = () => (
  <div className="h-full w-full pt-24 bg-primary-light">
    <div className="container mx-auto flex items-center justify-center">
      <div
        className="w-2/6 bg-white rounded-md shadow-lg flex flex-col px-6 py-4 gap-2">
        <h1 className="font-bold text-3xl">Login</h1>
        <input type="email" placeholder="Email" className="" />
        <input type="password" placeholder="Password" className="" />
        <Button classes="">Login</Button>
        <Button classes="">Login using Google</Button>
      </div>
    </div>
  </div>
);

export default Login;
