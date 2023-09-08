import "./BankCard.css";

export function BankCard(props) {
  const { age, bankName, description, url } = props;
  return (
    <div className="card">
      <img src={url} alt={bankName} />
      <h3>{bankName}</h3>
      <p>Antiguedad de {age} años</p>
      <p>{description}</p>
    </div>
  );
}
