import { useState, useEffect } from "react";
import { auth } from "../firebase/fire_config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
      } else {
        setUserData(null);
      }
    });
    return () => listen();
  }, []);

  const logOut = () => {
    console.log(" Need to implement ");

    signOut(auth)
      .then(() => {
        console.log("Sign out success.");
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.code);
      });
  };

  return (
    <div className="w-full h-screen flex flex-col gap-2 justify-center items-center font-sans font-extrabold text-2xl">
      {userData ? (
        <p>You are logged in as : {userData.email}</p>
      ) : (
        <>
          <p>You are not Logined ..!</p>
          <Link to={"/login"}>
            <button className=" text-lg text-black font-normal border-2 border-black w-20 h-10 rounded-lg hover:bg-black hover:text-white transition-all duration-300 ">
              Login
            </button>
          </Link>
        </>
      )}

      {userData && (
        <button
          onClick={logOut}
          className=" text-lg text-black font-normal border-2 border-black w-20 h-10 rounded-lg hover:bg-black hover:text-white transition-all duration-300 "
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Home;
