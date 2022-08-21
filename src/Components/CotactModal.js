import React, { useState } from 'react';

const CotactModal = () => {
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [designation, setDesignation] = useState('')
    const [telegram, setTelegram] = useState('')
    const newContact = {
        title: title,
        name: name,
        email: email,
        contactNo: number,
        tgUsername: telegram,
        designation: designation
    }
    const newUser = () => {
        fetch('http://internship.leadtorev.com/clients/customers/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newContact),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            {/* <!-- The button to open modal --> */}
            {/* <label htmlFor="my-modal" className="btn modal-button">open modal</label> */}

            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg pl-10">insert your information accordingly!</h3>
                    <form className='grid grid-cols-1 gap-4 mt-7 px-10' action="">
                        <input onChange={(e) => setTitle(e.target.value)} className='shadow-inner h-9 rounded px-5 border' type="text" placeholder='Your name title' />
                        <input onChange={(e) => setName(e.target.value)} className='shadow-inner h-9 rounded px-5 border' type="text" placeholder='Your name' />
                        <input onChange={(e) => setNumber(e.target.value)} className='shadow-inner h-9 rounded px-5 border' type="text" placeholder='Phone number' />
                        <input onChange={(e) => setEmail(e.target.value)} className='shadow-inner h-9 rounded px-5 border' type="text" placeholder='Your email' />
                        <input onChange={(e) => setDesignation(e.target.value)} className='shadow-inner h-9 rounded px-5 border' type="text" placeholder='Designation' />
                        <input onChange={(e) => setTelegram(e.target.value)} className='shadow-inner h-9 rounded px-5 border' type="text" placeholder='Telegram username' />
                    </form>
                    <div className="modal-action">
                        <label onClick={() => newUser()} htmlFor="my-modal" className="btn">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default CotactModal;