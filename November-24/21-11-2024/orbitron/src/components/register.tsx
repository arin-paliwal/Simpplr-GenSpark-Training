import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { register } from "../redux/user-slice";
import { useDispatch } from "react-redux";

interface LoginForm {
  name: string;
  email: string;
  password: string;
  role: 1 | 2; // 1 for User, 2 for Admin
}

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState<LoginForm>({
    name: "",
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
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!loginForm.name || !loginForm.password) {
      toast.error("Please fill out all fields.");
      return;
    }
    setLoading(true);
    try {
      const checkUserExists = JSON.parse(localStorage.getItem("users") || "[]");
      const userExists = checkUserExists.find(
        (user: any) => user.email === loginForm.email
      );
      if (userExists) {
        toast.error("User already exists with this email.");
        setLoading(false);
        return;
      }
      const role = loginForm.role === 2 ? "admin" : "user";
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = {
        name: loginForm.name,
        email: loginForm.email,
        password: loginForm.password,
        role: role,
      };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      dispatch(register({ role: role as "admin" | "user" }));
      setTimeout(() => {
        navigate(role === "admin" ? "/admin-dashboard" : "/user-dashboard");
      }, 1000);
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
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
              responsibilities. I highly recommend it to anyone looking to stay
              organized and focused. &rdquo;
            </p>
          </blockquote>
        </div>
      </div>

      <div className="flex flex-col md:w-[50%] p-8">
        <button
          className="absolute top-2 right-2 rounded-md text-white cursor-pointer p-2 font-semibold bg-primary"
          onClick={() => navigate("/")}
        >
          Login
        </button>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Register your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Fill in the form below to create your account
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <input
                type="name"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-md p-2 focus:outline-none"
                value={loginForm.name}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, name: e.target.value })
                }
              />
            </div>
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

            <div className="flex items-center gap-2 justify-center">
              <button
                className={`flex justify-center items-center gap-2 p-2 w-[50%] focus:outline-none border-2 rounded-md ${
                  loginForm.role === 2
                    ? "bg-primary border-primary text-white"
                    : ""
                }`}
                onClick={() => setLoginForm({ ...loginForm, role: 2 })}
              >
                Admin
              </button>

              <button
                className={`flex justify-center items-center gap-2 p-2 w-[50%] focus:outline-none border-2 rounded-md ${
                  loginForm.role === 1
                    ? "bg-primary border-primary text-white"
                    : ""
                }`}
                onClick={() => setLoginForm({ ...loginForm, role: 1 })}
              >
                User
              </button>
            </div>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <span className="underline underline-offset-4 cursor-pointer hover:text-primary">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="underline underline-offset-4 cursor-pointer hover:text-primary">
              Privacy Policy
            </span>
            .
          </p>
          <div
            className="flex items-center gap-2 justify-center"
            onClick={handleSubmission}
          >
            <button className="flex justify-center items-center gap-2 bg-primary text-white rounded-md p-2 w-full focus:outline-none">
              Register
              {loading && <Loader className="animate-spin" size={18} />}
            </button>
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}
