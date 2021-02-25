import Layout from "../components/Layout";
import RegisterPatientForm from "../components/RegisterPatientForm";


export default function RegisterPatients({data}) {
  console.log(data);
  return (
 
    <Layout title="Register Patients">
  <div className="relative  text-center text-2xl mt-2 mb-10">
                  <span > Patient Registration</span>
                </div>
                <RegisterPatientForm></RegisterPatientForm>
    </Layout>
  );
}
export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:8080/api/getAllPatient.php`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {data}, // will be passed to the page component as props
  }
}
