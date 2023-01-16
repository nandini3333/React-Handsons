import React ,{Component} from 'react'
class Clcomp extends Component{
  render(){
     return (
       <div className="Clbox">
         <h1>This is created using class Component</h1>
         <div>This is done using external CSS</div>
         <div className="internal">This is done using Internal CSS</div>
       </div>
     );
}
}
export default Clcomp