
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import {Route,BrowserRouter, Routes} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Employee from './Components/Employee';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Addemployee from './Components/Addemployee';

import EditEmployee from './Components/EditEmployee';
import Start from './Components/Start';
import EmployeeLogin from './EmployeeLogin';
import EmployeeDetail from './EmployeeDetail';


function App() {
  return (
    
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} > 
         <Route path='/employee' element={<Employee/>}/>
         <Route path='/profile' element={<Profile/>}/>
         <Route path='' element={<Home/>}/>
         <Route path='/create' element={<Addemployee/>}/>
         <Route path='/employeeEdit/:id' element={<EditEmployee/>}/>
         </Route> 
        <Route path="/login" element={<Login/>} />
        <Route path='/start' element={<Start/>}></Route>
         <Route path='/employeeLogin' element={<EmployeeLogin/>}></Route>
        <Route path='/employeedetail/:id' element={<EmployeeDetail/>}></Route>
        </Routes>
        </BrowserRouter>
       
     
      
    
    
    
    
  );
}

export default App;
