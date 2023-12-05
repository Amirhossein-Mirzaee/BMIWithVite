import { DietIcon, HeightIcon } from "../assets/icons/icons";

const Range = ({ weight, height, handleHeightChange, handleWeightChange }) => {
  return (
    <div className="flex flex-col  mx-auto gap-11">
      <div className="space-y-5">
        <div className="grid sm:grid-cols-3 items-center justify-items-center xs:grid-cols-1 space-y-3">
          <p
            className={` transition-all duration-300 ${
              weight < 50 ? "text-xl" : weight > 100 ? "text-3xl" : "text-2xl"
            }`}
          >
            {weight}
          </p>
          <span
            className={`transition-all duration-300 ${
              weight < 50
                ? "text-black/70"
                : weight >= 50 && weight <= 100
                ? "text-green-600 "
                : "text-red-600"
            }`}
          >
            Enter your Weight{" "}
          </span>
          <span className="w-full max-w-fit mx-auto">
            <DietIcon weight={weight} />
          </span>
        </div>
        <input
          className=""
          onChange={handleWeightChange}
          type="range"
          min="20"
          max="200"
          value={weight}
          id="range"
        />
      </div>

      <div className="space-y-5">
        <div className="grid sm:grid-cols-3 items-center justify-items-center xs:grid-cols-1 space-y-3">
          <p
            className={` transition-all duration-300 ${
              height < 150
                ? "text-xl"
                : height > 150
                ? "text-3xl"
                : height > 200
                ? "text-4xl"
                : "font-bold"
            }`}
          >
            {height}
          </p>
          <span
            className={`transition-all duration-300 ${
              height < 150
                ? "text-black/70"
                : height >= 150 && height <= 200
                ? "text-green-600 "
                : "text-red-600"
            }`}
          >
            Enter your Height
          </span>
          <span className="w-full max-w-fit mx-auto">
            <HeightIcon height={height} />
          </span>
        </div>

        <input
          className=""
          type="range"
          min="100"
          max="250"
          value={height}
          id="range"
          onChange={handleHeightChange}
        />
      </div>
    </div>
  );
};

export default Range;
