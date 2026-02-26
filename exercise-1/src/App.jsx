import React from "react";
import Header from "./components/Header";
import Scores from "./components/Scores";
import {
  JAVA_RESULTS,
  PYTHON_RESULTS,
  HTML_RESULTS,
  ENGLISH_RESULTS,
} from "./data";

function App() {
  const batchName = "";

  return (
    <div className="app-root">
      <Header batchName={batchName} />

      <main className="scores-container">
        <Scores courseName="HTML" courseResults={HTML_RESULTS} />
        <Scores courseName="Java" courseResults={JAVA_RESULTS} />
        <Scores courseName="Python" courseResults={PYTHON_RESULTS} />
        <Scores courseName="English" courseResults={ENGLISH_RESULTS} />
      </main>
    </div>
  );
}

export default App;
