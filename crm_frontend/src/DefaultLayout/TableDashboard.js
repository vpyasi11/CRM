import React, { useContext,useEffect,useState } from 'react'


function TableDashboard({ form}) {
    console.log(form,"this is the form");
    
    const [validate, setValidate] = useState(false);
    // form.map((ele) => {
    //     if (ele.subject.length < 5) {
    //         setValidate(false)
    //     } else {
    //         setValidate(true)
    //     }
    // })
    return (
        <div className='table'>
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Opened Date</th> 
                    </tr>
                </thead>

                {form.length ?
                    form.map((ele, id) => {
                       
                        console.log(ele);
                        return (
                            <tbody key={id}>
                                <tr >
                                    <td>{ele.subject}</td>
                                    <td>{ele.status}</td>
                                    <td>{ele.date}</td>
                                </tr>
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
    )
}

export default TableDashboard
