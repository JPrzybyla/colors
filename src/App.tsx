import React from 'react';
import InsertColor from "./components/InsertColor";
import './App.scss';
import ShowColor from "./components/ShowColor";

export const App: React.FC = () => {
  return (
    <div className="App">
      <InsertColor/>
      <ShowColor/>
    </div>
  );
}

export default App;
