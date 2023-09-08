import "./App.css";
import useBankInfo from "./hooks/useBanksInfo";
import BanksGrid from "./screens/BanksGrid";

function App() {
  const { loading } = useBankInfo();

  return (
    <>
      {loading ? <h6 className="loading-text">Cargando...</h6> : <BanksGrid />}
    </>
  );
}

export default App;
