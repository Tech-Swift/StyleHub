import { useEffect } from "react";
import api from "./api/client"

function App() {
  useEffect(() => {
    api.post("/test",
      { message: "Hello from central API, my second test and Axios 🚀" })
      .then(res => {
        console.log("Saved:", res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>StyleHub</h1>
    </div>
  );
}

export default App;