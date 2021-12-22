import { Button, Link, TextField } from "@mui/material";
import { useFormik } from "formik";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../components/Logo";
import { EMAIL_REGEX } from "../utils/constants";

type FormValues = { email: string; password: string };

const onSubmit = (values: FormValues) => {
  console.log(values);
};
const validate = ({ email, password }: FormValues): Partial<FormValues> => {
  const errors: Partial<FormValues> = {};
  if (!email) {
    errors.email = "Please enter email";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Incorrect format for email";
  }

  if (!password) {
    errors.password = "Please enter password";
  }
  return errors;
};

const Login = () => {
  const form = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit,
    validate,
  });

  return (
    <div className="h-screen w-full bg-white flex flex-col justify-center items-center">
      <div className="flex items-center">
        <Logo></Logo>
        <Link underline="none" to="/" component={RouterLink}>
          <h3 className="text-4xl px-3 py-2 font-bold text-black">Kanri</h3>
        </Link>
      </div>
      <div className="container mx-auto flex justify-center">
        <form onSubmit={form.handleSubmit}>
          <div className="w-auto bg-white place-content-center rounded-md shadow-lg flex flex-col px-10 py-10 gap-4 items-center">
            <h1 className="text-xl text-black/60">Login to Kanri</h1>
            <TextField
              placeholder="Email"
              type="text"
              id="email"
              className="w-full"
              error={form.touched.email && !!form.errors.email}
              helperText={form.touched.email && form.errors.email}
              {...form.getFieldProps('email')}
            />
            <TextField
              placeholder="Password"
              type="password"
              id="password"
              className="w-full"
              error={form.touched.password && !!form.errors.password}
              helperText={form.touched.password && form.errors.password}
              {...form.getFieldProps('password')}
            />
            <Button variant="contained" type="submit">
              Login
            </Button>
            <div className="uppercase font-thin">Or</div>
            <Button variant="contained">Login with Google</Button>
            <hr className="w-full my-2" />
            <div className="flex justify-around gap-2 font-thin tracking-tighter text-accent-dark">
              <Link
                underline="hover"
                color="inherit"
                to="/"
                component={RouterLink}
              >
                Can't log in?
              </Link>
              <p>&bull;</p>
              <Link
                underline="hover"
                color="black"
                to="/sign-up"
                component={RouterLink}
              >
                Sign up for an account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
