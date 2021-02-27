import React from "react";
import Select from 'react-select';
import axios from 'axios';

const options = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' }
  ]
class BookAppoitnmentForm extends React.Component  {

    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            requestMessage:'',
            selectOptions : [],
            Patient_id: ""
          }
      }
    
      async getOptions(e){
        const res = await axios.get('http://localhost:8080/api/getAllPatient.php');
        const data = res.data;
    
        const options = data.map(d => ({
          "value" : d.id,
          "label" : d.id,
          
  
        }))
        
        this.setState({selectOptions: options})
       
    
      }
      async  getPatientDetails(id)
      {
        const res = await axios.get('http://localhost:8080/api/getPatient.php?id='+id);
        const data = res.data;
       console.log(data);
        document.getElementById("patient_first_name").value = data.first_name;
        document.getElementById("patient_last_name").value = data.last_name;
        document.getElementById("patient_email_address").value = data.email;
        document.getElementById("patient_phone").value = data.contact_number;

      }
      handleChange(e){
      
      this.getPatientDetails(e.value);
      }
      dateChange(e){
        var startDate = document.getElementById("start").value;
    var endDate = document.getElementById("end").value;
    
    if ( (new Date(startDate).getTime() > new Date(endDate).getTime())) {

        alert("End date should be greater than Start date");
        document.getElementById("end").value = "";
    }
       }
     
      componentDidMount(){
          this.getOptions()
      }

      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
   
        const article = {   
            "Patient_id" : data.get('patient_id'),
            "Patient_first_name" : data.get('patient_first_name'), 
            "Patient_last_name" : data.get('patient_last_name'), 
            "Patient_email" : data.get('patient_email_address'), 
            "Patient_phone" : data.get('patient_phone'), 
            "PrepNurse" : data.get('PrepNurse'), 
            "Physician" : data.get('Physician'), 
            "Start" : data.get('start'), 
            "End" : data.get('date'), 
            "ExaminationRoom" :data.get('ExaminationRoom')
                            };
                      
        const headers = { 
            'Content-Type': 'text/plain'
        };
        axios.post('http://localhost:8080/api/addAppointment.php', JSON.stringify(article), { headers })
            .then(response => { const requestMessage = response.data;this.setState({requestMessage: requestMessage});});

            event.target.reset();          
      }
    render() { 
      
    return(
        
        <div className="relative bg-white">


             <div className="mt-5 ">
            <form action="#" method="POST" onSubmit={this.handleSubmit}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 ">
                  <label htmlFor="patient_id" className="block text-sm font-medium text-gray-700">Select Patient ID </label>
                    <Select  name="patient_id" id="patient_id" 
                    options={this.state.selectOptions} onChange={this.handleChange.bind(this)} />
              
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                   
                      <label htmlFor="patient_first_name" className="block text-sm font-medium text-gray-700">Patient First name</label>
                      <input type="text" name="patient_first_name" id="patient_first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="patient_last_name" className="block text-sm font-medium text-gray-700">Patient Last name</label>
                      <input type="text" name="patient_last_name" id="patient_last_name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="patient_email_address" className="block text-sm font-medium text-gray-700">Patient Email address</label>
                      <input type="email" name="patient_email_address" id="patient_email_address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="patient_phone" className="block text-sm font-medium text-gray-700">Patient Phone Number</label> <label htmlFor="patient_phone" className="block text-sm font-medium text-gray-400"> (10 Digits Ex. 9875689876)</label>
                      <input type="tel" maxLength="10" pattern="[0-9]{10}" name="patient_phone" id="patient_phone" autoComplete="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="PrepNurse" className="block text-sm font-medium text-gray-700">Prep Nurse Name</label>
                      <input type="text" name="PrepNurse" id="PrepNurse" autoComplete="PrepNurse" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="Physician" className="block text-sm font-medium text-gray-700">Physician Name</label>
                      <input type="text" name="Physician" id="Physician" autoComplete="Physician" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 ">
                      <label htmlFor="ExaminationRoom" className="block text-sm font-medium text-gray-700">Examination Room</label>
                      <Select id="ExaminationRoom" name="ExaminationRoom"  options={options}  >
                     
                      </Select>
                    </div>
                    
                    
      
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="start" className="block text-sm font-medium text-gray-700">Start Date/Time</label>
                      <input type="datetime-local" name="start" id="start" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="end" className="block text-sm font-medium text-gray-700">End Date/Time</label>
                      <input type="datetime-local" name="end" id="end"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={this.dateChange.bind(this)}/>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Book Appoitnment
                  </button>
                </div>
                <span className="text-green-500"> { this.state.requestMessage}</span>
              </div>
            </form>
          </div>
    
            </div>
    );

}
}
export { BookAppoitnmentForm }; 