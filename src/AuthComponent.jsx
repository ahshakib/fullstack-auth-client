import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { Button } from "react-bootstrap";

const cookies = new Cookies();

function AuthComponent() {
  const [message, setMessage] = useState("");
  const token = cookies.get("Token");

  useEffect(() => {
    const fetchData = async () => {
      if (!token) {
        setMessage("No token found, please login.");
        return;
      }

      const configuration = {
        method: "get",
        url: "https://ahs-node-auth-app.onrender.com/auth-endpoint",
        headers: {
          Authorization: `Bearer ${token}`
        }
      };

      try {
        const result = await axios(configuration);
        setMessage(result.data.message);
      } catch (error) {
        setMessage("An error occurred while fetching data.");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [token]);

  const logout = () => {
    cookies.remove("Token");
    window.location.href = "/";
  };

  return (
    <div className="text-center">
      <h1 className="text-center">This is auth component</h1>
      <h3 className="text-center text-danger">{message}</h3>
      <Button type="button" variant="danger" onClick={logout}>Logout</Button>
    </div>
  );
}

export default AuthComponent;
