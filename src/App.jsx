import styled from "styled-components"
import EstilosGlobais from "./EstilosGlobais/EstilosGlobais"
import Stepper from "./componentes/Stepper/Stepper"
import TituloPrincipal from "./componentes/TituloPrincipal/TituloPrincipal"
import BarraNavegacao from "./componentes/BarraNavegacao/BarraNavegacao"
import MensagemSucesso from "./componentes/MensagemSucesso/MensagemSucesso"
import Botao from "./componentes/Botao/Botao"
import Rodape from "./componentes/Rodape/Rodape"
import Captura from "./componentes/Captura/Captura"
import { useGeolocated } from "react-geolocated";
import { useState } from "react"

const Container = styled.section`
  width: 390px;
  max-width: 90%;
  margin: 56px auto;
  text-align: center;
  h2 {
    margin: 62px 0;
    color: #000;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  p {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    max-width: 300px;
    margin: 0 auto;
  }
`

function App() {
  const [fotoCapturada, setFotoCapturada] = useState(null)
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });

  const enviarCadastro = (evento) => {
    evento.preventDefault()
    const dados = {
      foto: fotoCapturada
    }

    if (isGeolocationEnabled && isGeolocationAvailable) {
      dados.coordenadas = coords
    }

    console.log(dados)
  }

  return (
    <>
      <EstilosGlobais />
      <BarraNavegacao />
      <TituloPrincipal />
      <Container>
        <Stepper />
        <h2>
          Reconhecimento facial
        </h2>
        <Captura aoCapturar={setFotoCapturada}/>
        <MensagemSucesso />

        <form onSubmit={enviarCadastro}>
          <Botao 
            $fluido 
            disabled={!fotoCapturada}
          >
            Quero abrir minha conta!
          </Botao>
        </form>
      </Container>
      <Rodape />
    </>
  )
}

export default App
