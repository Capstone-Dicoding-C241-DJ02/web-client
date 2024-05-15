import { useState } from "react";

const ButtonComponent = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="flex space-x-4">
      <button
        className={`px-4 py-2 rounded-md shadow-primary ${
          activeButton === "coverLetter"
            ? "bg-primary-blue text-white"
            : "bg-white text-black"
        }`}
        onClick={() => handleClick("coverLetter")}
      >
        Cover Letter & CV
      </button>
      <button
        className={`px-4 py-2 rounded-md shadow-primary ${
          activeButton === "summarizedCV"
            ? "bg-primary-blue text-white"
            : "bg-white text-black"
        }`}
        onClick={() => handleClick("summarizedCV")}
      >
        Summarized CV
      </button>
    </div>
  );
};

export default ButtonComponent;
