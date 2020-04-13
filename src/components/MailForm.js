import React from "react";
import TextField from "@material-ui/core/TextField";

const EmailForm = () => {
    return (
        <form
            class="gform"
            autocomplete="off"
            method="POST"
            // action="https://script.google.com/macros/s/AKfycbxiMiIhCnmoB9PnSFsV-gkqNZWKmchBK4V-ZmvLQPxwmW4PjdKv/exec"
        >
            <TextField
                id="standard-helperText"
                label="작성자"
                defaultValue=""
                helperText="Some important text"
            />
            <TextField
                id="outlined-multiline-flexible"
                label="문의 내용"
                multiline
                rowsMax={4}
                variant="outlined"
            />
        </form>
    );
};

export default EmailForm;
