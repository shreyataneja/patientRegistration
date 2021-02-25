export default function HomeButtons() {

 
      
    return(
        
        <div className="mt-40">
             <a href="/RegisterPatients">
             <button type="button" 
             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-200">
            
             Register Patients
            
            </button></a>
            <a href="/BookAppointment">
            <button type="button" 
             className="ml-40 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-200">
            
            Book New Appointments
            
            </button>
            </a>
            </div>
    );

}