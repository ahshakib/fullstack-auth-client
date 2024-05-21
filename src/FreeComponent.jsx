import axios from "axios";
import { useEffect, useState } from "react";

function FreeComponent() {
  const [message, setMassage] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://ahs-node-auth-app.onrender.com/free-endpoint",
    };
    axios(configuration)
      .then((result) => {
        setMassage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">Free component</h1>
      <h3 className="text-center text-danger">{message}</h3>
    </div>
  );
}

export default FreeComponent;
