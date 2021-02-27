import Layout from "../components/Layout";
import {BookAppoitnmentForm} from "../components/BookAppoitnmentForm";



export default function BookAppointment() {
  return (
    <Layout title="Book New Appointment">
       <div className="relative  text-center text-2xl mt-2">
                  <span >Book New Appointment</span>
                </div>
                <BookAppoitnmentForm></BookAppoitnmentForm>
    </Layout>
  );
}
