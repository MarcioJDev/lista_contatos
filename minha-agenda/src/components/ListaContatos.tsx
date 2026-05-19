import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import { removerContato } from "../store/contatosSlice";
import { Botao } from "../styles";

export default function ListaContatos() {
  const contatos = useSelector((state: RootState) => state.contatos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Lista de Contatos</h2>
      <ul>
        {contatos.map(c => (
          <li key={c.id}>
            <strong>{c.nome}</strong> - {c.email} - {c.telefone}
            <Botao onClick={() => dispatch(removerContato(c.id))}>Remover</Botao>
          </li>
        ))}
      </ul>
    </div>
  );
}
