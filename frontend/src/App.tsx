import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin, Signup, Blog } from "./pages/Extender";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
