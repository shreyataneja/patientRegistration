import Layout from "../components/Layout";
import {UpdateAppointmentForm} from "../components/UpdateAppointmentForm";


export default function UpdateAppointments({}) {

  return (
 
    <Layout title="Update Appointments">
  <div className="relative  text-center text-2xl mt-2 mb-10">
                  <span > Update Appointments</span>
                </div>
                <UpdateAppointmentForm></UpdateAppointmentForm>
    </Layout>
  );
}
