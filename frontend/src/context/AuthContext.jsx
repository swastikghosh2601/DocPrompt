import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

// Hook to use auth in any component
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // null = not logged in

  const login = (userData) => {
    setUser(userData); // set user details when logged in
  };

  const logout = () => {
    setUser(null); // clear user on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
