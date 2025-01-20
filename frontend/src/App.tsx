import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin, Signup, Blog, Blogs } from "./pages/Extender";
import Appbar from "./components/Appbar";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
