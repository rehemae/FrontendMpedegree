
import {useState,useEffect} from 'react'


function Employees() {
  const [employees,setEmployees] = useState([])


  useEffect(()=>{
    fetchRegister()
  })

  const fetchRegister=()=>{
    fetch('http://127.0.0.1:8000/register/',{
      'method':'GET',
      headers: {
        'Content-Type' : 'application/json',
      }
    })
    .then(res=>res.json())
    .then(res=>{
      setEmployees(res)
      console.log(res)

    })
    .catch(error=>console.log(error))
    
  }


    
  return (
    <div>
              
        <h1>Employees</h1>

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
   {employees.map((emp) =>

          <tr>
          <td>{emp.first_name}</td>
          <td>{emp.second_name}</td>
          <td>{emp.date_of_graduation}</td>
          <td>{emp.date_of_employment}</td>
          <td>{emp.position}</td>
          <td>{emp.salary}</td>
          <td>{emp.supervisor}</td>
          <td>{emp.employee_code}</td>
          </tr>
                    
    )}
  
    </tbody>
</table>


</div>      

</div>
);
  
}

export default Employees;