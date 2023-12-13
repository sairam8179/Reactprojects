// function Table(){
//     return(
//         <div>
//     <h3> this is a react App</h3>
//     <table>
//       <tr>
//       <th>ID</th>
//       <th>Brand</th>
//       <th>Model</th>
//       <th>Price</th>
//       </tr>
//       <tr>
//         <td>1</td>
//         <td>Apple</td>
//         <td>15</td>
//         <td>80K</td>
//       </tr>
//       <tr>
//         <td>2</td>
//         <td>Samsung</td>
//         <td>S22</td>
//         <td>60K</td>
//       </tr>
//       <tr>
//         <td>3</td>
//         <td>Vivo</td>
//         <td>V27</td>
//         <td>35K</td>
//       </tr>
//       <tr>
//         <td>4</td>
//         <td>Iqoo</td>
//         <td>11</td>
//         <td>65k</td>
//       </tr>
//     </table>
//     <ol> <h3>Things to learn for a react developer</h3>
//       <li>Front End</li>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JS</li>
//       <li>React</li>
//     </ol>
//   </div>
//     )
// }
// export default Table

import { Component } from "react";

class Tables extends Component{
    render(){
        return(
            <div>
    <h3> this is a react App</h3>
    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"/>
    <table>
      <tr>
      <th>ID</th>
      <th>Brand</th>
      <th>Model</th>
      <th>Price</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Apple</td>
        <td>15</td>
        <td>80K</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Samsung</td>
        <td>S22</td>
        <td>60K</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Vivo</td>
        <td>V27</td>
        <td>35K</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Iqoo</td>
        <td>11</td>
        <td>65k</td>
      </tr>
    </table>
    <ol> <h3>Things to learn for a react developer</h3>
      <li>Front End</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
      <li>React</li>
    </ol>
  </div>
        )
    }
}
export default Tables