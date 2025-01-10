import { LoginForm } from "@/components/Authentication/Login";
import axios from "axios";
import { useEffect, useState } from "react";


const LoginPage = () => {
  const [data, setData] = useState();

const sendData = async () => {
    try {
      const response = await fetch("http://192.168.0.123:4500/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "johndoe@example.com",
          password: "securepassword123",
        }),
      });
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
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
