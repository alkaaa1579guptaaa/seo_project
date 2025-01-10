import { useEffect } from "react";
import { useHistory } from "react-router-dom"; // or 'next/router' for Next.js

const Logout = () => {
  const history = useHistory(); // For React Router, use useRouter() if using Next.js

  const handleLogout = async () => {
    try {
      // Assuming the logout endpoint is at /api/v1/user/logout
      const response = await fetch("http://192.168.0.123:4500/api/v1/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Send cookies with request if necessary
      });

      if (!response.ok) {
        throw new Error(`Logout failed: ${response.statusText}`);
      }

      // Clear any stored user data (e.g., tokens)
      localStorage.removeItem("userToken"); // Adjust this according to your storage method
      localStorage.removeItem("userData");

      // Optionally redirect to the login page or home page
      history.push("/login"); // or Router.push('/login') for Next.js
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-6 md:p-10">
      <div className="text-center">
        <p>Logging out...</p>
      </div>
    </div>
  );
};

export default Logout;
