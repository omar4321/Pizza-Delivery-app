import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allcontext = useFirebase();

  const data = {
    allcontext,
  };
  return (
    <div>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
