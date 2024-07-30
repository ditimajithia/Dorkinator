import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { pocketbase } from "../lib/utils";
import Navbar from "../components/home/Navbar/Navbar";

const Signup = () => {
  const navigate = useNavigate();
  const SignupSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@_$!%*?&])[A-Za-z\d@_$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special case character"
      )
      .required("Password is required"),
    password_confirm: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
  });

  const CreateUserWithEmailAndPassword = async (
    email: string,
    password: string,
    passwordConfirm: string
  ) => {
    const record = await pocketbase
      .collection("users")
      .create({
        email,
        password,
        passwordConfirm,
      })
      .then(() => {
        navigate("/login");
      });
    return record;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password_confirm: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      CreateUserWithEmailAndPassword(
        values?.email,
        values?.password,
        values?.password_confirm
      );
    },
  });
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen w-screen font-poppins">
        <div className="md:w-4/6 w-5/6 bg-[#232326] text-white md:p-20 p-10 text-center rounded-3xl">
          <Link to={"/"}>
            <h1 className="md:text-6xl text-3xl font-poppins font-semibold">
              Dorkinator
            </h1>
          </Link>
          <div className="md:my-[50px] my-[20px] md:text-3xl text-xl font-bold">
            <Link to={"/login"}>
              <span className="text-[#5F5F5F]">Login</span>{" "}
            </Link>
            | <span className="">Signup</span>
          </div>
          <div className="flex justify-center">
            <div className="md:w-1/2 w-full">
              <form onSubmit={formik.handleSubmit}>
                <div className="md:space-y-7 space-y-3">
                  <div className="block text-left space-y-1">
                    <label className="ml-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="rounded-full text-black bg-[#D9D9D9]"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="ml-2 text-red-600">
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                  <div className="block text-left ">
                    <label className="ml-2">Password</label>
                    <Input
                      name="password"
                      type="password"
                      placeholder="Password"
                      className="rounded-full text-black bg-[#D9D9D9]"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="ml-2 text-red-600">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </div>
                  <div className="block text-left ">
                    <label className="ml-2">Confirm Password</label>
                    <Input
                      name="password_confirm"
                      type="password"
                      placeholder="Retype the password"
                      className="rounded-full text-black bg-[#D9D9D9]"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password_confirm}
                    />
                    {formik.touched.password_confirm &&
                    formik.errors.password_confirm ? (
                      <div className="ml-2 text-red-600">
                        {formik.errors.password_confirm}
                      </div>
                    ) : null}
                  </div>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] px-8 font-normal"
                  >
                    Signup
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
