import { createContext, useState } from "react";
export const appContext = createContext();
function AppProvider({ children }) {
  const [showMenu, setShowMenu] = useState(false);
  const [continuePage, setContinuePage] = useState(false);
  const [endAnimation, setEndAnimation] = useState(false);
  const [startWrite,setStartWrite]=useState(false)

  return (
    <>
      <appContext.Provider
        value={{
          showMenu,
          setShowMenu,
          continuePage,
          setContinuePage,
          endAnimation,
          setEndAnimation,
          startWrite,
          setStartWrite
        }}
      >
        {children}
      </appContext.Provider>
    </>
  );
}

export default AppProvider;
