import { useLocation } from "react-router-dom";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressBar() {
  const location = useLocation();
  
   
  const routeToStep = {
    "/": 1,
    "/page2": 2,
    "/page3": 3,
    "/page4": 4,
    "/page5": 5,
    "/page6": 6
  };
  
  const step = routeToStep[location.pathname] || 1;
  
  
  if (step < 3) return null;
  
  const startStep = 3;
  const endStep = 6;
  const totalSteps = endStep - startStep + 1;  
  const currentProgress = step - startStep;  
  const percentage = ((currentProgress + 1) / totalSteps) * 100;

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px 0" }}>
      <div style={{ width: "80px", height: "80px" }}>
        <CircularProgressbar
          value={percentage}
          text={`${currentProgress + 1}/4`}
          styles={{
            root: {},
            path: {
              stroke: "#FF6633",
              strokeLinecap: "round",
              transition: "stroke-dashoffset 0.5s ease 0s",
            },
            trail: {
              stroke: "#f0f0f0",
              strokeLinecap: "round",
            },
            text: {
              fill: "#FF6633",
              fontSize: "16px",
              fontWeight: "bold",
            },
          }}
        />
      </div>
    </div>
  );
}