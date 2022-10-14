import Context from './Context';
import { useReducer } from 'react';
import reducer, { initState } from './Reducer';

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
