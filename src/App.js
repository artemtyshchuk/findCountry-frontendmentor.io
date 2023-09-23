import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
