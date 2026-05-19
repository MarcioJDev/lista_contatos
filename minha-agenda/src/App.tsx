import { Container } from "./styles";
import ListaContatos from "./components/ListaContatos";
import FormContato from "./components/FormContato";

function App() {
  return (
    <Container>
      <h1>Agenda de Contatos</h1>
      <FormContato />
      <ListaContatos />
    </Container>
  );
}

export default App;
