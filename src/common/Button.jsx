const Button = ({ handleClick }) => {
  return (
    <div className="flex justify-center items-center mt-16 bg-red-500 max-w-fit mx-auto py-3 px-6 rounded-lg hover:bg-red-600 transition-all duration-300 cursor-pointer">
      <button
        onClick={handleClick}
        className="text-white font-bold text-xl"
      >
        Calculate
      </button>
    </div>
  );
};

export default Button;
