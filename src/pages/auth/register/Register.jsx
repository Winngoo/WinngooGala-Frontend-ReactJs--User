import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { GoInfo } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { CountryDropdown } from "react-country-region-selector";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [confirmpasswordShow, setConfirmPasswordShow] = useState(false);
  const navigate = useNavigate();
  const [mobileCountryCode, setMobileCountryCode] = useState("gb");

  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("Please Enter Your Firstname"),
    surname: Yup.string().required("Please Enter Your Surname"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Please Enter Your Email"),
    confirm_email: Yup.string()
      .oneOf([Yup.ref("email"), null], "Emails do not match")
      .required("Please Enter Your Confirm Email"),
    mobile_number: Yup.string().required("Please Enter Your Mobile Number"),
    country: Yup.string().required("Please Enter Your Country"),
    password: Yup.string()
      .required("Please Enter Your Password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/,
        "Password must contain 1 uppercase, 1 lowercase, 1 number, 1 special character, and be 8-14 characters long"
      ),
    confirmed_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Please Enter Your Confirm Password"),
    agreement: Yup.bool().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  const onSubmit = async (values) => {
    toast.dismiss();
    const toastLoading = toast.loading("User Signing Up...");
    try {
      const response = await axios.post(
        "https://winngoogala.winngooconsultancy.in/api/register",
        values
      );
      toast.dismiss(toastLoading);
      toast.success("Sign Up Successfully");
      navigate("/login");
    } catch (error) {
      toast.dismiss(toastLoading);
      toast.error(error.response.data.errors.email[0]);
    }
  };

  const handleCountryChange = (val, setFieldValue) => {
    setFieldValue("country", val);
    const countryCode = val.toLowerCase().substring(0, 2);
    setMobileCountryCode(countryCode);
  };

  return (
    <div className="bg-gradient-to-b from-[#1E3E62] via-[#184E4E] to-black flex justify-center items-center w-full max-h-full pt-10 pb-10">
      <Formik
        initialValues={{
          first_name: "",
          surname: "",
          email: "",
          confirm_email: "",
          mobile_number: "",
          country: "United Kingdom",
          password: "",
          confirmed_password: "",
          agreement: false,
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            <div className="bg-white dark:bg-gray-900 px-10 py-5 rounded-xl w-screen shadow-2xl max-w-sm">
              <div className="space-y-4">
                <div className="text-center space-y-2">
                  <h1 className="text-xl font-semibold">Welcome</h1>
                  <small className="text-gray-400 dark:text-gray-200">
                    Create an account to start using Winngoo Gala
                  </small>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-1 text-gray-600 text-sm font-medium">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type="text"
                      name="first_name"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600"
                      placeholder="First Name"
                      maxLength="20"
                      pattern="^[A-Za-z]+$" // Allows only alphabetic input
                      title="Only alphabets are allowed"
                      required
                      onInput={(e) => {
                        // Remove any non-alphabetic characters
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z]/g,
                          ""
                        );
                      }}
                    />
                    <ErrorMessage
                      name="first_name"
                      component="span"
                      className="text-red-500 flex items-center gap-1 py-1"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="surname"
                      className="block mb-1 text-gray-600 text-sm font-medium">
                      Surname <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type="text"
                      name="surname"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600"
                      placeholder="Surname"
                      maxLength="20"
                      pattern="^[A-Za-z]+$"
                      title="Only alphabets are allowed"
                      required
                      onInput={(e) => {
                        // Remove any non-alphabetic characters
                        e.target.value = e.target.value.replace(
                          /[^A-Za-z]/g,
                          ""
                        );
                      }}
                    />
                    <ErrorMessage
                      name="surname"
                      component="span"
                      className="text-red-500 flex items-center gap-1 py-1"
                    />
                  </div>
                </div>

                {/* Email and Confirm Email Fields */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-gray-600 text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    name="email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600"
                    placeholder="Enter Email Address"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-red-500 flex items-center gap-1 py-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirm_email"
                    className="block mb-1 text-gray-600 text-sm font-medium">
                    Confirm Email <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    name="confirm_email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600"
                    placeholder="Confirm Email Address"
                  />
                  <ErrorMessage
                    name="confirm_email"
                    component="span"
                    className="text-red-500 flex items-center gap-1 py-1"
                  />
                </div>

                {/* Country Dropdown */}
                <div>
                  <label
                    htmlFor="country"
                    className="block mb-1 text-gray-600 text-sm font-medium">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <CountryDropdown
                    value={values.country}
                    onChange={(val) => handleCountryChange(val, setFieldValue)}
                    className="w-full rounded-lg  border border-stroke bg-transparent py-2 px-3 text-gray-600"
                  />
                  <ErrorMessage
                    name="country"
                    component="span"
                    className="text-red-500 flex items-center gap-1 py-1"
                  />
                </div>

                {/* Mobile Number with Auto Country Code */}
                <div className="flex flex-col">
                  <label
                    htmlFor="mobile_number"
                    className="block mb-1 text-gray-600 text-sm font-medium">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <PhoneInput
                    country={mobileCountryCode}
                    value={values.mobile_number}
                    onChange={(phone, country) => {
                      setFieldValue("mobile_number", phone);
                      setFieldValue("country", country.name);
                      setMobileCountryCode(country.countryCode);
                    }}
                    inputClass="flex-1 rounded-lg border-0 py-2 px-3 outline-none text-gray-600"
                    disableFormatting
                    inputProps={{
                      name: "mobile_number",
                      required: true,
                      autoFocus: true,
                      placeholder: "Enter Mobile Number",
                    }}
                  />
                  <ErrorMessage
                    name="mobile_number"
                    component="span"
                    className="text-red-500 flex items-center gap-1 py-1"
                  />
                </div>

                {/* Password Fields */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 text-gray-600 text-sm font-medium">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Field
                      type={passwordShow ? "text" : "password"}
                      name="password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600"
                      placeholder="Enter Password"
                    />
                    <span
                      onClick={() => setPasswordShow(!passwordShow)}
                      className="absolute top-[15px] text-gray-500 right-5 cursor-pointer select-none">
                      {passwordShow ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </span>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-red-500 flex items-center gap-1 py-1"
                  />
                </div>

                {/* Confirm Password Fields */}
                <div>
                  <label
                    htmlFor="confirmed_password"
                    className="block mb-1 text-gray-600 text-sm font-medium">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Field
                      type={confirmpasswordShow ? "text" : "password"}
                      name="confirmed_password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-2 px-3 outline-none text-gray-600"
                      placeholder="Confirm Password"
                    />
                    <span
                      onClick={() =>
                        setConfirmPasswordShow(!confirmpasswordShow)
                      }
                      className="absolute top-[15px] text-gray-500 right-5 cursor-pointer select-none">
                      {confirmpasswordShow ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                          <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </span>
                  </div>
                  <ErrorMessage
                    name="confirmed_password"
                    component="span"
                    className="text-red-500 flex items-center gap-1 py-1"
                  />
                </div>

                {/* Agreement Checkbox */}
                <div className="flex flex-col items-start">
                  <div className="flex items-center">
                    <Field type="checkbox" name="agreement" />
                    <label
                      htmlFor="agreement"
                      className="ml-2 text-sm text-gray-600">
                      I agree to all{" "}
                      <Link to="/terms" className="font-semibold text-primary">
                        Terms & Conditions{" "}
                        <span className="text-red-500">*</span>
                      </Link>
                    </label>
                  </div>
                  <ErrorMessage
                    name="agreement"
                    component="span"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg">
                  Register
                </button>

                {/* Login Link */}
                <div className="text-center mt-4">
                  Already have an account?{" "}
                  <Link to="/login" className="font-semibold text-primary">
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
