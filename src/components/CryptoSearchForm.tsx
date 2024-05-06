import { currencies } from "../data/inde";

const CryptoSearchForm = () => {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Coin</label>
        <select name="currency" id="currency">
          <option value="">--Select--</option>
          {currencies.map((currency) => (
            <option value={currency.code} key={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cryptocurrency">Coin</label>
        <select name="cryptocurrency" id="cryptocurrency">
          <option value="">--Select--</option>
        </select>
      </div>
      <input type="submit" value="Quote" />
    </form>
  );
};

export default CryptoSearchForm;
