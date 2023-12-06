import React, { useState } from 'react';
import Maindish from '../MainDish/Maindish';
import Sidebar from '../Sidebar/Sidebar';

function MainPage() {
  const [selectedComponent, setSelectedComponent] = useState('dashboard');

  const handleSelectComponent = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div className="relative">
      <Sidebar onSelectComponent={handleSelectComponent} />
      <Maindish selectedComponent={selectedComponent} />
    </div>
  );
}

export default MainPage;