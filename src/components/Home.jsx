import { useState, useEffect } from "react";
import { app } from "../firebase/fire_config";

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const unSubscribe = app.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserData(user.email);
      } else {
        setUserData(null);
      }
    });
    return () => unSubscribe();
  }, []);

  const logOut = () => {
    console.log(" Need to implement ");
  };

  return (
    <div className="w-full h-screen flex flex-col gap-2 justify-center items-center font-sans font-extrabold text-2xl">
      {userData ? (
        <p>You are logged in as : {userData}</p>
      ) : (
        <p>You are not Logined ..!</p>
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
