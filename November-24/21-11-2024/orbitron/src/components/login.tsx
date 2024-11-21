import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/user-slice";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    role: 1,
  });

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmission = async () => {
    if (!validateEmail(loginForm.email)) {
      return;
    }
    setLoading(true);
    try {
      const isExist = JSON.parse(localStorage.getItem("users") || "[]");
      const userExists = isExist.find(
        (user: any) => user.email === loginForm.email
      );
      if (!userExists) {
        toast.error("User does not exist with this email.");
        setLoading(false);
        return;
      }
      if (userExists.password !== loginForm.password) {
        toast.error("Incorrect password.");
        setLoading(false);
        return;
      }
      dispatch(login({ role: userExists.role }));
      toast.success("Logged in successfully.");
      setTimeout(() => {
        navigate(
          userExists.role === "admin" ? "/admin-dashboard" : "/user-dashboard"
        );
      }, 1000);
    } catch (error) {
      console.error("Error during login:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster />
      <div className="flex h-screen flex-col md:flex-row items-center justify-center">
        <div className="md:w-[50%] login_image bg-black relative h-screen flex-col bg-muted text-white dark:border-r flex p-8">
          <div className="login_image absolute inset-0" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Orbitron - A Role Based Activity Tracker
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo; This application has been a game-changer for my
                productivity and task management. Since I started using it, I've
                noticed a significant improvement in how efficiently I handle my
                responsibilities. I highly recommend it to anyone looking to
                stay organized and focused. &rdquo;
              </p>
            </blockquote>
          </div>
        </div>
        <div className="flex flex-col md:w-[50%] p-8">
          <button
            className="absolute top-2 right-2 rounded-md text-white cursor-pointer p-2 font-semibold bg-primary"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Log-in to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to access your account
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none"
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, email: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-1">
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                />
              </div>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                to="/support/terms-and-conditions"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/support/privacy-policy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <div
              className="flex items-center gap-2 justify-center"
              onClick={handleSubmission}
            >
              <button className="flex justify-center items-center gap-2 bg-primary text-white rounded-md p-2 w-full focus:outline-none">
                Continue
                {loading && <Loader className="animate-spin" size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
