import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 60px auto;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: "Segoe UI", Roboto, sans-serif;

  h1 {
    color: #222;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  h2 {
    color: #333;
    font-size: 1.4rem;
    margin-top: 30px;
  }

  input {
    padding: 8px 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 30%;
    transition: border-color 0.3s;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
`;

export const Botao = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
