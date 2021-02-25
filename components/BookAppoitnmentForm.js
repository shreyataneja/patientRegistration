export default function BookAppoitnmentForm() {

 
      
    return(
        
        <div className="relative bg-white">
             
         
        
             <div className="mt-5 ">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
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
                      <input type="text" name="patient_email_address" id="patient_email_address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="patient_phone" className="block text-sm font-medium text-gray-700">Patient Phone Number</label>
                      <input type="text" name="patient_phone" id="patient_phone" autoComplete="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
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
                      <select id="ExaminationRoom" name="ExaminationRoom"  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>A</option>
                      <option>B</option>
                        <option>C</option>
                        <option>D</option>
                      </select>
                    </div>
                    
                    
      
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="start" className="block text-sm font-medium text-gray-700">Start Date/Time</label>
                      <input type="datetime-local" name="start" id="start" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="end" className="block text-sm font-medium text-gray-700">End Date/Time</label>
                      <input type="datetime-local" name="end" id="end"  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-200">
                  Book Appoitnment
                  </button>
                </div>
              </div>
            </form>
          </div>
    
            </div>
    );

}