import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PlanPicker from "./components/PlanPicker";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#DDDDDD] text-[#000000]">
      <Navbar />
      <PlanPicker />
      <Footer />
    </div>
  );
}

export default App;