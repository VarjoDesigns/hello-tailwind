import React, {useState} from 'react';

export default function Form() {

    const [form, setValues] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [message, setMessage] = useState('');

    const change = (e) => {

        setValues({
            ...form,
            [e.target.name]: e.target.value
        });
        setMessage('');
    }

    const addForm = (e) => {
        e.preventDefault();
        
        if(!form.name ||!form.email ||!form.message) {
            console.log('Empty')
            setMessage('You need to fill out all sections!')
        } else {
            console.log('Name: ' +form.name);
            console.log('Form: ' +form.email);
            console.log('Message: ' +form.message);

            setValues({
                name: '',
                email: '',
                message: '',
            })

            setMessage('Form was submitted! Please note that this is a demo enviroment!');
        }
    }

    return(
        <div id="contact" className="mt-20">
            <h1 className="font-bold tracking-tight text-2xl text-center text-indigo-900">
                Please leave us a message!
            </h1>
            <form className="mx-auto text-center mt-6 text-indigo-900">
                <div className="py-2">
                    <label htmlFor="name">Your name: </label><br />
                    <input name="name" type="text" value={ form.name } onChange={ (e) => change(e)} className="py-2 px-4 w-80 rounded-md shadow-sm hover:shadow-lg"></input>
                </div>

                <div className="py-2">
                    <label htmlFor="name">Your email: </label><br />
                    <input name="email" type="text" value={ form.email } onChange={ (e) => change(e)} className="py-2 px-4 w-80 rounded-md shadow-sm hover:shadow-lg"></input>
                </div>
                
                <div className="py-2">
                    <label htmlFor="name">Your message: </label><br />
                    <textarea name="message" type="text" value={ form.message } onChange={ (e) => change(e)} className="py-2 px-4 w-80 rounded-md shadow-sm hover:shadow-lg"></textarea>
                </div>

                <button type="submit" onClick={ (e) => addForm(e)} className="mt-4 bg-indigo-900 hover:bg-indigo-800 text-white py-3 px-16 rounded-full font-light">Submit</button>
            </form>
            <p className="mt-8 text-center">{message}</p>
        </div>
    )
}