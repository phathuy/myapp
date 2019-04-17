import React,{ Component } from 'react'
class DateForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            checkin: '2019-04-18',
            checkout:'2019-04-18'
          }
    }

    render(){
        return(
                <label>
                    <p className="checkin">CHECK-IN</p>
                    <input type="date" onChange={event => this.setState({checkin: event.target.value})} id="start" name="trip-start"value={this.state.checkin}
                    min="2019-01-01" max="2019-12-31"></input><i class="material-icons">
                    calendar_today
                    </i>
                    <p className="checkout">CHECK-OUT</p>
                    <input type="date" onChange={event => this.setState({checkout: event.target.value})} id="end" name="trip-start"value={this.state.checkout}
                    min="2019-01-01" max="2019-12-31"></input>
                 </label>
                    
        );
    }
}
export default DateForm;