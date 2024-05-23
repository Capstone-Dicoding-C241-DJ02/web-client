import TabsOriginalCV from './TabsOriginalCV';
import TabsSummarizedCV from './TabsSummarizedCV';

import Types from 'prop-types';

const Tabs = ({tab = 'summarized', originalCv}) => {
  return (
    <div className="rounded bg-white shadow-primary w-full h-[600px] md:h-full p-2 ">
      {tab === 'original' ? (
        <TabsOriginalCV cv={originalCv} />
      ) : (
        <TabsSummarizedCV />
      )}
    </div>
  );
};

Tabs.propTypes = {
  tab: Types.string,
  originalCv: Types.string.isRequired,
};

export default Tabs;
