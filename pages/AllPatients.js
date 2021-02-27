import React from "react";
import Layout from "../components/Layout";
import axios from 'axios';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

export default class AllPatients extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: true
    }
  }
  async getUsersData() {
    const res = await axios.get('http://localhost:8080/api/getAllPatient.php')
   
    this.setState({ loading: false, users: res.data })
  }
  componentDidMount() {
    this.getUsersData()
  }


  render() {
    const columns = [{
      Header: 'ID',
      accessor: 'id',
    }
      , {
      Header: 'First Name',
      accessor: 'first_name',
    }

      , {
      Header: 'Last Name',
      accessor: 'last_name',
    }, {
      Header: 'Sex',
      accessor: 'sex',
    }
      , {
      Header: 'Phone',
      accessor: 'contact_number',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Age',
      accessor: 'age',
    }
      ,
    {
      Header: 'Weight',
      accessor: 'weight',
    }
      ,
    {
      Header: 'Height',
      accessor: 'height',
    }
      ,
    {
      Header: 'Insurance ID',
      accessor: 'InsuranceID',
    }
      ,
    {
      Header: 'Street Address',
      accessor: 'street_address',
    }
      ,
    {
      Header: 'City',
      accessor: 'city',
    }
      ,
    {
      Header: 'Province',
      accessor: 'province',
    }
      ,
    {
      Header: 'Postal',
      accessor: 'postal',
    }
    ]
    return (
      <Layout title="AllPatients">
        <div className="relative bg-white">
          <span className="text-indigo-700 mb-12 text-lg">All Patients Details</span>

          <ReactTable
            data={this.state.users}
            columns={columns}
          />

        </div>
      </Layout>
    );

  }
}
