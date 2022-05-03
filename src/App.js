import { ToastContainer } from "react-toastify";
import AppRouter from "./app-router/AppRouter";
import "./App.css";
import AuthContextProvider from "./contexts/AutContext";
import BlogContextProvider from "./contexts/BlogContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <BlogContextProvider>
          <AppRouter />
          <ToastContainer />
        </BlogContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
