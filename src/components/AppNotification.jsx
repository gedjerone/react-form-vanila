import PropTypes from "prop-types";

export const AppNotification = ({
  isPassword,
  message,
  isDisplayed,
  setNotification,
}) => {
  const handleClick = () => {
    setNotification({
      message: "",
      isPassword: false,
      isDisplayed: false,
    });
  };

  return (
    <>
      <div
        id="notification"
        className={
          (!isDisplayed && "top-0 opacity-0 ") +
          "flex items-center w-full max-w-sm p-4 text-gray-500 rounded-lg shadow bg-white dark:text-gray-400 dark:bg-gray-800 absolute right-12 top-12 ease-in-out duration-300"
        }
        role="alert"
      >
        <div className="ms-3 text-sm font-normal max-w-xs ease-in-out duration-300 delay-300">
          {isPassword ? (
            <>
              <div>{message}</div>
              <ul>
                <li>Has minimum 8 characters in length;</li>
                <li>At least one uppercase English letter;</li>
                <li>At least one lowercase English letter;</li>
                <li>At least one digit;</li>
                <li>At least one special character (#?!@$%^&*-);</li>
              </ul>
            </>
          ) : (
            <div>{message}</div>
          )}
        </div>
        <button
          type="button"
          className={
            (!isDisplayed && "hidden ") +
            " absolute right-4 top-4 -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          }
          data-dismiss-target="#toast-warning"
          aria-label="Close"
          onClick={() => handleClick()}
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

AppNotification.propTypes = {
  isPassword: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  isDisplayed: PropTypes.bool.isRequired,
  setNotification: PropTypes.func.isRequired,
};
