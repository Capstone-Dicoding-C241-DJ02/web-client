import { useState } from "react";
import ButtonOriCv from "./ButtonOriCV";
import ButtonSumCv from "./ButtonSumCV";

const CvButtons = () => {
  const [activeButton, setActiveButton] = useState("summarizedCV");

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="flex gap-4 justify-between md:justify-center">
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
