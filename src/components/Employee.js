
import {useState,useEffect} from 'react'


function Employees() {
  const [employee,setEmployee] = useState([])

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/register/',{
      'method':'GET',
      headers: {
        'Content-Type' : 'application/json',
      }
    })
    .then(resp=>resp.json())
    .then(employee=>{
      setEmployee(employee);
      console.log(employee);

    })
    .catch(error=>console.log(error))
    
  },[])


    
  return (
    <div>
              
        <h1>List Of Employees</h1>

<div>
  
  <table>
  <tr>
    <th>First Name</th>
    <th>Second Name</th>
    <th>Date Of Graduation</th>
    <th>Date Of Employment</th>
    <th>Position</th>
    <th>Salary</th>
    <th>Supervisor</th>
    <th>Employee Code</th>

</tr>
 <tbody>
   {employee.map((employee) =>

          <tr>
          <td>{employee.first_name}</td>
          <td>{employee.second_name}</td>
          <td>{employee.date_of_graduation}</td>
          <td>{employee.date_of_employment}</td>
          <td>{employee.position}</td>
          <td>{employee.salary}</td>
          <td>{employee.supervisor}</td>
          <td>{employee.employee_code}</td>
          </tr>
                    
    )}
  
    </tbody>
</table>


</div>      

</div>
);
  
}

export default Employees;