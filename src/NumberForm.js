import React,{ Component } from 'react'
class NumberForm extends Component{
    render(){
        return(
            <label>
                <div style={{float:'left'}}>
                    <span id="adults">ADULTS</span>
                    <br></br>
                    <input type="text" name="name" style={{width:70 + '%'}} />
                </div>
                <div style={{float:'right'}}>
                    <span id="children">CHILDREN</span>
                    <br></br>
                    <input type="text" name="name" style={{width:70 + '%'}}/>
                </div>
                
               
            </label>
           
        );
    }
}
export default NumberForm;