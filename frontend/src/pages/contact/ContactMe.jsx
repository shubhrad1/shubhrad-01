import React from "react";
import Contact from "./contact.module.css";

const ContactMe = () => {
    return(
        <div className={Contact.body}>
            <div className={Contact.card}>
                <h1 className={Contact.header}>Let's Connect</h1>
                <div className={Contact.img}>Img</div>
                <div className={Contact.table}>
                    <div className={Contact.header}>Shubhradeep Das</div>
                    <div className={Contact.discord}>Discord : shubhrad1#3336</div>
                    <div className={Contact.mail}><a href="mailto:shubhramail.das@gmail.com">Mail Me!</a></div>       
                    <div className={Contact.comment}>
                        <form className={Contact.comment_form}>
                            <h1>Comments</h1>
                            <input type="text" placeholder="
                            Your Name" required/>
                            <input type="email" placeholder="
                            Your Email" required/>
                            <input type="text" placeholder="Write to me...." required></input>
                            <button type="submit">Submit</button> 
                        </form>  
                    </div>             
                </div>

            </div>
        </div>
    );
}
export default ContactMe;