export default function RegisterPatientForm() {

 
      
    return(
        
  
        
          <div className="mt-5 ">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                      <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                      <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                      <input type="text" name="email_address" id="email_address" autoComplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                      <input type="text" name="phone" id="phone" autoComplete="phone" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
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
                      <input type="text" name="age" id="age" autoComplete="age" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="height" className="block text-sm font-medium text-gray-700">Height</label>
                      <input type="text" name="height" id="height" autoComplete="height" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
                      <input type="text" name="weight" id="weight" autoComplete="weight" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label htmlFor="InsuranceID" className="block text-sm font-medium text-gray-700">Insurance ID</label>
                      <input type="text" name="InsuranceID" id="InsuranceID" autoComplete="InsuranceID" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country / Region</label>
                      <select id="country" name="country" autoComplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
      
                    <div className="col-span-6">
                      <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
                      <input type="text" name="street_address" id="street_address" autoComplete="street-address" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                      <input type="text" name="city" id="city" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                      <input type="text" name="state" id="state" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
      
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                      <input type="text" name="postal_code" id="postal_code" autoComplete="postal-code" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-200">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
    
           
    );

}