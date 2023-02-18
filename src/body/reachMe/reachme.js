import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './reachme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhoneAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Snackbar, SnackbarContent } from '@material-ui/core'
import emailjs from 'emailjs-com'

const apiKeys =  {
    USER_ID: 'M4rrTVG9pq6owQLxW',
    TEMPLATE_ID: 'template_0btpfyn',
    SERVICE_ID: 'service_pzr1hrq'
}


const Reach = () => {
    const [mail, setMail] = useState("");
    const [name, setName] = useState("");
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [opensnack, setopensnack] = useState(false)
    const [sendingMail, setSendingMail] = useState(false)

    const handleCloseSnack = () => {
        setopensnack(false)
    }

    const sendMessage = () => {
        setSendingMail(true)
        const templateParams = {
            email: mail,
            from_name: name,
            subject: subject,
            message: message,
            reply_to: mail
        };

        emailjs.send(apiKeys.SERVICE_ID, apiKeys.TEMPLATE_ID, templateParams, apiKeys.USER_ID)
            .then((response) => {
                setopensnack(true)
                setSendingMail(false)
                console.log('SUCCESS!', response.status, response.text);
                setMail("")
                setName("")
                setSubject("")
                setMessage("")
                setTimeout(()=>{
                    setopensnack(false)
                },3000)
            }, (err) => {
                setSendingMail(false)
                console.log('FAILED...', err);
            });

    }

    return (
        <>
            <div className="container-fluid p-5" id="reachMe">
                <div className="container my-5" >
                    <div className="row">
                        <div className="col-md-6 text-left">
                            <div className="details">
                                <strong><FontAwesomeIcon icon={faUser} size='1x' />&nbsp;&nbsp;JayaChandra Thottempudi</strong><br /><br />
                                <FontAwesomeIcon icon={faEnvelope} size='1x' />&nbsp; jayachandra.thottempudi@gmail.com<br /><br />
                                <p>
                                    <FontAwesomeIcon icon={faMapMarkedAlt} size='1x' />&nbsp;&nbsp;Nizampet,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hyderabad,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TELANGANA 500090.</p><br />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form">
                                
                                <label class="label" for="email">Name:</label>
                                    <div class="form-group">
                                        <input type="text" value={name} class="form-control" onChange={(e) => setName(e.target.value)} placeholder="name" id="email" name="email" />
                                    </div>
                                    <label class="label" for="email">Email address:</label>
                                    <div class="form-group">

                                        <input type="email" value={mail} class="form-control" onChange={(e) => setMail(e.target.value)} placeholder="Email" id="email" name="email" />
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Subject:</label>
                                        <input type="text" value={subject} class="form-control" onChange={(e) => setSubject(e.target.value)} placeholder="Subject" id="subject" name="subject" />
                                    </div>
                                    <div class="form-group">
                                        <label for="msg">Meassage:</label>
                                        <textarea type="text" value={message} class="form-control" onChange={(e) => setMessage(e.target.value)} rows="6" placeholder="Type a message..." id="pwd"></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary" onClick={sendMessage} disabled={sendingMail?true:false}>Submit</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Snackbar
                open={opensnack}
                onClose={handleCloseSnack}
                key={'bottom' + 'right'}
            >
                <SnackbarContent style={{
                    backgroundColor: '#f2f2f2',
                    color: 'black'
                }}
                    message={<span id="client-snackbar">Thank you for reaching me out. I'll get back to you soon!!</span>}
                />
            </Snackbar>
        </>
    )
}
export default Reach