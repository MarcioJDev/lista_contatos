import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Contato = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
};

const contatosSlice = createSlice({
  name: "contatos",
  initialState: [] as Contato[],
  reducers: {
    adicionarContato: (state, action: PayloadAction<Contato>) => {
      state.push(action.payload);
    },
    removerContato: (state, action: PayloadAction<string>) => {
      return state.filter(c => c.id !== action.payload);
    },
    editarContato: (state, action: PayloadAction<Contato>) => {
      const index = state.findIndex(c => c.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    }
  }
});

export const { adicionarContato, removerContato, editarContato } = contatosSlice.actions;
export default contatosSlice.reducer;
