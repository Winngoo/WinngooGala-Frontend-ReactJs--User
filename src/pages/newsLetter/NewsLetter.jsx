import React, { useEffect, useState } from "react"; // Import useEffect
import Container from "../../components/container/Container";
import { toast } from "react-hot-toast";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import emailjs from "emailjs-com"; // Import EmailJS
import {
  useGetFirstName,
  useGetLastName,
} from "../../components/customHook/customHook";

const NewsLetter = () => {
  const [email, setemail] = useState("");

  const fName = useGetFirstName();
  const lName = useGetLastName();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email!");
      return;
    }
    const templateParams = {
      from_name: fName && lName ? fName + lName : "Guest User...!",
      from_email: email,
      subject: "",
      message: "",
    };
    // const form = e.target;
    // const email = form.email.value;

    // Use EmailJS to send the email
    emailjs
      .send(
        "service_g1insga", // Replace with your EmailJS service ID
        "template_e7ou4th", // Replace with your EmailJS template ID
        templateParams, // Email data
        "0qmj3B4kXlx14_9iv" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success(
            "Thank you for subscribing to Winngoo Gala updates! 😊"
          );
          setemail("");
          // form.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Subscription failed. Please try again.");
        }
      );
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Allow the animations to trigger again
    });
  }, []);

  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-[45vh] bg-fixed"
      style={{
        backgroundImage: `url('https://i.ibb.co/b1cnRPs/getty-479977238-253066.jpg')`,
      }}>
      <div className="bg-black bg-opacity-60 h-full p-10">
        <div className="flex flex-col md:flex-row md:gap-6">
          <p
            className="uppercase lg:text-2xl font-semibold text-slate-300 text-center flex justify-center items-center"
            data-aos="fade-up" // AOS effect
          >
            Subscribe to the Winngoo Gala Newsletter for Exclusive Insights and
            Event Highlights!
          </p>

          <div className="mt-5 md:mt-20 lg:mt-10" data-aos="fade-up">
            {/* AOS effect applied here */}
            <form onSubmit={handleSubmit} className="flex justify-center pb-5">
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Your email address"
                className="border p-3 w-72"
                required
              />
              <input
                type="submit"
                value="Subscribe"
                className="bg-primary text-white p-3 rounded-r-lg cursor-pointer"
              />
            </form>
            <p
              className="text-white text-center px-10 hidden lg:flex"
              data-aos="fade-up">
              Your personal data will be used by Winngoo Gala to send you event
              updates, exclusive offers, and tailored experiences. We value your
              privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
