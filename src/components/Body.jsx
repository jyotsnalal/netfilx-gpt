import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
};

export default Body;
