import {
  BtnBold,
  BtnItalic,
  Editor,
  EditorProvider,
  Toolbar,
  BtnStyles,
  BtnClearFormatting,
} from 'react-simple-wysiwyg';
import PropTypes from 'prop-types';

const DescEditor = ({onChange, value}) => {
  return (
    <EditorProvider>
      <Editor
        value={value}
        onChange={(e) => onChange(e.target.value)}
        containerProps={{
          style: {
            height: 320,
            borderColor: '#2E3F50',
            borderWidth: '2px',
          },
        }}
        className="px-2 py-3 border-2 w-full border-primary-blue rounded"
      >
        <Toolbar style={{paddingTop: '1rem'}}>
          <BtnBold />
          <BtnItalic />
          <BtnStyles />
          <BtnClearFormatting />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
};

DescEditor.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default DescEditor;
