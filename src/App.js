import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewVacationPage from "./pages/NewVacationPage";
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from "./Layout";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/new_vacation" element={<NewVacationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
