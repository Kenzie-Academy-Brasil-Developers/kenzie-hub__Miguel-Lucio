import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes";

const App = () => {
  return (
    <>
      <RoutesMain />
      <ToastContainer theme="dark" autoClose={3 * 1000} />
    </>
  );
};

export default App;
