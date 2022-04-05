import React, {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
const LogContext = createContext();

export function LogContextProvider({children}) {
  const [logs, setLogs] = useState([
    {
      id: uuidv4(),
      title: 'Log 03',
      body: 'Log 03',
      date: new Date().toDateString(),
    },
    {
      id: uuidv4(),
      title: 'Log 02',
      body: 'Log 02',
      date: new Date(Date.now() - 1000 * 60 * 3).toDateString(),
    },
    {
      id: uuidv4(),
      title: 'Log 3',
      body: 'Log 3',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toDateString(),
    },
    {
      id: uuidv4(),
      title: 'Log 4',
      body: 'Log 4',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4).toDateString(),
    },
    {
      id: uuidv4(),
      title: 'Log 5',
      body: 'Log 5',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toDateString(),
    },
    {
      id: uuidv4(),
      title: 'Log 6',
      body: 'Log 6',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6).toDateString(),
    },
    {
      id: uuidv4(),
      title: 'Log 7',
      body: 'Log 7',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toDateString(),
    },
    {
      id: uuidv4(),
      title: 'Log 8',
      body: 'Log 8',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 8).toDateString(),
    },
    {
      id: uuidv4(),
      title: 'Log 9',
      body: 'Log 9',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 9).toDateString(),
    },
    {
      id: uuidv4(),
      title: 'Log 10',
      body: 'Log 10',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toDateString(),
    },
    {
      id: uuidv4(),
      title: 'Log 11',
      body: 'Log 11',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 11).toDateString(),
    },
  ]);
  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };
  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
}
export default LogContext;
