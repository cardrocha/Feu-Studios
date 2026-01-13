import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />

      <main
        style={{
          padding: "40px",
          backgroundColor: "#f8fafc",
          minHeight: "100vh",
        }}
      >
        <h2>Bem-vindo à Feu Studios</h2>

        <p>
          A Feu Studios é uma empresa fictícia especializada no desenvolvimento de
          jogos digitais, focada em criar experiências inovadoras e imersivas
          para seus usuários.
        </p>

        <p>
          O projeto tem como objetivo demonstrar a aplicação prática de conceitos
          de desenvolvimento front-end utilizando React e TypeScript.
        </p>
      </main>
    </>
  );
}

export default Home;
