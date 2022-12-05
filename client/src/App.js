import { useState, useEffect } from "react";
import { CheckSession } from "./services/Auth";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogOut = () => {
    //Reset all auth related state and clear localStorage
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken();
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Header
          handleLogOut={handleLogOut}
          user={user}
          authenticated={authenticated}
        />
      </header>
      <main className="App-main">
        <Main
          setUser={setUser}
          toggleAuthenticated={toggleAuthenticated}
          user={user}
          authenticated={authenticated}
        />
      </main>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
