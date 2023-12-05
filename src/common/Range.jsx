const Range = ({ weight, height, handleHeightChange, handleWeightChange }) => {
  return (
    <div className="flex flex-col  mx-auto gap-11">
      <div className="space-y-5">
        <p
          className={` transition-all duration-300 ${
            weight < 50 ? "text-xl" : weight > 100 ? "text-3xl" : "text-2xl"
          }`}
        >
          {weight}
        </p>
        <span>Enter your Weight</span>
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
        <span>Enter your Height</span>

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
