import { format } from 'date-fns';


export const COLUMNS = [
    {
      Header: 'Loan Number',
      Footer: 'Loan Number',
      accessor: 'loanNumber',
      disableFilters: true
    },
    {
      Header: 'Customer Name',
      Footer: 'Customer Name',
      accessor: 'customerName'
    },
    {
      Header: 'Interest Rate',
      Footer: 'Interest Rate',
      accessor: 'interestRate'
    },
	{
      Header: 'Orginial Loan Amount',
      Footer: 'Orginial Loan Amount',
      accessor: 'originalLoanAmount'
    },
	{
      Header: 'Current Balance',
      Footer: 'Current Balance',
      accessor: 'currentBalance'
    },
    {
      Header: 'Loan Date',
      Footer: 'Loan Date',
      accessor: 'loanDate',
      Cell: ({ value }) => {
        return format(new Date(value), 'MM/dd/yyyy')
      }
    },
    {
      Header: 'Maturity Date',
      Footer: 'Maturity Date',
      accessor: 'maturityDate',
      Cell: ({ value }) => {
        return format(new Date(value), 'MM/dd/yyyy')
      }
    },{
      Header: 'LastPaymentDate',
      Footer: 'LastPaymentDate',
      accessor: 'lastPaymentDate',
      Cell: ({ value }) => {
        return format(new Date(value), 'MM/dd/yyyy')
      }
    }
   
  ]