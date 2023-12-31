import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import TableDashboard from './TableDashboard'
import Object from '../Data/Object'
import AddTicket from '../Form_addTicket/AddTicket';
import FormContext from '../context/FormContext';


function Dashboard() {
    const { form } = useContext(FormContext);
    console.log(Object);
    return (
        <>
            <div className='dashboard-container'>
                <div className='add-ticket'>
                    <AddTicket />
                </div>
                <div>Total tickets:{form.length-1}</div>
                <div>Pending tickets:0</div>

            </div>
            <Link to="/TicketLanding">
                <div className='table-header'>Show Added Tickets</div>
            </Link>
            <div className='table-container'>

                {/* table dahsboard  here --we can pass data to table from here */}

                <Link to="/TicketLanding"></Link> <TableDashboard form={form} />


            </div>
        </>
    )
}

export default Dashboard
