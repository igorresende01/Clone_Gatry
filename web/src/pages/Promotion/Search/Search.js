import React, { useEffect, useState } from 'react';
import PromotionCard from '../../../components/Promotion/Card/Card';
import axios from 'axios';

const PagePromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);
  const titlePromotionWrapper = 'Gatry Clone || ReactJs';
  useEffect(() => {
    axios.get('http://localhost:5000/promotions?_embed=comments')
      .then((response) => {
        setPromotions(response.data);
      })
  }, []);

  return (
    <div
      style={{
        maxWidth: 800,
        margin: '30px auto'
      }}
    >
      <h3 className="promotion-title__wrapper">{titlePromotionWrapper}</h3>
      {promotions.map((promotion) => (
        <PromotionCard key={promotion.id} promotion={promotion} />
      ))}
    </div>
  );
}

export default PagePromotionSearch;