import { SignupInput } from "@100xdevs/medium-common";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
const Auth = ({ type }: { type: "Signin" | "Signup" }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  async function sendrequest() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/user/${type === "Signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    const value = localStorage.getItem("token"); //addverification
    // localStorage.setItem("name", postInputs.name || "");
    if (value) {
      navigate("/blog");
    }
  }, []);

  return (
    <div className="flex h-screen flex-col justify-center">
      <div className="flex justify-center">
        <div className="">
          <div className="text-3xl px-10 font-bold">
            {type === "Signup" ? "Create an acount" : "Login to blog"}
          </div>
          {type === "Signup" ? (
            <div className="font-medium px-10 mt-1 text-slate-400">
              Already have an account?
              <span className="pl-2 underline">
                <Link to={"/signin"}>Login</Link>
              </span>
            </div>
          ) : (
            <div></div>
          )}
          {type === "Signup" ? (
            <LabelledInput
              label="Username"
              placeholder="username"
              onchange={(e) =>
                setPostInputs((c) => ({
                  ...c,
                  name: e.target.value,
                }))
              }
            />
          ) : (
            <div></div>
          )}

          <LabelledInput
            label="Email"
            placeholder="E@mail.com"
            onchange={(e) =>
              setPostInputs({
                ...postInputs,
                username: e.target.value,
              })
            }
          />

          <LabelledInput
            label="password"
            placeholder=""
            onchange={(e) =>
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              })
            }
            type="password"
          />
          <div className="mt-3">
            {/* <button
              onClick={sendrequest}
              type="button"
              className="text-white w-full mt-3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "Signin" ? "Sign in" : "Sign up"}
            </button> */}
            <button
              onClick={sendrequest}
              type="button"
              className="text-white w-full mt-3 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 flex items-center justify-center"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <svg
                  className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.59C100 78.2 77.6 100.6 50 100.6C22.4 100.6 0 78.2 0 50.59C0 22.98 22.4 0.59 50 0.59C77.6 0.59 100 22.98 100 50.59ZM9.081 50.59C9.081 74.2 26.4 91.6 50 91.6C73.6 91.6 90.9 74.2 90.9 50.59C90.9 26.98 73.6 9.59 50 9.59C26.4 9.59 9.081 26.98 9.081 50.59Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.04C96.393 38.36 97.8624 35.84 97.0079 33.42C95.2932 28.63 92.871 24.17 89.8167 20.23C85.9962 15.03 80.9436 10.94 75.0013 8.44C69.059 5.94 62.4446 5.09 55.9665 5.96C53.4516 6.32 51.9969 8.85 52.6763 11.28C53.3557 13.7 55.8578 15.13 58.3601 14.83C63.8041 14.18 69.2898 14.97 74.2395 17.15C79.1892 19.33 83.4293 22.8 86.5636 27.21C88.7991 30.2 90.5081 33.58 91.646 37.2C92.33 39.62 94.682 40.31 97.0079 39.04H93.9676Z"
                    fill="currentFill"
                  />
                </svg>
              ) : null}
              {type === "Signin" ? "Sign in" : "Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInput {
  label: string;
  placeholder: string;
  onchange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({ label, placeholder, onchange, type }: LabelledInput) {
  return (
    <div>
      <div>
        <label className="block max-w-md mb-2 mt-3 text-sm font-medium text-gray-900">
          {label}
        </label>
        <input
          onChange={onchange}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}

export default Auth;
