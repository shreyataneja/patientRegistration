import Layout from "../components/Layout";
import {UpdatePatientForm} from "../components/UpdatePatientForm";


export default function UpdatePatients({}) {

  return (
 
    <Layout title="Update Patients">
  <div className="relative  text-center text-2xl mt-2 mb-10">
                  <span > Update Patient</span>
                </div>
                <div className="relative  text-center text-l mt-2 mb-10">
                  <span >Change the fields you want to update and click Update!</span>
                </div>
                <UpdatePatientForm></UpdatePatientForm>
    </Layout>
  );
}
