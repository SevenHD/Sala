import React, {Component} from 'react';
import './App.css';
import { LoanTable } from './components/LoanTable'

class Loans extends Component {
    render() {
        return (
            <div className="App">
                <LoanTable tabledata={this.state.loans} />
            </div>
          )
    }

    state = {
        loans: []
    };

    

    componentDidMount() {

        document.getElementById("homelink").classList.remove("active");
        document.getElementById("customerslink").classList.remove("active");
        document.getElementById("loanslink").classList.add("active");

          fetch('http://localhost:8050/FLPLoanService-0.0.1-SNAPSHOT/flploanservice/getCustomerLoans')
        
            .then(res => res.json())
            .then((data) => {
                console.log("from api call 1" + data.custLoanList);
                this.setState({ loans: data.custLoanList })
            })
            .catch(console.log)
    }
}

export default Loans;