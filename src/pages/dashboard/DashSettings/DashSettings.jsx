import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Container from "../../../components/container/Container";

const DashSettings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Enter Your Firstname"),
    lastName: Yup.string().required("Enter Your Lastname"),
    email: Yup.string().email("Invalid email").required("Enter Your Email"),
    mobile: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Enter Your Mobile Number"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .required("Enter Your Pasword"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Enter Your Confirm password"),
  });

  const handleImageChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setFieldValue("profileImage", file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add mock user data (replace with actual user data later)
  const userData = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    profileImage: "",
  };

  return (
    <Container>
      <div className="pt-10">
        <div className="max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Form Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  mobile: "",
                  password: "",
                  confirmPassword: "",
                  profileImage: null,
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                  console.log(values);
                  // Handle form submission here
                }}>
                {({ errors, touched, setFieldValue }) => (
                  <Form className="space-y-4">
                    {/* Profile Image */}
                    <div className="mb-4">
                      <div className="w-32 h-32 mx-auto mb-2">
                        <img
                          src={previewImage || "/default-avatar.png"}
                          alt="Profile"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e, setFieldValue)}
                        className="w-full"
                      />
                    </div>

                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Field
                          name="firstName"
                          type="text"
                          placeholder="First Name"
                          className="w-full p-2 border rounded"
                          onInput={(e) => {
                            // Remove any non-alphabetic characters
                            e.target.value = e.target.value.replace(
                              /[^A-Za-z]/g,
                              ""
                            );
                          }}
                        />
                        {errors.firstName && touched.firstName && (
                          <div className="text-red-500 text-sm">
                            {errors.firstName}
                          </div>
                        )}
                      </div>
                      <div>
                        <Field
                          name="lastName"
                          type="text"
                          placeholder="Last Name"
                          className="w-full p-2 border rounded"
                          onInput={(e) => {
                            // Remove any non-alphabetic characters
                            e.target.value = e.target.value.replace(
                              /[^A-Za-z]/g,
                              ""
                            );
                          }}
                        />
                        {errors.lastName && touched.lastName && (
                          <div className="text-red-500 text-sm">
                            {errors.lastName}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                      />
                      {errors.email && touched.email && (
                        <div className="text-red-500 text-sm">
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div>
                      <Field
                        name="mobile"
                        type="text"
                        placeholder="Mobile"
                        className="w-full p-2 border rounded"
                      />
                      {errors.mobile && touched.mobile && (
                        <div className="text-red-500 text-sm">
                          {errors.mobile}
                        </div>
                      )}
                    </div>

                    {/* Password Fields */}
                    <div className="relative">
                      <Field
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3">
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                      {errors.password && touched.password && (
                        <div className="text-red-500 text-sm">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="relative">
                      <Field
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        className="w-full p-2 border rounded"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-3">
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                      {errors.confirmPassword && touched.confirmPassword && (
                        <div className="text-red-500 text-sm">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                      Update Profile
                    </button>
                  </Form>
                )}
              </Formik>
            </div>

            {/* Profile Details Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6">Profile Details</h2>
              <div className="space-y-6">
                <div className="flex justify-center">
                  <img
                    src={userData.profileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <p className="text-gray-600 text-sm">Full Name</p>
                    <p className="font-medium">{`${userData.firstName} ${userData.lastName}`}</p>
                  </div>
                  <div className="border-b pb-3">
                    <p className="text-gray-600 text-sm">Email</p>
                    <p className="font-medium">{userData.email}</p>
                  </div>
                  <div className="border-b pb-3">
                    <p className="text-gray-600 text-sm">Mobile</p>
                    <p className="font-medium">{userData.mobile}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DashSettings;
