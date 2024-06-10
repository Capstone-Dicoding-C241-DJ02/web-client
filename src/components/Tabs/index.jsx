import TabsOriginalCV from './TabsOriginalCV';
import TabsSummarizedCV from './TabsSummarizedCV';

import Types from 'prop-types';

const Tabs = ({tab = 'summarized', originalCv, candidate}) => {
  return (
    <div className="rounded bg-white shadow-primary w-full h-[600px] md:h-full p-2 ">
      {tab === 'original' ? (
        <TabsOriginalCV cv={originalCv} />
      ) : (
        <TabsSummarizedCV candidate={candidate} />
      )}
    </div>
  );
};

Tabs.propTypes = {
  tab: Types.string,
  originalCv: Types.string.isRequired,
  candidate: Types.object.isRequired,
};

export default Tabs;
