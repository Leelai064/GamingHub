import React, { Component } from "react";

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // dont forget to install packages 
    // connect server that the db is running on below on line 20 
    handleSubmit(e) {
        e.preventDefault();
        const { fname, lname, email, password } = this.state;
        console.log(fname, lname, email, password);
        fetch("http://localhostwhatever", {
            method: "POST",
            crossDomain: true,
            Headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fname,
                email,
                lname,
                password
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
            });
    }
    render() {
        return (
        // html UX/UI goes here. 
    )
    }
}