import { useSelector } from "react-redux";

export default function PageFive() {
  const u = useSelector(s => s.user);
  if (u.step !== 5) return null;

  return (
    <div>
      <h2>Final Summary</h2>
      <p>I am {u.gender} of {u.age} years old.</p>
      <p>My name is {u.firstName}.</p>
      {u.maritalStatus === "married" && <p>I am married to {u.spouseName}.</p>}
    </div>
  );
}