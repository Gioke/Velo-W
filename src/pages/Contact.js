import React from 'react';
import '../styles/Contact.css';

export const Contact = () => {
    return (
        <>
            <h1 className="contact-title">Contact Me:</h1>

            <form className="form-container">
                <div className="contact-info">
                    <input placeholder="Naam" className="form-naam"></input>
                    <input placeholder="E-mail" className="form-mail"></input>
                    <input placeholder="Telefoon" className="form-telefoon"></input>
                </div>
                <textarea placeholder="Text" className="form-text"></textarea>
                <div className="button-container">
                    <button>Send</button>
                </div>
            </form>
        </>
    )
}
