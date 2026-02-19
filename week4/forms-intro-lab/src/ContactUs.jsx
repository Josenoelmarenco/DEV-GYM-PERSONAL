// src/ContactUs.jsx
import './ContactUs.css'
import { useState } from 'react';

function ContactUs() {
    //estados
    const[name, setName]= useState('');
    const[email, setEmail]= useState('');
    const[phone,setPhone] = useState('');
    const[phoneType, setPhoneType] = useState('');
    const[comments, setComments] = useState('');
    //controladores
    const onSubmit = e => {e.preventDefault();};

    return (
        <div>
            <h2>Contact Us</h2>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor='name'> Name: </label>
                        <input 
                            id='name' 
                            type='text' 
                            onChange={e => setName(e.target.value)}
                            placeholder='Juan de los palotes...'
                            value={name}
                        /> 
                    </div>
                    <div>
                        <label htmlFor='email'> Email:</label>
                        <input 
                            id='email' 
                            type='text'
                            placeholder='name@example.com.. '
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        /> 
                    </div>
                    <div>
                        <label htmlFor='phone'> Phone:</label>
                        <input 
                            id='phone' 
                            type='text'
                            placeholder='358...'
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                        /> 
                        <label htmlFor="PhoneType"> Selecciona type number: </label>
                        <select 
                            name="phoneType"
                            onChange={e => setPhoneType(e.target.value)}
                            value={phoneType}>
                            <option value="" disabled> Select a phone type...</option>
                                <option>Home</option>
                                <option>Work</option>
                                <option>Mobile</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="comments">Comments:</label>
                        <textarea
                            id='comments'
                            name='comments'
                            onChange={e => setComments(e.target.value)}
                            placeholder='Type your comments ... '
                            value={comments}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
    );
}

export default ContactUs;