import Types from "prop-types";

const InputText = ({ id, type, label, placeholder, ...rest }) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="absolute bg-white px-2 -top-3 left-3">
        {label}
      </label>
      <input
        className="px-2 py-3 border-2 w-full border-primary-blue rounded"
        type={type}
        placeholder={placeholder}
        id={id}
        {...rest}
      />
    </div>
  );
};

InputText.propTypes = {
  id: Types.string.isRequired,
  label: Types.string.isRequired,
  type: Types.string,
  placeholder: Types.string,
};

export default InputText;
