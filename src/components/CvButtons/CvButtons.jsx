import { useState } from "react";
import ButtonOriCv from "./ButtonOriCV";
import ButtonSumCv from "./ButtonSumCV";

const CvButtons = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="flex space-x-4">
      <ButtonOriCv
        isActive={activeButton === "coverLetter"}
        onClick={() => handleClick("coverLetter")}
      />
      <ButtonSumCv
        isActive={activeButton === "summarizedCV"}
        onClick={() => handleClick("summarizedCV")}
      />
    </div>
  );
};

export default CvButtons;
