import Layout from "../components/Layout";
import {UpdatePatientForm} from "../components/UpdatePatientForm";


export default function UpdatePatients({}) {

  return (
 
    <Layout title="Update Patients">
  <div className="relative  text-center text-2xl mt-2 mb-10">
                  <span > Update Patient</span>
                </div>
                <UpdatePatientForm></UpdatePatientForm>
    </Layout>
  );
}
