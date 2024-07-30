import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { pocketbase } from "../lib/utils";
import { useCookies } from "react-cookie";
import Navbar from "../components/home/Navbar/Navbar";

const Login = () => {
  const [cookie, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();
  const LoginValidationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const HandleLogin = async (email: string, password: string) => {
    const loginInfo = await pocketbase
      .collection("users")
      .authWithPassword(email, password)
      .then(() => {
        navigate("/");
      });

    setCookie("user", pocketbase.authStore.token);
    return loginInfo;
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: (values) => {
      HandleLogin(values?.email, values?.password);
    },
  });

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen font-poppins ">
        <div className="md:w-4/6 w-5/6 bg-[#232326] text-white md:p-20 p-10 text-center rounded-3xl">
          <Link to={"/"}>
            <h1 className="md:text-6xl text-3xl font-poppins font-semibold">
              Dorkinator
            </h1>
          </Link>
          <div className="md:my-[50px] my-[20px] md:text-3xl text-xl font-bold">
            <span>Login</span> |{" "}
            <Link to={"/signup"}>
              <span className="text-[#5F5F5F]">Signup</span>
            </Link>
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
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      placeholder="Email"
                      className="rounded-full text-black bg-[#D9D9D9]"
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
                      type="password"
                      placeholder="Password"
                      name="password"
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
                  <div className="">
                    <div
                      className="cursor-pointer"
                      onClick={async () =>
                        await pocketbase
                          .collection("users")
                          .requestPasswordReset("ditimajithia00@gmail.com")
                      }
                    >
                      Forgot Password?
                    </div>
                  </div>
                  <Button
                    className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] px-8 font-normal"
                    type="submit"
                  >
                    Login
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

export default Login;
