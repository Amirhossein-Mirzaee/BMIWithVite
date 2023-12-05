import { useState } from "react";
import Button from "./common/Button";
import Range from "./common/Range";
import { Toaster, toast } from "react-hot-toast";

const App = () => {
  const [weight, setWeight] = useState(20);
  const [height, setHeight] = useState(100);

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    console.log(bmi);
  };

  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

  const handleClick = () => {
    if (bmi < 18.5) {
      toast.error("Your BMI is under normal level" + " " + bmi);
    } else if (bmi >= 18.5 && bmi <= 24) {
      toast.success("Your BMI is on normal level" + " " + bmi);
    } else if (bmi >= 25 && bmi < 29.9) {
      toast.error("Your BMI is higher than normal level" + " " + bmi);
    } else {
      toast.error("You are too fat now please do some thing" + " " + bmi);
    }
    console.log(bmi);
  };

  return (
    <div className="transition-all duration-700 ">
      <div>
        <Toaster />
      </div>
      <div className="max-w-[2000px] mx-auto flex items-center justify-center  overflow-y-hidden xs:px-5 xs:mt-28 transition-all ">
        <div className="bg-white/80 shadow-xl w-full max-w-4xl p-9 rounded-xl ">
          <p className="text-center font-semibold text-3xl mt-3 mb-11">BMI Generator</p>
          <Range
            weight={weight}
            height={height}
            handleHeightChange={handleHeightChange}
            handleWeightChange={handleWeightChange}
          />
          <Button handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
