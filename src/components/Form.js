import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

const config = {
    script:
        "https://script.google.com/macros/s/AKfycbz_pyoxT0wFjSU0vBmgQfSrLGVBmed6z5s9Opr23wVrjeNoFjA/exec",
    sheet: "responses",
};

const Thanks = () => (
    <div className="thankyou_message mb-4">
        <p>문의가 정상적으로 접수되었습니다. 감사합니다.</p>
    </div>
);

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: "",
                content: "",
                email: "",
                phone: "",
                honeypot: "",
            },
            sent: false,
            clicked: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => {
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
        xhr.open("POST", config.script);
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

    handleChange = ({ target }) => {
        const { name, value } = target;
        const { state } = this;
        state.form[name] = value;
        this.setState(state);
    };

    render() {
        const {
            form: { name, email, phone, content, honeypot },
            sent,
            clicked,
        } = this.state;
        return (
            <>
                {sent ? (
                    <Thanks />
                ) : (
                    <div className="col-12">
                        <form
                            method="POST"
                            action={config.script} // change this url
                        >
                            <div className="emailFormContainer">
                                <h2>이메일 문의하기</h2>
                                <TextField
                                    onChange={this.handleChange}
                                    id="standard-basic"
                                    className="emailFormInput"
                                    label="성함"
                                    type="text"
                                    name="name"
                                    key="name"
                                    value={name}
                                />
                                <TextField
                                    onChange={this.handleChange}
                                    id="standard-basic"
                                    className="emailFormInput"
                                    type="text"
                                    name="email"
                                    label="이메일"
                                    key="email"
                                    value={email}
                                />
                                <TextField
                                    onChange={this.handleChange}
                                    id="standard-basic"
                                    className="emailFormInput"
                                    type="tel"
                                    name="phone"
                                    label="연락처"
                                    key="phone"
                                    value={phone}
                                />
                                <TextField
                                    onChange={this.handleChange}
                                    id="outlined-multiline-flexible"
                                    label="문의 내용"
                                    multiline
                                    name="content"
                                    key="content"
                                    variant="outlined"
                                    value={content}
                                />
                                <fieldset
                                    className="honeypot-field"
                                    style={{ display: "none" }}
                                >
                                    <label htmlFor="honeypot">
                                        {/* To help avoid spam, utilize a Honeypot technique with a hidden text field; must
                    be empty to submit the form! Otherwise, we assume the user is a spam bot. */}
                                        <input
                                            onChange={this.handleChange}
                                            id="honeypot"
                                            key="honeypot"
                                            type="text"
                                            name="honeypot"
                                            value={honeypot}
                                        />
                                    </label>
                                </fieldset>
                                {clicked ? (
                                    <div className="col-12 my-4 btn-container">
                                        <button
                                            type="button"
                                            className="button"
                                            disabled
                                        >
                                            전송중
                                        </button>
                                    </div>
                                ) : (
                                    <div className="col-12 my-4 btn-container">
                                        <button
                                            type="button"
                                            className="button"
                                            onClick={() => this.handleClick()}
                                        >
                                            문의하기
                                        </button>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                )}
            </>
        );
    }
}

export default Form;
