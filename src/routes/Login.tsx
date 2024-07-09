import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const Login = () => {
  return (
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
            <form>
              <div className="space-y-7">
                <div className="block text-left space-y-1">
                  <label className="ml-2">Email</label>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="rounded-full bg-[#D9D9D9]"
                  />
                </div>
                <div className="block text-left ">
                  <label className="ml-2">Password</label>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="rounded-full bg-[#D9D9D9]"
                  />
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
  );
};

export default Login;
