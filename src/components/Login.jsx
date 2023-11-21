import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/fire_config";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const logIn = (event) => {
    console.log(" Working ");

    event.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredintial) => {
        console.log(userCredintial);
        navigateTo('/');
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.code);
      });
  };

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center font-sans ">
        <div className="sd:w-4/5 md:w-2/5 lg:w-1/4 h-1/2 rounded-3xl p-4 bg-blue-300 flex justify-center items-center flex-col gap-3">
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
            className="rounded-md h-10 px-3 w-[80%]"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
            className="rounded-md h-10 px-3 w-[80%]"
          />
          <button
            onClick={logIn}
            className="text-white border-2 border-white rounded-lg w-24 h-10 hover:bg-white hover:text-blue-300 transition-all duration-300 mt-4"
          >
            Log In
          </button>
          <Link to={'/signup'} className="text-white underline">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
