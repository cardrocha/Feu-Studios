function Header() {
  return (
    <header
      style={{
        backgroundColor: "#0f172a",
        padding: "20px",
        color: "#ffffff",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Feu Studios</h1>

      <nav>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li>Home</li>
          <li>Jogos</li>
          <li>Novidades</li>
          <li>Sobre</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
