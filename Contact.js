import React, { useState } from 'react';
import '../App.css';

function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario, como enviar los datos a un servidor o mostrarlos en la consola.
        console.log(formData);
    };

    return (

        <div className="contact-container">
            <h2>Solicita mas informacion: </h2>
            <p>No dudes en escribirnos con cualquier duda o aportacion para esta comunidad de amantes de los mapaches. Tambien puedes enviarnos fotos de mapaches para nuestra galeria.</p>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label htmlFor="fullName">Nombre y Apellidos</label>
                    <input  type="text" id="fullName"  name="fullName" value={formData.fullName} onChange={handleChange}  required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo Electronico</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Contact;
