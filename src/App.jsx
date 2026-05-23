
import AppProvider from "./context/AppContext";
import Home from "./home/Home";

function App() {
  return (
    <>
      <AppProvider>
          <Home/>
      </AppProvider>
    </>
  );
}

export default App;
