import Header from "@/components/Header";
import PeriodSelector from "@/components/PeriodSelector";
import PlanSelector from "@/components/PlanSelector";

export default function Home() {
  return (
    <main className="md:flex md:flex-col md:h-screen">
      <Header />
      <PeriodSelector />
      <PlanSelector />
    </main>
  );
}
