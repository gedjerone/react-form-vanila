import PropTypes from "prop-types";

export const AppInput = ({
  placeholder,
  text,
  type,
  elementId,
  formValue,
  setFormValue,
}) => {
  const handleChange = (event) => {
    setFormValue((prevState) => ({
      ...prevState,
      [elementId]: event.target.value,
    }));
  };

  return (
    <div>
      <label
        htmlFor={type}
        className={
          "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        }
      >
        {text}
      </label>
      <input
        type={type}
        name={elementId}
        id={elementId}
        value={formValue[elementId] ?? ""}
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
        placeholder={placeholder}
        required={true}
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
};

AppInput.propTypes = {
  elementId: PropTypes.string,
  setFormValue: PropTypes.func,
  validatorPipe: PropTypes.func,
  placeholder: PropTypes.string,
  text: PropTypes.string,
  formValue: PropTypes.any,
  type: PropTypes.string,
};
