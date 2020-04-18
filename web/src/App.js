import React from 'react';
import PromotionCard from './components/Promotion/Card/Card';

const App = () => {

  return (
    <div
      style={{
        maxWidth: 800,
        margin: '30px auto'
      }}
    >
      <PromotionCard promotion={promotion} />
    </div>
  );
}

export default App;
