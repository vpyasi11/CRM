import React from 'react';
import './SingleTicket.css'

const Singleticketdesc = () => {
    return (
        <div className='SingleTicket'>
            <div className='singlePage'>
                <div className='side'>
                    <div className='details'>
                        <span style={{ fontWeight: "bold" }}>Subject: </span>
                        <span>email verify</span>
                        <br /><br />
                        <span style={{ fontWeight: "bold" }}>Issue: </span>
                        <span>reported on time</span>
                        <br /><br />
                        <span style={{ fontWeight: "bold" }}>Issue Date: </span>
                        <input type="date" />
                        <br />

                    </div>
                </div>
                <div className='middle'>
                    <div className="middleDetails">
                        <span style={{ fontWeight: "bold" }}>Issuer:</span>
                        <input type="text" />
                        <br /><br />
                        <span style={{ fontWeight: "bold" }}>Client:</span>
                        <input type="text" />
                        <br />
                        <label style={{ fontWeight: "bold" }}>Detail Issue</label>
                        <br />
                        <textarea name="" id="" cols="40" rows="8"></textarea>
                        <br />
                        <label style={{ fontWeight: "bold" }}>Reply</label>
                        <br />
                        <textarea name="" id="" cols="40" rows="8"></textarea>
                        <br />
                        <button type='submit'>
                            Submit
                        </button>

                    </div>


                </div>
                <div className='side2'>
                    <div className="submit">
                        <button type='submit'>
                            Close Ticket
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Singleticketdesc;
