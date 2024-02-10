import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NewVacationPage from "./pages/NewVacationPage";
import VacationPage from "./pages/VacationPage";
import Layout from "./Layout";

function App() {
  //add a comment
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/new_vacation" element={<NewVacationPage />} />
          <Route path="/vacation/:id" element={<VacationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
