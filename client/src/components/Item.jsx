import "./Item.css";

const Item = ({ PN, PNID, Description, MFR, MFRPN, Type, Tree }) => {
  return (
    <tr id="item-container">
      <td>{PN}</td>
      <td>{PNID}</td>
      <td>{Description}</td>
      <td>{Type}</td>
      <td>{MFR}</td>
      <td>{MFRPN}</td>
      <td>
        <select>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
      </td>
      <td>
        <select>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
      </td>
      <td>
        <select>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>
      </td>
      <td>{Tree}</td>
    </tr>
  );
};

export default Item;