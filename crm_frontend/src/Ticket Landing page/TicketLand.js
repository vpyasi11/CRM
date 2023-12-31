import React, {useState,useEffect}from 'react';
import './ticketLand.css'
import { Link } from 'react-router-dom';
import Object from '../Data/Object';

const Ticketland = () => {
    const [searchString, setSearchString] = useState('')
    const [filterArr,setfilterArr]=useState(Object)
    useEffect(() => {
        
    },[searchString,filterArr])
    function HandleChange(e) {
        let { value } = e.target;
        setSearchString(value);
        search(value)
        
    }
    function search(str) {
        const filteredTicket= Object.filter((ele) => {
            return ele.Subject.toLowerCase().includes(str.toLowerCase());
        })
        console.log(filteredTicket);
        setfilterArr(filteredTicket)
    }
    return (
        <div className='container'>
        <div className='search'>
            <button>Search</button>
        <div>
            <input type="text" placeholder='search' onChange={HandleChange} />
        </div>
        </div>
        <div className='table-ticket'>

            <table className='table'>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Opened Date</th>
                    </tr>
                </thead>

                {filterArr.length ?
                    filterArr.map((ele, id) => {

                        console.log(ele);
                        return (
                            <tbody key={id}>
                                <Link to="/SingleTicket">
                                <tr >
                                    <td>{ele.Subject}</td>
                                    <td>{ele.Status}</td>
                                    <td>{ele.Date}</td>
                                    </tr>
                                    </Link>
                            </tbody>
                        )
                    })
                    : (
                        <tbody>
                            <tr>
                                <td>no action needed</td>
                            </tr>
                        </tbody>
                    )


                }


            </table>


        </div>
    </div>
    );
}

export default Ticketland;
