export default function HomeButtons() {

 
      
    return(
        <div>
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-10">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block text-gray-700 xl:inline">Online </span> 
          <span className="block text-indigo-600  xl:inline"> Patient Registration</span>
           
          </h1>
          <div className="mt-5 sm:mt-8 sm:flex  sm:justify-center lg:justify-start lg:space-x-16">
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="space-y-4">
            <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="/RegisterPatients" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Register Patients
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
            <a href="/AllPatients"  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
             
                  View All Patients 

                  </a></div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="/UpdatePatients"  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
           
                  Update Patient Details
                  
                  </a>
                  </div>
                  </div>
            </div>
            <div className="mt-5 sm:mt-8 sm:flex  sm:justify-center lg:justify-start">
                <div className="space-y-4">
            <div className="mt-3 sm:mt-0 sm:ml-3">
            <a href="/BookAppointment" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                  Book New Appointments
              </a>
            </div>
            
            <div className="mt-3 sm:mt-0 sm:ml-3">
           
            <a href="/AllAppointments" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
      
            View All Appointments 
          
            </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3"> 
            <a href="/UpdateAppointments" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
      
            Update Appointment
            
            </a>
            </div>
            </div>
            </div>
          </div>
        </div>
      </main>


      </div>
    );

}