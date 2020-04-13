import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const EmailForm = () => {
    const sent = useState(false);
    const Thanks = () => (
        <div className="thankyou_message">
            <h2>Thanks for contacting us! We will get back to you soon!</h2>
        </div>
    );
    const handleClick = () => {
        const { form } = this.state;
        // loading
        this.setState({ clicked: true });
        // sent
        const setSent = () => {
            this.setState({ sent: true });
        };
        // checking if bot
        const { honeypot } = form;
        if (honeypot) {
            return false;
        }
        // sending through xhr as axios won't work (CORS)
        const xhr = new XMLHttpRequest();
        xhr.open(
            "POST",
            "https://script.google.com/macros/s/AKfycbz_pyoxT0wFjSU0vBmgQfSrLGVBmed6z5s9Opr23wVrjeNoFjA/exec"
        );
        // xhr.withCredentials = true
        xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
        );
        xhr.onreadystatechange = function xhrGo() {
            setSent();
        };
        const encoded = Object.keys(form)
            .map((k) => {
                return `${encodeURIComponent(k)}=${encodeURIComponent(
                    form[k]
                )}`;
            })
            .join("&");
        // finally sending
        xhr.send(encoded);
        return true;
    };
    return (
        <div className="emailFormContainer col-12">
            <form
                className="gform"
                autocomplete="off"
                method="POST"
                action="https://script.google.com/macros/s/AKfycbz_pyoxT0wFjSU0vBmgQfSrLGVBmed6z5s9Opr23wVrjeNoFjA/exec"
            >
                {sent ? <Thanks /> : null}
                <h2>이메일 문의하기</h2>
                <TextField
                    id="standard-basic"
                    className="emailFormInput"
                    label="성함"
                    type="text"
                    name="성함"
                />
                <TextField
                    id="standard-basic"
                    className="emailFormInput"
                    type="text"
                    name="이메일"
                    label="이메일"
                />
                <TextField
                    id="standard-basic"
                    className="emailFormInput"
                    type="tel"
                    name="연락처"
                    label="연락처"
                />
                <TextField
                    id="outlined-multiline-flexible"
                    className="emailFormInput"
                    label="문의 내용"
                    multiline
                    name="문의 내용"
                    rowsMax={4}
                    variant="outlined"
                />
                <label className="sr-only"></label>
                <input id="honeypot" type="text" name="honeypot" value="" />
                <div className="col-12 mb-4 btn-container">
                    <button
                        href="/business"
                        className="button"
                        onClick={() => handleClick()}
                    >
                        문의하기
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EmailForm;
