import React, { createContext, useState } from 'react';

// Create the Context
export const Context = createContext(null);

export const AppProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <Context.Provider value={{ courses, setCourses, user, setUser }}>
      {children}
    </Context.Provider>
  );
};
