import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import PostList from "./pages/PostList.tsx";
import PostCreate from "./pages/PostCreate.tsx";
import PostEdit from "./pages/PostEdit.tsx";
import PostView from "./pages/PostShow.tsx";
import { Toaster } from "react-hot-toast";
import Register from "./pages/Auth/Register.tsx";
import Login from "./pages/Auth/Login.tsx";
import Dashboard from "./pages/Auth/Dashboard.tsx";
import Profile from "./pages/Auth/Profile.tsx";
// import { useEffect, useState } from "react";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const location = useLocation();
  // useEffect(() => {
  //   const auth = localStorage.getItem("isAuthenticated");
  //   setIsAuthenticated(auth === "true");
  // }, [location]);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        
        {/* check if naka login ba or hindi */}
        {/* {isAuthenticated && (
          <> */}
            <Route path="/" element={<PostList />}></Route>
            <Route path="/create" element={<PostCreate />}></Route>
            <Route path="/edit/:id" element={<PostEdit />}></Route>
            <Route path="/view/:id" element={<PostView />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          {/* </>
        )}*/}
      </Routes> 
      {/* <PostList /> */}
      {/* ✅ This must exist somewhere visible */}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
