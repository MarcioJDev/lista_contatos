import { useDispatch } from "react-redux";
import { adicionarContato } from "../store/contatosSlice";
import { useState } from "react";
import { Botao } from "../styles";

export default function FormContato() {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(adicionarContato({ id: Date.now().toString(), nome, email, telefone }));
    setNome("");
    setEmail("");
    setTelefone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome completo" />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" />
      <input value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="Telefone" />
      <Botao type="submit">Adicionar</Botao>
    </form>
  );
}
