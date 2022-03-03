import React, { createContext } from 'react';

import useFirebase from '../hooks/useFirebase';
import useService from '../hooks/useService';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const { service } = useService();
  const allcontext = useFirebase();

  const data = {
    allcontext,
    service,
  };
  return (
    <div>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
