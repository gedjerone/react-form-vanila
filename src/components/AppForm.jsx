import { AppInput } from "./AppInput.jsx";
import { AppButton } from "./AppButton.jsx";
import { useEffect, useRef, useState } from "react";
import { AppNotification } from "./AppNotification.jsx";
import { validate } from "../validate.js";

export const AppForm = ({}) => {
  const formFilledRef = useRef(null);
  const timerDebounceRef = useRef();

  const [notification, setNotification] = useState({
    message: "",
    isPassword: false,
    isDisplayed: false,
  });
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [isDisabled, setDisabled] = useState(true);

  const validationPipe = () => {
    const validation = validate(formValue);
    if (!validation?.message) {
      setDisabled(false);
      setTimeout(() => formFilledRef.current.focus());
      setNotification({
        message: "",
        isPassword: false,
        isDisplayed: false,
      });
    } else {
      !isDisabled && setDisabled(true);
      setNotification({
        message: validation?.message,
        isPassword: validation?.isPassword,
        isDisplayed: true,
      });
    }
  };

  useEffect(() => {
    if (timerDebounceRef.current) {
      clearTimeout(timerDebounceRef.current);
    }
    if (
      formValue.email !== "" ||
      formValue.password !== "" ||
      formValue.repeatPassword !== ""
    ) {
      timerDebounceRef.current = setTimeout(() => {
        validationPipe();
      }, 500);
    }
  }, [formValue]);

  const signUp = (event) => {
    event.preventDefault();
    console.table(formValue);
  };

  return (
    <>
      <form
        className={"space-y-4 md:space-y-6"}
        action="#"
        onSubmit={(event) => signUp(event)}
      >
        <AppInput
          placeholder="name@email.com"
          text="Your email"
          type="email"
          elementId="email"
          formValue={formValue}
          setFormValue={setFormValue}
        />
        <AppInput
          placeholder="••••••••"
          text="Password"
          type="password"
          elementId="password"
          formValue={formValue}
          setFormValue={setFormValue}
        />
        <AppInput
          placeholder="••••••••"
          text="Confirm password"
          type="password"
          elementId="repeatPassword"
          formValue={formValue}
          setFormValue={setFormValue}
        />

        <AppButton
          isDisabled={isDisabled}
          formFilledRef={formFilledRef}
          handleClick={signUp}
        />
        <AppNotification
          message={notification.message}
          isPassword={notification.isPassword}
          isDisplayed={notification.isDisplayed}
          setNotification={setNotification}
        />
      </form>
    </>
  );
};
