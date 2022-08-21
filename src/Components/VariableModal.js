import React, { useState } from 'react';

const VariableModal = () => {
    const [key, setKey] = useState("")
    const [value, setValue] = useState("")
    const newKeyVar = {
        key: key,
        value: value
    }
    const newVar = () => {

        fetch('http://internship.leadtorev.com/clients/customers/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newKeyVar),
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
            <input type="checkbox" id="var-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="var-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg pl-10">insert variable information accordingly!</h3>
                    <form className='grid grid-cols-1 gap-4 mt-7 px-10' action="">
                        <input onChange={(e) => setKey(e.target.value)} className='shadow-inner h-9 rounded px-5 border' type="text" placeholder='Variable key' />
                        <input onChange={(e) => setValue(e.target.value)} className='shadow-inner h-9 rounded px-5 border' type="text" placeholder='Variable value' />
                    </form>
                    <div className="modal-action">
                        <label onClick={() => newVar()} htmlFor="var-modal" className="btn">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default VariableModal;