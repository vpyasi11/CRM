
import './App.css';
import { Button } from 'react-bootstrap'
import LoginAuth from './Authcomponents/LoginAuth';
import Header from './DefaultLayout/Header';
import Footer from './DefaultLayout/Footer';
import Dashboard from './DefaultLayout/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contextwrapper from './context/ContextWrapper';
import Ticketland from './Ticket Landing page/TicketLand';
import Singleticketdesc from './SIngleTicket Description/SingleTicketDesc';


function App() {
  return (
    <Contextwrapper>
    <BrowserRouter>
    
          <Header />
        <Routes>
          <Route path='/' element={<LoginAuth/>}/>
          <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/TicketLanding' element={<Ticketland />} />
            <Route path='/SingleTicket' element={<Singleticketdesc/>}/>
        </Routes>
          <Footer />
      
      </BrowserRouter>
      </Contextwrapper>
  );
}

export default App;
