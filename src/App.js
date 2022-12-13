import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewVacationPage from "./pages/NewVacationPage";
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new_vacation" element={<NewVacationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
