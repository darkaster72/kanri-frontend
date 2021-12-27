import { Button, Link, TextField } from "@mui/material";
import { Formik } from "formik";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import * as yup from "yup";
import { login, loginUser } from "../redux/reducers/userSlice";
import { useAppDispatch } from "../redux/store";

type FormValues = { email: string; password: string };

const validationSchema = yup.object({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().required("Required"),
});

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (values: FormValues) => {
    dispatch(loginUser(values))
      .unwrap()
      .then(() => navigate("/"));
  };

  return (
    <div className="h-screen w-full bg-white flex flex-col justify-center items-center">
      <div className="flex items-center">
        <Logo></Logo>
        <Link underline="none" to="/" component={RouterLink}>
          <h3 className="text-4xl px-3 py-2 font-bold text-black">Kanri</h3>
        </Link>
      </div>
      <div className="container mx-auto flex justify-center">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnBlur
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <div className="w-auto bg-white place-content-center rounded-md shadow-lg flex flex-col px-12 py-10 gap-3 items-center">
                <h1 className="text-xl text-black/60">Login to Kanri</h1>
                <TextField
                  placeholder="Email"
                  type="text"
                  id="email"
                  fullWidth
                  error={formik.touched.email && !!formik.errors.email}
                  helperText={formik.touched.email && formik.errors.email}
                  {...formik.getFieldProps("email")}
                />
                <TextField
                  placeholder="Password"
                  type="password"
                  id="password"
                  fullWidth
                  error={formik.touched.password && !!formik.errors.password}
                  helperText={formik.touched.password && formik.errors.password}
                  {...formik.getFieldProps("password")}
                />
                <Button variant="contained" type="submit" fullWidth>
                  Login
                </Button>
                <div className="uppercase font-thin">Or</div>
                <Button variant="outlined" fullWidth>Login with Google</Button>
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
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
