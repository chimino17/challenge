import "./BanksGrid.css";
import { useSelector } from "react-redux";
import { BankCard } from "../components/BankCard";

function BanksGrid() {
  const banksData = useSelector((state) => state.banks.data);
  return (
    <>
      {banksData ? (
        <div>
          <h4 className="heading">Bancos en México</h4>
          <div className="container-grid">
            {banksData.map((banks) => {
              return (
                <div key={banks.bankName}>
                  <BankCard
                    age={banks.age}
                    bankName={banks.bankName}
                    description={banks.description}
                    url={banks.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="loading-text">Ups, algo salió mal</h2>
          <p className="additional-text">
            Por favor vuelve a intentarlo más tarde.
          </p>
        </div>
      )}
    </>
  );
}

export default BanksGrid;
