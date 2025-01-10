import { LoginForm } from "@/components/Authentication/Login";
import { RegisterForm } from "@/components/Authentication/Register";
import axios from "axios";
import { useEffect, useState } from "react";

const RegisterPage = () => {
  const [data, setData] = useState();

  const sendData = async () => {
    try {
      const response = await fetch(
        "http://192.168.0.123:4500/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: "alka gupta",
            email: "alkagupta@example.com",
            password: "securepassword123",
          }),
        }
      );

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log("Failed to send", error);
    }
  };

  useEffect(() => {
    sendData();
  }, []);

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
};
export default RegisterPage;
