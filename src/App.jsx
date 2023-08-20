import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { Loading } from "./components/Loading";

const App = () => {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? <Loading /> : <RoutesMain />}

      <ToastContainer theme="dark" autoClose={3 * 1000} />
    </>
  );
};

export default App;
