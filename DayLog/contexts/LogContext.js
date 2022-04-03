import React, {createContext, useState} from 'react';

const LogContext = createContext();

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([]);
  return <LogContext.Provider value={{logs}}>{children}</LogContext.Provider>;
}
export default LogContext;
