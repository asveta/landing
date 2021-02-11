import React from 'react';
import FormOutput from "./FormOutput";

function Modal ( {request} ) {
  function closeModal (e) {
    document.querySelector("#modal").classList.add("hide");
    document.body.classList.remove("body-modal");
  }

  return (
    <div className="modal-bg hide" id="modal">
      <div className="modal">
        <div className="between pb-24">
          <h1>Оставить заявку на участие</h1>
          <div className="close-button" onClick={ closeModal }>
            <span className="block">╳</span>
          </div>
        </div>
        <h2 className="mv-24">Оставьте заявку на участие и мы с вами свяжемся, как только подберем подходящий вариант</h2>
        { <FormOutput request={request} />}
        <div className="contact-form mv-24 between">
          <div className="flex-grow mr-16">
            <h2>Как к вам обратиться</h2>
            <div className="contact-input-wrapper">
              <input type="text" placeholder="Ваше имя" className="contact-input"/>
            </div>
          </div>
          <div className="flex-grow">
            <h2>Контактные данные</h2>
            <div className="contact-input-wrapper">
              <input type="text" placeholder="Телефон/email" className="contact-input"/>
            </div>
          </div>
        </div>
        <div className="request-button m-0">
          <span>Оставить заявку →</span>
        </div>
      </div>
    </div>
  )
}

export default Modal;