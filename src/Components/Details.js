// import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import ContactModal from './CotactModal'
import VariableModal from './VariableModal';

const Details = () => {
    /* //================================================================================================================================================================================

        On the below code we are fetching data from the API & setting the data in a state so that we can map and put them on UI. The code will work accordingly if the api address is ok.

       \\===================================================================================================================================================================================*/

    /* const [contacts, setContacts] = useState([])
    const [variables, setVariables] = useState([])
    useEffect(() => {
        fetch("http://internship.leadtorev.com/clients/customers/get/by-intern-name?internName=mehedi")
            .then(response => response.json())
            .then(data => setVariables(data))
    }, [])
    useEffect(() => {
        fetch("http://internship.leadtorev.com/clients/customers/get/by-intern-name?internName=mehedi")
            .then(response => response.json())
            .then(data => setContacts(data))
    }, []) */
    return (
        <div className='grid grid-cols-2 gap-5 mt-5 mx-10 mb-7'>
            <div className='bg-slate-100 rounded-lg p-5'>
                <div className='flex items-center justify-between mb-4'>
                    <h1 className='flex items-center font-semibold'><Icon className='mr-3' icon="fa6-solid:square-root-variable" /> VARIABLES</h1>
                    <label htmlFor="var-modal" className='py-2 px-3 rounded-lg bg-slate-200 text-black border-0 font-semibold w-auto hover:bg-slate-300'>ADD VARIABLE</label>
                </div>
                {/* =========================================================================================================================================
                    In the below code, we are mapping variable data. For each data there will be a key vale pair div which will keep going one after another.
                    =========================================================================================================================================*/}
                
                {/* {variables.map(variable =>
                    <div className='grid grid-cols-2 gap-3 text-center font-semibold'>
                        <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>{variable.key}</div>
                        <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>{variable.value}</div>
                    </div>
                )} */}
                <div className='grid grid-cols-2 gap-3 text-center font-semibold'>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Variable 1 key</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Value 1</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Variable 2 key</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Value 2</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Variable 2 key</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Value 2</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Variable 3 key</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Value 3</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Variable 4 key</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Value 4</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Variable 5 key</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Value 5</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Variable 6 key</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Value 6</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Variable 7 key</div>
                    <div className='bg-base-50 shadow-inner bg-white rounded-lg py-2'>Value 7</div>
                </div>
            </div>
            <div className='bg-slate-100 rounded-lg p-5'>
                <div className='flex items-center justify-between'>
                    <h1 className='flex items-center font-semibold'><Icon className='text-lg mr-3' icon="ic:baseline-contact-mail" /> CONTACT PERSON</h1>
                    <label htmlFor="my-modal" className="flex items-center py-2 px-3 rounded-lg bg-slate-200 text-black border-0 font-semibold w-auto hover:bg-slate-300"><Icon className='mr-2 text-lg' icon="fluent:people-add-16-filled" />ADD NEW</label>
                </div>
                
                {/* ================================================================================================================================
                In the below code, we are fetching contact data. Whenever a new data is inserted the data will appear on the UI by the below code.
                =====================================================================================================================================*/}


                {/*  {contacts.map(contact =>
                    <div className='bg-white rounded-lg p-3 font-semibold mt-7'>
                        <div className='border-b py-1 border-slate-200 flex justify-end'><Icon width='24px' icon="fe:edit" /></div>
                        <div className='border-b py-1 border-slate-200 grid grid-cols-2'><span className='text-slate-500'>Title</span>{contact.title}<span></span></div>
                        <div className='border-b py-1 border-slate-200 grid grid-cols-2'><span className='text-slate-500'>Name</span><span>{contact.name}</span></div>
                        <div className='border-b py-1 border-slate-200 grid grid-cols-2'><span className='text-slate-500'>Phone Number</span>{contact.contactNo}<span></span></div>
                        <div className='border-b py-1 border-slate-200 grid grid-cols-2'><span className='text-slate-500'>Email</span><span>{contact.email}</span></div>
                        <div className='border-b py-1 border-slate-200 grid grid-cols-2'><span className='text-slate-500'>Designation</span><span>{contact.designation}</span></div>
                        <div className='py-1 grid grid-cols-2'><span className='text-slate-500'>Telegram Username</span><span>{contact.tgUsername}</span></div>
                    </div>
                )} */}
                <div className='bg-white rounded-lg p-3 font-semibold mt-7'>
                    <div className='border-b py-1 border-slate-200 flex justify-end'><Icon width='24px' icon="fe:edit" /></div>
                    <div className='border-b py-1 border-slate-200 grid grid-cols-2'><span className='text-slate-500'>Title</span>Mr.<span></span></div>
                    <div className='border-b py-1 border-slate-200 grid grid-cols-2'><span className='text-slate-500'>Name</span><span>Chinmay Agarwal</span></div>
                    <div className='border-b py-1 border-slate-200 grid grid-cols-2'><span className='text-slate-500'>Phone Number</span>+88001154225<span></span></div>
                    <div className='border-b py-1 border-slate-200 grid grid-cols-2'><span className='text-slate-500'>Email</span><span>mh19115@gmail.com</span></div>
                    <div className='border-b py-1 border-slate-200 grid grid-cols-2'><span className='text-slate-500'>Designation</span><span>Principal</span></div>
                    <div className='py-1 grid grid-cols-2'><span className='text-slate-500'>Telegram Username</span><span>Chinmay.agg</span></div>
                </div>
            </div>
            <ContactModal />
            <VariableModal />
        </div>
    );
};

export default Details;