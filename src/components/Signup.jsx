

const Signup = () => {

    const signUp = ()=> {
        console.log(" Need to impliment ");
    }

  return (
    <>

        <div className="w-full h-screen flex justify-center items-center font-sans ">
            <div className="w-1/2 lg:w-1/4 h-1/2 rounded-3xl p-4 bg-blue-300 flex justify-center items-center flex-col gap-3" >
                <input type="text" placeholder="Name"
                className="rounded-md h-10 px-3 w-[80%] focus:outline-none"
                />
                <input type="email" placeholder="Email"
                className="rounded-md h-10 px-3 w-[80%] focus:outline-none"
                />
                <input type="password" placeholder="Password"
                className="rounded-md h-10 px-3 w-[80%] focus:outline-none"
                />
                <button
                onClick={ signUp }
                 className="text-white border-2 border-white rounded-lg w-24 h-10 hover:bg-white hover:text-blue-300 transition-all duration-300 mt-4">
                    Sign Up
                </button>
            </div>

        </div>

    </>
  )
}

export default Signup