import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin, Signup, Blog } from "./pages/Extender";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Blog/:id" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
