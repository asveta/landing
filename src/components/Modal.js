import React, { useState } from "react";
import FormOutput from "./FormOutput";
import firebase from "../utils/firebase";

function Modal({ request }) {
  function closeModal(e) {
    document.querySelector("#modal").remove();
    document.body.classList.remove("body-modal");
  }

  const [name, setName] = useState(null);
  const [contact, setContact] = useState(null);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleContact = (e) => {
    setContact(e.target.value);
  };

  const sendLead = () => {
    const asvetaRef = firebase.database().ref("Lead");
    const lead = {
      name,
      contact,
      ...request,
    };
    console.log(lead);
    asvetaRef.push(lead);
  };

  return (
    <div className="modal-bg " id="modal">
      <div className="modal">
        <div className="between pb-24">
          <h1>Оставить заявку на участие</h1>
          <div className="close-button" onClick={closeModal}>
            <span className="block">╳</span>
          </div>
        </div>
        <h2 className="mv-24">
          Оставьте заявку на участие и мы с вами свяжемся, как только подберем
          подходящий вариант
        </h2>
        { Object.values(request).length ? <FormOutput request={Object.values(request)} /> : <></>}
        <div className="contact-form mv-24 between">
          <div className="flex-grow mr-16">
            <h2>Как к вам обратиться</h2>
            <div className="contact-input-wrapper">
              <input
                type="text"
                placeholder="Ваше имя"
                className="contact-input"
                onChange={handleName}
              />
            </div>
          </div>
          <div className="flex-grow">
            <h2>Контактные данные</h2>
            <div className="contact-input-wrapper">
              <input
                type="text"
                placeholder="Телефон/email"
                className="contact-input"
                onChange={handleContact}
              />
            </div>
          </div>
        </div>
        <button className="request-button m-0" onClick={() => sendLead()}>
          <span>Оставить заявку →</span>
        </button>
      </div>
    </div>
  );
}

export default Modal;
