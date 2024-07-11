import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import Ellipse from "../../../assets/backdrop-dependencies/Ellipse.svg";
import { useMutation } from "@tanstack/react-query";
import { pocketbase } from "../../../lib/utils";
import { useFormik } from "formik";
import * as Yup from "yup";
const LeadsForm = () => {
  const createLeads = async () => {
    const record = await pocketbase.collection("leads").create(formik.values);
    return record;
  };
  const LeadsValidationSchema = Yup.object().shape({
    user_email: Yup.string().email("Invalid email").required("Required"),
    user_name: Yup.string()
      // .min(2, "Too Short!")
      // .max(70, "Too Long!")
      .required("Required"),
    user_message: Yup.string()
      // .min(2, "Too Short!")
      // .max(70, "Too Long!")
      .required("Required"),
  });

  const mutation = useMutation({
    mutationFn: createLeads,
  });

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_message: "",
      user_email: "",
    },
    onSubmit: () => {
      mutation?.mutate();
    },
    validationSchema: LeadsValidationSchema,
  });

  return (
    <div className="relative">
      <div className="absolute scale-[0.6] top-[-150px] right-[50%]">
        <img src={Ellipse} alt="Gola" />
      </div>
      <div className="flex">
        <div className="w-1/2"></div>
        <div className="w-1/2 space-y-5 ">
          <form>
            <h1 className="text-5xl font-semibold">Get in Touch</h1>
            <p className="text-[#9E9E9E] text-lg">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem{" "}
            </p>
            <div className="space-y-5">
              <Input
                type="email"
                name="user_email"
                onChange={formik?.handleChange}
                value={formik?.values?.user_email}
                placeholder="email@example.com"
                className="bg-[#18181C] text-[#9E9E9E] border-0 outline-none transition duration-700"
              />
              {formik.touched.user_email && formik.errors.user_email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.user_email}
                </div>
              ) : null}
              <Input
                type="text"
                name="user_name"
                onChange={formik?.handleChange}
                value={formik?.values?.user_name}
                placeholder="Username"
                className="bg-[#18181C] text-[#9E9E9E] border-0 outline-none transition duration-700"
              />
              {formik.touched.user_name && formik.errors.user_name ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.user_name}
                </div>
              ) : null}
              <Textarea
                name="user_message"
                onChange={formik?.handleChange}
                value={formik?.values?.user_message}
                placeholder="Type your message here."
                className="bg-[#18181C] text-[#9E9E9E] border-0 outline-none transition duration-700"
              />
              {formik.touched.user_message && formik.errors.user_message ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.user_message}
                </div>
              ) : null}
            </div>
            <Button
              type="button"
              className="bg-gradient-to-r from-[#FF9898] to-[#8054FF] px-8 font-normal"
              onClick={() => formik?.handleSubmit()}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadsForm;
