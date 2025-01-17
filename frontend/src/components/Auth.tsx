import { SignupInput } from "@100xdevs/medium-common";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const Auth = ({ type }: { type: "Signin" | "Signup" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });
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

          <LabelledInput
            label="Username"
            placeholder="Name"
            onchange={(e) =>
              setPostInputs((c) => ({
                ...c,
                name: e.target.value,
              }))
            }
          />
          {type === "Signup" ? (
            <LabelledInput
              label="Email"
              placeholder="E@mail.com"
              onchange={(e) =>
                setPostInputs({
                  ...postInputs,
                  name: e.target.value,
                })
              }
            />
          ) : (
            <div></div>
          )}

          <LabelledInput
            label="password"
            placeholder=""
            onchange={(e) =>
              setPostInputs({
                ...postInputs,
                name: e.target.value,
              })
            }
            type="password"
          />
          <div className="mt-3">
            <button
              type="button"
              className="text-white w-full  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
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
