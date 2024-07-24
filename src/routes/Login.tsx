import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { pocketbase } from "../lib/utils";
import { useCookies } from "react-cookie";
import { useToast } from "../components/ui/use-toast";

const Login = () => {
  const [cookie, setCookie] = useCookies(["user"]);
  const { toast } = useToast();
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
        toast;
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
      <div className="flex justify-center items-center h-screen font-poppins ">
        <div className="w-4/6 bg-[#232326] text-white p-20 text-center rounded-3xl">
          <Link to={"/"}>
            <h1 className="text-6xl font-poppins font-semibold">Dorkinator</h1>
          </Link>
          <div className="my-[50px] text-3xl font-bold">
            <span>Login</span> |{" "}
            <Link to={"/signup"}>
              <span className="text-[#5F5F5F]">Signup</span>
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="w-1/2">
              <form onSubmit={formik.handleSubmit}>
                <div className="space-y-7">
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
                  <Button className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] px-8 font-normal">
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
