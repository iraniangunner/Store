import { useState } from "react";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

  const inputElement = useRef(null);

  const [formValues, setFormvalues] = useState({
    userName: "",
    passWord: "",
    emailAddress: "",
    passConfirmation: "",
  });

  const [finalValues, setFinalValues] = useState({
    userName: "",
    passWord: "",
    emailAddress: "",
    passConfirmation: "",
  });

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const clickHandler = (e) => {
    setFormvalues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalValues({
      ...finalValues,
      ...formValues,
    });
 
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 bg-[#f6f8fa] dark:bg-gray-300 mx-auto my-8 p-5 rounded-[6px] border border-solid border-[hsla(210,18%,87%,1)]"
      >
        <div className="w-full mb-[16px]">
          <label
            htmlFor="email"
            className="block text-[14px] mb-[8px] font-[400] dark:text-black"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            onChange={clickHandler}
            ref={inputElement}
            name="userName"
            className="block w-full bg-white px-[12px] py-[5px] text-[#24292f] text-[14px] border border-solid border-[#d0d7de] focus:outline-none focus:border-[#0969da] focus:shadow-inner-[0_0_0_32px_#ffffff] focus:shadow-[0_0_0_3px_rgba(9,105,218,0.3)] rounded-lg"
          />
        </div>

        <div className="w-full mb-[16px]">
          <label
            htmlFor="name"
            className="block text-[14px] mb-[8px] font-[400] dark:text-black"
          >
            Username
          </label>
          <input
            type="text"
            id="name"
            onChange={clickHandler}
            name="emailAddress"
            className="block w-full bg-white px-[12px] py-[5px] text-[#24292f] text-[14px] border border-solid border-[#d0d7de] focus:outline-none focus:border-[#0969da] focus:shadow-inner-[0_0_0_32px_#ffffff] focus:shadow-[0_0_0_3px_rgba(9,105,218,0.3)] rounded-lg"
          />
        </div>

        <div className="w-full mb-[16px]">
          <label
            htmlFor="password"
            className="block text-[14px] mb-[8px] font-[400] dark:text-black"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={clickHandler}
            name="passWord"
            className="block w-full bg-white px-[12px] py-[5px] text-[#24292f] text-[14px] border border-solid border-[#d0d7de] focus:outline-none focus:border-[#0969da] focus:shadow-inner-[0_0_0_32px_#ffffff] focus:shadow-[0_0_0_3px_rgba(9,105,218,0.3)] rounded-lg"
          />
        </div>

        <div className="w-full mb-[16px]">
          <label
            htmlFor="confirmation"
            className="block text-[14px] mb-[8px] font-[400] dark:text-black"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirmation"
            onChange={clickHandler}
            name="passConfirmation"
            className="block w-full bg-white px-[12px] py-[5px] text-[#24292f] text-[14px] border border-solid border-[#d0d7de] focus:outline-none focus:border-[#0969da] focus:shadow-inner-[0_0_0_32px_#ffffff] focus:shadow-[0_0_0_3px_rgba(9,105,218,0.3)] rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#2da44e] hover:bg-[#2c974b] text-white font-bold py-2 px-4 mt-2 cursor-pointer rounded-[6px]"
        >
          Sign up
        </button>
      </form>

      <div className="flex justify-between flex-wrap w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 mx-auto bg-[#f6f8fa] dark:bg-gray-300 px-[16px] py-[16px] border border-solid border-[#d0d7de] rounded-[6px] text-[14px]">
        <span className="dark:text-black">Already have an account?</span>
        <Link to="/sign-in" className="text-[#0969da]">
          Sign in
        </Link>
      </div>
      <div className="text-center h-24">
        {finalValues.userName &&
          finalValues.emailAddress &&
          finalValues.passWord &&
          finalValues.passConfirmation && (
            <>
              <p>username : {finalValues.userName}</p>
              <p>email : {finalValues.emailAddress}</p>
              <p>password : {finalValues.passWord}</p>
              <p>passwordConfirm : {finalValues.passConfirmation}</p>
            </>
          )}
      </div>
    </>
  );
};

export default SignUp;
