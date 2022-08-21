import React from 'react';
import { Icon } from '@iconify/react';

const NewCustomer = () => {
    return (
        <div>
            <div className='flex items-center justify-between mx-10 mt-7 mb-3.5'>
                <h2 className='text-xl text-[#2883C3] font-bold'>Add Customer</h2>
                <button className="btn bg-slate-200 text-black border-0 font-semibold w-40 hover:bg-slate-300">ADD CUSTOMER</button>
            </div>
            <div className='bg-slate-100 p-10 rounded-lg mx-10'>
                <h2 className='flex items-center font-semibold mb-7'><Icon className='text-xl mr-2' icon="ic:baseline-contact-mail" /> BUSINESS ACCOUNT DETAILS</h2>
                <form action="" className='grid grid-cols-2 gap-5'>
                    <input className='shadow-inner h-12 rounded px-5' type="text" placeholder='Account Name'/>
                    <input className='shadow-inner h-12 rounded px-5' type="text" placeholder='Account Type'/>
                    <input className='shadow-inner h-12 rounded px-5' type="text" placeholder='Customer Number'/>
                    <input className='shadow-inner h-12 rounded px-5' type="text" placeholder='Email ID'/>
                </form>
            </div>
        </div>
    );
};

export default NewCustomer;