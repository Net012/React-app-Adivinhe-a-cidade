import { useState, useEffect } from "react";
import imagem1 from "../images/imagem1.jpeg";
import imagem2 from "../images/imagem2.jpeg";
import imagem3 from "../images/imagem3.jpeg";
import imagem4 from "../images/imagem4.jpeg";
import imagem5 from "../images/imagem5.jpeg";

function App() {
  const respostaCerta = "pelotas";
  let [resultado, setResultado] = useState("");
  let [contador, setContador] = useState(1);
  let [resposta, setResposta] = useState("");

  function testar(e) {
    e.preventDefault();
    if (resposta.toLowerCase() === respostaCerta) {
      setResultado(<h4 className="text-success m-5">Você acertou!</h4>);
    } else {
      setResultado(<h4 className="text-danger m-5">Você errou!</h4>);
    }
  }

  function Contador() {
    if (contador >= 4) {
      setContador(1);
    } else {
      setContador(contador + 1);
    }
  }

  return (
    <>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <div className="navbar-text d-flex align-items-center">
            <h3 className="m-3">Adivinhe a Cidade</h3>
          </div>
        </div>
      </nav>

      <main>
        <div className="container d-flex justify-content-center mt-4">
          <h2 className=" px-4 py-1 border border-dark text-black">
            Tente adivinhar que cidade é essa!
          </h2>
        </div>
        <div className="container d-flex justify-content-center">
          <form className="border border-black p-3">
            <div className="d-flex justify-content-center">
              <img
                src={
                      contador === 1
                    ? imagem1
                    : contador === 2
                    ? imagem2
                    : contador === 3
                    ? imagem3
                    : contador === 4
                    ? imagem4
                    : imagem5
                }
                onClick={Contador}
              />
            </div>

            <div className="mt-5 d-flex align-items-center">
              <label htmlFor="">Nome da cidade:</label>
              <input
                className="mx-3"
                type="text"
                onChange={(e) => setResposta(e.target.value)}
              />
              <input
                className="btn btn-primary"
                type="submit"
                value="Enviar Resposta"
                onClick={(e) => testar(e)}
              />
            </div>

            <div className="d-flex">
              <h2 className="mt-4">Resultado:</h2>
              {resultado}
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
