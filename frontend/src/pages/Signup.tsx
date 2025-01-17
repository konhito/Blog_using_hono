import Qoute from "../components/Qoute";
import Auth from "../components/Auth";
const Signup = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Auth type="Signup" />
      </div>
      <div className="invisible lg:visible">
        <Qoute />
      </div>
    </div>
  );
};
export default Signup;
