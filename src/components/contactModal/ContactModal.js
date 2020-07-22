import React,{ Component } from "react";

class ContactModal extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="modal fade" id="contactMe" tabindex="-1" role="dialog" aria-labelledby="contactMeModal"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header card-header">
                    <div>
                        <h3 class="text-white">Contact</h3>
                        <ul class="text-white">
                            <li>Personal Contact Information:</li>
                            <li class="list-item"><strong>Email: </strong>m.w.chou21@gmail.com</li>
                            <li class="list-item"><strong>Phone: </strong>480-330-5011</li>
                        </ul>
                    </div>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="card-body">
                        <div class="form-group ">
                            <label for="contactNameInput">Name</label>
                            <input type="name" id="contactNameInput" class="form-control" placeholder="James Bond"/>
                        </div>
                        <div class="form-group">
                            <label for="contactEmailInput">Email</label>
                            <input type="email" id="contactEmailInput" class="form-control"
                                placeholder="example@gmail.com"/>
                        </div>
                        <div class="form-group input-group-lg">
                            <label for="message">Message</label>
                            <textarea class="form-control" id="contactFormMessage" rows="7"></textarea>
                        </div>
                        <div>
                            <a href="mailto:m.w.chou21@gmail.com" id="contactSubmit" class="btn btn-info">Submit</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
         );
    }
}
 
export default ContactModal;