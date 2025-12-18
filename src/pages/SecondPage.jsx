import { useDispatch, useSelector } from "react-redux";
import { nextStep } from "../States/UserSlice";

export default function PageTwo() {
  const dispatch = useDispatch();
  const step = useSelector(s => s.user.step);
  if (step !== 2) return null;

  return (
    <div>
      <h2>Second Page</h2>
      <button onClick={() => dispatch(nextStep())}>Get Started</button>
    </div>
  );
}