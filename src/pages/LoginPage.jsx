// import { LoginForm } from "@/components/Authentication/Login";
// import axios from "axios";
// import { useEffect, useState } from "react";


// const LoginPage = () => {
//   const [data, setData] = useState();

// const sendData = async () => {
//     try {
//       const response = await fetch("http://192.168.0.123:4500/api/v1/user/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: "johndoe@example.com",
//           password: "securepassword123",
//         }),
//       });
//      const result = await response.json();
//       console.log(result);
//     } catch (error) {
//       console.log("Failed to send", error);
//     }
//   };

//   useEffect(() => {
//     sendData();
//   }, []);

// return (
//     <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
//       <div className="w-full max-w-sm">
//         <LoginForm />
//       </div>
//     </div>
//   );
// };
// export default LoginPage;
import { LoginForm } from "@/components/Authentication/Login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://192.168.0.123:4500/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        console.log("Login successful:", result);
        navigate("/dashboard"); // Redirect to dashboard on success
      } else {
        console.log("Login failed:", result);
      }
    } catch (error) {
      console.log("Failed to send", error);
    }
  };

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm
          onSubmit={handleSubmit}
          onInputChange={handleInputChange}
          formData={formData}
        />
      </div>
    </div>
  );
};

export default LoginPage;
