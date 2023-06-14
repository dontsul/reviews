import { Card } from '../card/Card';
import styles from './listCard.module.css';

export const ListCard = ({ reviews, getMoreReviews }) => {
  return (
    <div>
      {reviews.length === 0 && <p className={styles.loading}>Loading...</p>}
      <div className={styles.listCard}>
        {reviews.length !== 0 &&
          reviews.map((review, i) => {
            return <Card key={i} review={review} />;
          })}
      </div>
      {reviews.length !== 0 && (
        <div className={styles.loadMoreWrapBtn}>
          <button onClick={() => getMoreReviews()}>Load more</button>
        </div>
      )}
    </div>
  );
};
