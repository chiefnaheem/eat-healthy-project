import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Header, MainContainer, CreateContainer} from './components'
const App = () => {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className="mt-24 p-8 w-full">
        <Routes>
          <Route path="/" element={<MainContainer />} />
          <Route path="/post" element={<CreateContainer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
