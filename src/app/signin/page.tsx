import { Metadata } from "next";
import {LoginGoogleButton} from "../components/login-button";

export const metadata: Metadata = {
  title: "Sign In",
}




const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center  bg-gray-100">
      <div className=" bg-white w-96 mx-auto rounded-sm shadow p-8">
        <div className="text-4xl font-bold mb-1 ">Sign In </div>
        <p className="font-medium mb-5 text-grey-500">Sign In to your Account</p>
        <div className="py-4 text-center">
            <LoginGoogleButton />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
