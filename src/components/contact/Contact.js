import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      disabled: true,
      emailSent: false,
    });
  };
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-header">
            <div>
              <div className="card-header text-center bg-dark text-white">
                <h3>Contact</h3>
              </div>
              <ul>
                <li>Personal Contact Information:</li>
                <li className="list-item">
                  <strong>Email: </strong>m.w.chou21@gmail.com
                </li>
                <li className="list-item">
                  <strong>Phone: </strong>480-330-5011
                </li>
              </ul>
            </div>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="InputName">Name</label>
              <input
                name="name"
                type="text"
                id="contactNameInput"
                className="form-control"
                placeholder="James Bond"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputEmail">Email</label>
              <input
                name="email"
                type="email"
                id="contactEmailInput"
                className="form-control"
                placeholder="example@gmail.com"
                value={this.state.email}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="form-group input-group-lg">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                as="textarea"
                rows="7"
                className="form-control"
                id="contactFormMessage"
                value={this.state.message}
                onChange={this.handleChange}
              ></textarea>
            </div>
            <div>
              <a
                typ="submit"
                href="mailto:m.w.chou21@gmail.com"
                id="contactSubmit"
                className="btn btn-info"
                disabled={this.state.disabled}
              >
                Send
              </a>
              {/* {this.state.emailSent === true && (
                <p className="d-inline success-msg">Email Send</p>
              )}
              {this.state.emailSent === false && (
                <p className="d-inline err-msg">Email Not Send</p>
              )} */}
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
