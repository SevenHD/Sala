import { format } from 'date-fns';

export const COLUMNS = [
    {
      Header: 'Customer Id',
      Footer: 'Customer Id',
      accessor: 'customerId',
      disableFilters: true
    },
    {
      Header: 'First Name',
      Footer: 'First Name',
      accessor: 'firstName'
    },
    {
      Header: 'Last Name',
      Footer: 'Last Name',
      accessor: 'lastName'
    },
    {
      Header: 'Date of Birth',
      Footer: 'Date of Birth',
      accessor: 'dob',
      Cell: ({ value }) => {
        return format(new Date(value), 'MM/dd/yyyy')
      }
    },
    {
      Header: 'SSN #',
      Footer: 'SSN #',
      accessor: 'ssn'
    },
    {
      Header: 'Phone',
      Footer: 'Phone',
      accessor: 'phoneNumber'
    }
   
  ]