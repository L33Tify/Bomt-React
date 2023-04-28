import "./Header.css";

const Header = () => {
  return (
    <div id="header">
      <button>Queries</button>
      <button>Logs</button>
      <button>Reports</button>
      <button>Users</button>
      <input type="text" placeholder="Search" />
      <h2>Username online</h2>
      <button>Logout</button>
    </div>
  );
};

export default Header;
