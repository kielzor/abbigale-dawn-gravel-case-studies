import { useState } from "react";
import "./App.css";

import { Contact } from "./Contact/Contact";
import { Header } from "./Header/Header";
import { MainPage } from "./MainPage/MainPage";

function App() {
  const [page, setPage] = useState("main");
  const handlePageSwitch = (newPage) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <div className="main-section-width-control">
        <Header />
        {page === "main" && <MainPage handlePageSwitch={handlePageSwitch} />}
        {page !== "main" && (
          <div className="back-button" onClick={() => handlePageSwitch("main")}>
            Back to Main Page
          </div>
        )}
        {page === "bloom" && <div className="bloom-cs cs" />}
        {page === "nasa" && <div className="nasa-cs cs" />}
        {page === "inkbook" && <div className="inkbook-cs cs" />}
        {page !== "main" && (
          <div className="bottom-contact-container">
            <Contact />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
