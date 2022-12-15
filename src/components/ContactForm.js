
import useInput from "../hooks/use-input";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";


function ContactForm() {
  //desctructuring the keys from the useInput return object
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: number,
    isValid: numberIsValid,
    hasError: numberInputHasError,
    valueChangeHandler: numberChangeHandler,
    blurHandler: numberBlurHandler,
    reset: resetNumberInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: message,
    isValid: messageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    blurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(
    (value) =>
      value.trim() !== "" && value.length < 50 && validateEmailRegex(value)
  );

  function validateEmailRegex(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  

  let formIsValid = false;
  if (nameIsValid && numberIsValid && messageIsValid && emailIsValid) {
    formIsValid = true;
  }

  const [formSubmitted, setFormSubmitted] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fl7suo6', 'template_23l2608', form.current, 'wYHSM4mbdAsi5WqgQ')
      .then((result) => {
        resetEmailInput();
        resetNameInput();
        resetNumberInput();
        resetMessageInput();
        setFormSubmitted(true)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <h4>Let&apos;s Get in Touch!</h4>
        <label for="name">Name:</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler}
        />
        {nameInputHasError && (
          <label className="error">Name must not be empty</label>
        )}
        <br />
        <label for="email">Email:</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailInputHasError && <label className="error">Email not valid</label>}
        <br />
        <label>Number:</label>
        <br />
        <input
          type="tel"
          id="number"
          name="number"
          value={number}
          onBlur={numberBlurHandler}
          onChange={numberChangeHandler}
        />
        {numberInputHasError && (
          <label className="error">Number must not be empty</label>
        )}
        <br />
        <label>Message:</label>
        <br />
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={message}
          onBlur={messageBlurHandler}
          onChange={messageChangeHandler}
        ></textarea>
        <br />
        {messageInputHasError && (
          <label className="error">Message must not be empty</label>
        )}
       <input type="submit" value="Send" disabled={!formIsValid}/>
      <br/>
      <div className="centered-text">
      {formSubmitted && <label className="success">Form submitted, Thank you!</label>}
      </div>
      </div>
    </form>
  );
}

export default ContactForm;
