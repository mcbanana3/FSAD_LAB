import React from 'react'
import { Link } from "react-router-dom";

const Lab = () => {
  return (
   <div>
   <table border="2" width="70%">
     <thead>
       <tr>
         <th>S No</th>
         <th>Lab Program</th>
         <th>Lab Program Title</th>
       </tr>
     </thead>
     <tbody>
          <tr>
           <td>1</td>
           <td>
             <Link to="/Lab1">Lab1 </Link>
           </td>
           <td>CSS Grid</td>
         </tr>  
         <tr>
           <td>2</td>
           <td>
             <Link to="/Lab2">Lab2 </Link>
           </td>
           <td>Sysyem View and Mobile View</td>
         </tr>

          <tr>
           <td>3</td>
           <td>
             <Link to="/Lab3">Lab3 </Link>
           </td>
           <td>React State and Props</td>
         </tr>      
         <tr>
           <td>4</td>
           <td>
             <Link to="/Lab4">Lab4</Link>
           </td>
           <td>Redux</td>
         </tr>    
         <tr>
           <td>5</td>
           <td>
             <Link to="/Lab5">Lab5</Link>
           </td>
           <td>Bootstrap / Material-UI for designing</td>
         </tr> 
         <tr>
           <td>6</td>
           <td>
             <Link to="/Lab6">Lab6</Link>
           </td>
           <td>Transferring data with Axios / Fetch API in React</td>
         </tr> 
         <tr>
           <td>7</td>
           <td>
             <Link to="/Lab7">Lab7</Link>
           </td>
           <td>URL API Axios</td>
         </tr> 
     </tbody>
   </table>
 </div>
  )
}

export default Lab