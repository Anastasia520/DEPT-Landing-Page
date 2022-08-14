import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContactForm } from "redux/actions/contactForm-action";

export default function useContactForm() {
  const dispatch = useDispatch();
  const contactFormRequested = useSelector(
    (state) => state.contact.contactFormRequested
  );
  const contactFormRequestedLoading = useSelector(
    (state) => state.contact.loadingContactFormRequested
  );
  const contactFormRequestedError = useSelector(
    (state) => state.contact.errorContactFormRequested
  );

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSend = () => {
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    } else {
      setIsEmailValid(true);
      const data = {
        email: email,
        message: message,
        name: name,
      };
      dispatch(fetchContactForm(data));
    }
  };

  useEffect(() => {
    if (contactFormRequested) {
      setEmail("");
      setName("");
      setMessage("");
    }
  }, [contactFormRequested]);

  return {
    email,
    setEmail,
    isEmailValid,
    message,
    setMessage,
    name,
    setName,
    contactFormRequested,
    contactFormRequestedLoading,
    contactFormRequestedError,
    handleSend,
  };
}
