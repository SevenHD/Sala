import React, {Component} from 'react';
import './App.css';
import { CustomerTable } from './components/CustomerTable'

class Customers extends Component {
    render() {
        return (
            <div className="App">
                <CustomerTable tabledata={this.state.customers} />
            </div>
          )
    }

    state = {
        customers: []
    };
    
    componentDidMount() {

        document.getElementById("homelink").classList.remove("active");
        document.getElementById("customerslink").classList.add("active");
        document.getElementById("loanslink").classList.remove("active");

          fetch('http://localhost:8080/FLPCustomerService-0.0.1-SNAPSHOT/flpcustomerservice/getCustomers')
        
            .then(res => res.json())
            .then((data) => {
                console.log("from api call 1" + data.custList);
                this.setState({ customers: data.custList })
            })
            .catch(console.log)
    }
}

export default Customers;