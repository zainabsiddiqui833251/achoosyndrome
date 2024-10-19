import Header from "@/components/header";
import Intro from "@/components/intro";
import Factsstats from "@/components/facts&stats";
import Chart from "../components/chart";
import Triggers from "@/components/triggers";
import Symptoms from "@/components/symptoms";
import Strategies from "@/components/strategies";
import References from "@/components/references";


export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Factsstats />
      <Chart />
      <Triggers />
      <Symptoms />
      <Strategies />
      <References />
    </div>
  );
}
