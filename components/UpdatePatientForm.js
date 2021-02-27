import React from "react";
import Select from 'react-select';
import axios from 'axios';


class UpdatePatientForm extends React.Component 
{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            requestMessage:'',
            selectOptions : [],
            Patient_id: ""
        }
      }
      componentDidMount(){
        this.getOptions()
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

      document.getElementById("first_name").value = data.first_name;
      document.getElementById("last_name").value = data.last_name;
      document.getElementById("email_address").value = data.email;
      document.getElementById("phone").value = data.contact_number;
      document.getElementById("sex").value = data.sex;
      document.getElementById("age").value = data.age;
      document.getElementById("height").value = data.height;
      document.getElementById("weight").value = data.weight;
      document.getElementById("InsuranceID").value = data.InsuranceID;
      document.getElementById("street_address").value = data.street_address;
      document.getElementById("city").value = data.city;
      document.getElementById("state").value = data.province;
      document.getElementById("postal_code").value = data.postal;
    }
    handleChange(e){
      
      this.getPatientDetails(e.value);
      }
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
   
        const article = {   "id" : data.get('patient_id'),
                            "first_name" : data.get('first_name'), 
                            "last_name" : data.get('last_name'), 
                            "sex" : data.get('sex'), 
                            "contact_number" : data.get('phone'), 
                            "email" : data.get('email_address'), 
                            "age" : data.get('age'), 
                            "weight" : data.get('weight'), 
                            "height" : data.get('height'), 
                            "InsuranceID" :data.get('InsuranceID'),
                            "street_address" : data.get('street_address'), 
                            "city" : data.get('city'),
                            "province" : data.get('state'),
                            "postal" : data.get('postal_code')
                            };
                         console.log(JSON.stringify(article));  
        const headers = { 
            'Content-Type': 'text/plain'
        };
        axios.post('http://localhost:8080/api/updatePatient.php', JSON.stringify(article), { headers })
            .then(response => {const requestMessage = response.data;this.setState({requestMessage: requestMessage});});

            event.target.reset();    
      }
    render() { 
    return(
        
  
        
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
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                      <input type="text" required name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                      <input type="text" required name="last_name" id="last_name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                      <input type="email" required name="email_address" id="email_address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label> <label htmlFor="patient_phone" className="block text-sm font-medium text-gray-400"> (10 Digits Ex. 9875689876)</label>
                      <input type="tel" required maxLength="10" pattern="[0-9]{10}" name="phone" id="phone" autoComplete="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="sex" className="block text-sm font-medium text-gray-700">Sex</label>
                      <select id="sex" name="sex" autoComplete="sex" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>Female</option>
                      <option>Male</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                      <input type="number" required name="age" id="age" autoComplete="age" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height (in CM)</label>
                      <input type="number" name="height" id="height" autoComplete="height" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight (in Pounds)</label>
                      <input type="number" name="weight" id="weight" autoComplete="weight" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="InsuranceID" className="block text-sm font-medium text-gray-700">Insurance ID</label>
                      <input type="text" required name="InsuranceID" id="InsuranceID" autoComplete="InsuranceID" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
                      <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                      
                      </select>
                    </div>
      
                    <div className="col-span-6">
                      <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
                      <input type="text" required name="street_address" id="street_address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                      <input type="text" required name="city" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                      <input type="text" required name="state" id="state" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                      <input type="text" required name="postal_code" id="postal_code" autoComplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Update Patient Details
                  </button>
                </div>
                <span className="text-green-500"> { this.state.requestMessage}</span>
              </div>
            </form>
          </div>
    
           
    );

}
}
export { UpdatePatientForm }; 