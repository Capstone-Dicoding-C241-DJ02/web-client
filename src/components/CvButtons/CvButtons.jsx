import {useState} from 'react';
import ButtonOriCv from './ButtonOriCV';
import ButtonSumCv from './ButtonSumCV';
import Types from 'prop-types';

const CvButtons = ({onChangeTab}) => {
  const [activeButton, setActiveButton] = useState('summarized');

  const handleClick = (button) => {
    setActiveButton(button);
    onChangeTab(button);
  };

  return (
    <div className="flex gap-4 justify-between md:justify-center">
      <ButtonSumCv
        isActive={activeButton === 'summarized'}
        onClick={() => handleClick('summarized')}
      />
      <ButtonOriCv
        isActive={activeButton === 'original'}
        onClick={() => handleClick('original')}
      />
    </div>
  );
};

CvButtons.propTypes = {
  onChangeTab: Types.func,
};

export default CvButtons;
