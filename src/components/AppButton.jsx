import PropTypes from "prop-types";

export const AppButton = ({ isDisabled, formFilledRef }) => {
  return (
    <button
      ref={formFilledRef}
      disabled={isDisabled}
      type="submit"
      className={
        "w-full text-white bg-primary-600 hover:bg-primary-700 disabled:opacity-25 disabled:cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-300"
      }
    >
      Create an account
    </button>
  );
};

AppButton.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  formFilledRef: PropTypes.any.isRequired,
};
