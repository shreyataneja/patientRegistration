import Layout from "../components/Layout";
import {RegisterPatientForm} from "../components/RegisterPatientForm";


export default function RegisterPatients({}) {

  return (
 
    <Layout title="Register Patients">
  <div className="relative  text-center text-2xl mt-2 mb-10">
                  <span > Patient Registration</span>
                </div>
                <RegisterPatientForm></RegisterPatientForm>
    </Layout>
  );
}
