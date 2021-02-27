import React from "react";
import Layout from "../components/Layout";
import axios from 'axios';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';

export default class AllAppointments extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      users: [],
      loading: true
    }
  }
  async getUsersData() {
    const res = await axios.get('http://localhost:8080/api/getAllAppointment.php')
    console.log(res.data)
    this.setState({ loading: false, users: res.data })
  }
  componentDidMount() {
    this.getUsersData()
  }


  render() {
    const columns = [{
      Header: 'Appointment ID',
      accessor: 'AppointmentID',
    }
    , {
      Header: 'Patient Id',
      accessor: 'Patient_id',
    } 
    , {
      Header: 'Patient First Name',
      accessor: 'Patient_first_name',
    }

      , {
      Header: 'Patient Last Name',
      accessor: 'Patient_last_name',
    }
      , {
      Header: 'Patient Phone',
      accessor: 'Patient_phone',
    },
    {
      Header: 'Patient Email',
      accessor: 'Patient_email',
    },
    {
      Header: 'PrepNurse',
      accessor: 'PrepNurse',
    }
      ,
    {
      Header: 'Physician',
      accessor: 'Physician',
    }
      ,
    {
      Header: 'Appointment Start',
      accessor: 'Start',
    }
      ,
    {
      Header: 'Appointment End',
      accessor: 'End',
    }
      ,
    {
      Header: 'Examination Room',
      accessor: 'ExaminationRoom',
    }
     
    ]
    return (
      <Layout title="AllPatients">
        <div className="relative bg-white">
          <span className="text-indigo-700 mb-12 text-lg">All Appointment Details</span>

          <ReactTable
            data={this.state.users}
            columns={columns}
          />

        </div>
      </Layout>
    );

  }
}
