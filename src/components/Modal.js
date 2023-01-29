import React, { useState } from "react";
import FormOutput from "./FormOutput";
import firebase from "../utils/firebase";
import successImg from "../assets/email.svg";

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

  const sendApiRequest = () => {
    let xhr = new XMLHttpRequest()

    xhr.addEventListener('load', () => {
      console.log('API Response', xhr.responseText);
    })
    xhr.open('POST', 'https://api.asveta.by/', true);

    let formData = new FormData();
    const nodeList = document.querySelectorAll('.form-output .form-item');
    const dataArray = [...nodeList];

    dataArray.map((htmlElem, index) => {
      let key = 'filter_' + index;
      //formData.append(key, htmlElem.innerText);
      console.log('key', key);
    });

    formData.append('email', document.querySelector("input[type='email']").value);
    formData.append('name', document.querySelector("input[type='text']").value);
    formData.append('security', '' + new Date().valueOf());

    xhr.send(formData);
  };

  const sendLead = () => {
    const email_regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    const asvetaRef = firebase.database().ref("Lead");
    const lead = {
      name,
      contact,
      ...request,
    };
    if (
      !document.querySelector("input[type='email']").value.match(email_regex)
    ) {
      return document
        .querySelector("input[type='email']")
        .parentNode.classList.add("invalid-input");
    }
    if (!document.querySelector("input[type='text']").value) {
      return document
        .querySelector("input[type='text']")
        .parentNode.classList.add("invalid-input");
    }
    asvetaRef.push(lead);
    firebase.analytics().logEvent("submit_form");

    sendApiRequest();

    document
      .querySelectorAll(
        ".modal > div:not(.close-button):not(#success), .modal > h2, .modal > .request-button"
      )
      .forEach((el) => el.classList.add("force-hide"));
    document.querySelector("#success").classList.remove("hide");
  };

  return (
    <div className="modal-bg " id="modal">
      <div className="modal">
        <div className="hide" id="success">
          <img src={successImg} alt="success" />
          <h2 className="mv-24 mb-8">Ваша заявка принята</h2>
          <p>Мы вам напишем, как только подберем подходящий урок</p>
          <button className="request-button my-auto" onClick={closeModal}>
            <span>Закрыть</span>
          </button>
        </div>
        <div className="close-button" onClick={closeModal}>
          <span className="block">╳</span>
        </div>
        <div className="between pb-24">
          <h1>Оставить заявку на обучение</h1>
        </div>
        <h2 className="mv-24">
          Оставьте заявку на обучение и мы с вами свяжемся, как только подберем
          подходящий вариант
        </h2>
        {Object.values(request).length ? (
          <FormOutput request={Object.values(request)} />
        ) : (
          <></>
        )}
        <div className="contact-form mv-24 between">
          <div className="flex-grow">
            <h2>Как к вам обратиться</h2>
            <div className="contact-input-wrapper">
              <input
                type="text"
                placeholder="Ваше имя"
                className="contact-input"
                onChange={handleName}
                onInput={(e) =>
                  e.target.parentNode.classList.remove("invalid-input")
                }
              />
            </div>
          </div>

          <div className="flex-grow">
            <h2>Контактные данные</h2>
            <div className="contact-input-wrapper">
              <input
                type="email"
                placeholder="Ваш email"
                className="contact-input"
                onChange={handleContact}
                onInput={(e) =>
                  e.target.parentNode.classList.remove("invalid-input")
                }
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
