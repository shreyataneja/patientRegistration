import Layout from "../components/Layout";
import HomeButtons from "../components/HomeButtons";

export default function Home() {
  return (
    <Layout title="">
       <div className="relative  text-center text-2xl mt-10">
                  <span > Patient Registration</span>
                </div>
    <HomeButtons></HomeButtons>
  </Layout>
  )
}
