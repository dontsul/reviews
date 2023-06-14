import './App.css';

import { useState, useEffect } from 'react';
import { getReviews } from './utils/getReviews';
import { ListCard } from './components/listCard/ListCard';

function App() {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (reviews.length === 0) {
      getReviews(page)
        .then((data) => {
          setReviews(data);
        })
        .catch((error) => {
          console.log('Eroror');
        });
    }
  }, []);

  const getMoreReviews = () => {
    setPage((prevState) => prevState + 1);

    getReviews(page + 1)
      .then((data) => {
        setReviews([...reviews, ...data]);
      })
      .catch((error) => {
        console.log('Eroror');
      });
  };

  return (
    <div className="App">
      <ListCard reviews={reviews} getMoreReviews={getMoreReviews} />
    </div>
  );
}

export default App;
