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
    <section>
      <div className="container mx-auto md:px-40">
        <div className="relative">
          <div className="absolute md:scale-[0.6] scale-50 top-[-100px] right-[-20px] md:top-[-150px] md:right-[50%]">
            <img src={Ellipse} alt="Gola" />
          </div>
          <div className="flex">
            <div className="md:w-1/2 w-0"></div>
            <div className="md:w-1/2 w-full">
              <form className="md:space-y-5 space-y-3">
                <h1 className="md:text-5xl text-xl font-semibold">
                  Get in Touch
                </h1>
                <p className="text-[#9E9E9E] md:text-lg text-base">
                  Your feedback helps us improve our services; please share your
                  thoughts below.{" "}
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
      </div>
    </section>
  );
};

export default LeadsForm;
