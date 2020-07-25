import React from "react";

const Contact = () => {
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
              <li class="list-item">
                <strong>Email: </strong>m.w.chou21@gmail.com
              </li>
              <li class="list-item">
                <strong>Phone: </strong>480-330-5011
              </li>
            </ul>
          </div>
          <div className="form-group">
            <label for="InputName">Name</label>
            <input
              type="name"
              id="contactNameInput"
              class="form-control"
              placeholder="James Bond"
            />
          </div>
          <div className="form-group">
            <label for="InputEmail">Email</label>
            <input
              type="email"
              id="contactEmailInput"
              className="form-control"
              placeholder="example@gmail.com"
            ></input>
          </div>
          <div class="form-group input-group-lg">
            <label for="message">Message</label>
            <textarea
              class="form-control"
              id="contactFormMessage"
              rows="7"
            ></textarea>
          </div>
          <div>
            <a
              href="mailto:m.w.chou21@gmail.com"
              id="contactSubmit"
              class="btn btn-info"
            >
              Submit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
