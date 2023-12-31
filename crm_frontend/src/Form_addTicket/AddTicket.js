import React, { useState } from 'react'
import Form from './Form';

function AddTicket() {
    const [showTicket, setshowTicket] = useState(false);
    //jab true ho to ticket show hojaye mtlb form;
    function handleForm() {
        // setshowTicket(Form)
        console.log('clicked');
        setshowTicket(preState => !preState)
        console.log(showTicket);
    }

    return (
        <div className='ticket-show'>
            <button onClick={handleForm}>Add Ticket</button>
            <div className='form-show'>
                {showTicket ? <Form /> : ''}
            </div>
        </div>
    )
}

export default AddTicket
