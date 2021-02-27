import React, { useState } from "react";
import axios from 'axios';


class RegisterPatientForm extends React.Component 
{
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            requestMessage:''
        }
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
   
        const article = {   
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
        axios.post('http://localhost:8080/api/addPatient.php', JSON.stringify(article), { headers })
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
                      <input type="number"  name="weight" id="weight" autoComplete="weight" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
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
                    Save Patient Details
                  </button>
                </div>
                <span className="text-green-500"> { this.state.requestMessage}</span>
              </div>
            </form>
          </div>
    
           
    );

}
}
export { RegisterPatientForm }; 