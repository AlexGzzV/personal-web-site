import React, { useState } from "react";
import "./ContactComponent.css";
import axiosApp from "../../../http/Http";
import { useTranslation } from "react-i18next";
import { Button, Col, Container, FormFeedback, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Spinner, Toast, ToastBody, ToastHeader } from "reactstrap";

const Contact = (props) => {

  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const toggle = () => setModal(!modal);

  const handleSubmit = (e) => {
    setIsLoading(true);
    setDisabled(true);
    e.preventDefault();
    const data = new FormData(e.target);
    const langCode = window.localStorage.getItem('Language') ?? 'en-US';

    axiosApp.post("/email/Register?culture=" + langCode, data)
    .then(response => {
      setModal(!modal);
      setIsLoading(false);
      setDisabled(false);
    })
    .catch(error => {
      setIsLoading(false);
      setDisabled(false);
      document.getElementById('toast-error').classList.remove('hidden');
      setTimeout(()=>{
        document.getElementById('toast-error').classList.add('hidden');
      }, 5000);
    })
  }

  const handleKeyDown = (e) => {
    let res = /^[a-zA-Z]+$/.test(e.key);
    const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "Backspace", "Control", "Alt", "Shift", "CapsLock", "Tab"];
    const length = e.target.value.length;
    if(!allowedKeys.includes(e.key) || (length >= 12 && e.key !== "Backspace")){
      e.preventDefault();
    }

    if((length === 3 || length === 7) && e.key !== "Backspace"){
      e.target.value += "-";
    }
  }

  const handleOnChange = (e) => {
    const value = e.target.value.replaceAll('-','');
    if(value.length == 10){
      const arr = value.split('');
      let returnValue = "";
      if(arr.length > 3){
        arr.forEach((e,i) => {
          if(i === 3 || i == 6){
            returnValue += '-';
          }
          returnValue += e;
        })
      }

      if(value.length > 1)
        e.target.value = returnValue;
    }
  }

  const handleInvalidCapture = (e) => {
    e.preventDefault();
    const element = e.target;
    element.setAttribute('aria-invalid', 'true');
    element.classList.add('is-invalid');
    element.parentElement.children[2].innerText = element.validationMessage;
  }

  const handleOnBlur = (e) => {
    e.target.classList.remove('is-invalid');
    e.target.removeAttribute('aria-invalid');
  }

  return(
    <section id="contact-us" className="contact-us">
      <Container>
        <div className="section-title">
          <h2>{t("contact-title")}</h2>
        </div>
        <Row>
          <Col lg={6}>
           <div>
            <h2>{t("contact-subtitle")}</h2>
            <p>
            {t("contact-text-1")}
            </p>
            <p>{t("contact-text-2")}</p>
            <p>{t("contact-text-3")}</p>
            <p>{t("contact-text-4")}</p>
           </div>
          </Col>
          <Col lg={6}>
            <form onSubmit={handleSubmit}>
              <FormGroup floating>
                <Input type="text" name="name" placeholder=" " required onInvalidCapture={handleInvalidCapture} onBlur={handleOnBlur}/>
                <Label for="exampleEmail">{t("contact-input-lbl-1")}</Label>
                <FormFeedback></FormFeedback>
              </FormGroup>
              <FormGroup floating>
                <Input type="email" name="email" placeholder=" " required onInvalidCapture={handleInvalidCapture} onBlur={handleOnBlur}/>
                <Label for="exampleEmail">{t("contact-input-lbl-2")}</Label>
                <FormFeedback></FormFeedback>
              </FormGroup>
              <FormGroup floating>
                <Input type="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder=" " onKeyDown={handleKeyDown} onChange={handleOnChange}/>
                <Label for="exampleEmail">{t("contact-input-lbl-3")}</Label>
              </FormGroup>
              <FormGroup floating>
                <Input type="textarea" name="message" placeholder=" " style={{minHeight: '100px'}} required onInvalidCapture={handleInvalidCapture} onBlur={handleOnBlur}/>
                <Label for="exampleEmail">{t("contact-input-lbl-4")}</Label>
                <FormFeedback></FormFeedback>
              </FormGroup>
              <Button className="btn btn-primary" type="submit" disabled={disabled}>{(!isLoading)? <>{t("contact-button")}</> : <Spinner />}</Button>
            </form>
          </Col>
        </Row>
      </Container>
      <div>
        <Modal isOpen={modal} toggle={toggle} {...props}>
          <ModalHeader toggle={toggle}>{t("contact-modal-header")}</ModalHeader>
          <ModalBody dangerouslySetInnerHTML={{ __html: t("contact-modal-body") }}></ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>{t("contact-modal-button")}</Button>
          </ModalFooter>
        </Modal>
      </div>
      <div id="toast-error" className="hidden">
        <Toast>
          <ToastHeader icon="danger">{t("contact-toast-header")}</ToastHeader>
          <ToastBody>{t("contact-toast-body")}</ToastBody>
        </Toast>
      </div>
    </section>
  );
}

export default Contact;