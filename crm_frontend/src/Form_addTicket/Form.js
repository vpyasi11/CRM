import React,{useContext} from 'react'
import FormContext from '../context/FormContext';
import './Form.css'



function Form() {
    const { data, setData, status, setstatus, date, setDate } = useContext(FormContext);
    const { handleSubmit, handlechange,FormData} = useContext(FormContext);
   
    return (
        <div className='form-container'>
            <form>
                <label for="fname">Enter your Subject here:</label><br />
                <input type="text" id="subject" onChange={handlechange} name='subject'value={data}/><br />
                <label for="lname">Enter your Status here:</label><br />
                <input type="text" id="status"  onChange={handlechange} name='status' value={status}/><br/>
                <label for="lname">Enter your Opened Date:</label><br />
                <input type="date" id="status" onChange={handlechange} name='date' value={date}/><br />
                <button type='submit' onClick={handleSubmit}>Submit Form</button>
                
            </form>
        </div>
    )
}

export default Form
