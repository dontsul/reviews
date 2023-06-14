import styles from './card.module.css';
import { AiFillStar } from 'react-icons/ai';
import { useState } from 'react';

export const Card = ({ review }) => {
  const {
    Keyword,
    Rating,
    ReviewText,
    ReviewedAt,
    OwnerAnswer,
    ProfileName,
    ProfileURL,
    ProfileImageURL,
    ReviewsCount,
    PhotosCount,
    IsLocalGuide,
  } = review;

  const [isTruncated, setIsTruncated] = useState(true);

  const maxLength = 100;

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const displayText = isTruncated ? ReviewText.slice(0, maxLength) : ReviewText;

  const starIcons = Array.from({ length: Rating }, (_, index) => (
    <AiFillStar size={20} color="#FBBC04" key={index} />
  ));

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          {ProfileImageURL ? (
            <img src={ProfileImageURL} alt={ProfileName} />
          ) : (
            <p>{ProfileName.slice(0, 1)}</p>
          )}
        </div>
      </div>
      <div className={styles.name}>
        <div className={styles.name}>{ProfileName}</div>
      </div>
      <div className={styles.body}>
        <div className={styles.star}>{starIcons}</div>
        <div className={styles.text}>
          {displayText}
          {ReviewText.length > maxLength && isTruncated ? '...' : ''}
        </div>
        <div className={styles.wrapBtn}>
          {ReviewText.length > maxLength && (
            <button className="" onClick={toggleTruncate}>
              {isTruncated ? 'Read More' : 'Read Less'}
            </button>
          )}
        </div>
        <div className={styles.google}>
          <svg
            width="74"
            height="24"
            viewBox="0 0 74 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.24 8.19V10.65H15.12C14.94 12.03 14.48 13.04 13.78 13.75C12.92 14.61 11.58 15.55 9.24 15.55C5.62 15.55 2.79 12.63 2.79 9.01C2.79 5.39 5.62 2.47 9.24 2.47C11.19 2.47 12.62 3.24 13.67 4.23L15.4 2.5C13.94 1.08 11.98 0 9.24 0C4.28 0 0.110001 4.04 0.110001 9C0.110001 13.96 4.28 18 9.24 18C11.92 18 13.94 17.12 15.52 15.48C17.14 13.86 17.65 11.57 17.65 9.73C17.65 9.16 17.61 8.63 17.52 8.19H9.24Z"
              fill="#4285F4"
            />
            <path
              d="M25 6.18994C21.79 6.18994 19.17 8.62994 19.17 11.9999C19.17 15.3399 21.79 17.8099 25 17.8099C28.21 17.8099 30.83 15.3499 30.83 11.9999C30.83 8.62994 28.21 6.18994 25 6.18994ZM25 15.5199C23.24 15.5199 21.72 14.0699 21.72 11.9999C21.72 9.90994 23.24 8.47994 25 8.47994C26.76 8.47994 28.28 9.90994 28.28 11.9999C28.28 14.0699 26.76 15.5199 25 15.5199Z"
              fill="#EA4335"
            />
            <path
              d="M53.58 7.48994H53.49C52.92 6.80994 51.82 6.18994 50.43 6.18994C47.53 6.18994 45 8.71994 45 11.9999C45 15.2599 47.53 17.8099 50.43 17.8099C51.82 17.8099 52.92 17.1899 53.49 16.4899H53.58V17.2999C53.58 19.5199 52.39 20.7099 50.48 20.7099C48.92 20.7099 47.95 19.5899 47.55 18.6399L45.33 19.5599C45.97 21.0999 47.66 22.9899 50.48 22.9899C53.47 22.9899 56 21.2299 56 16.9399V6.48994H53.58V7.48994ZM50.65 15.5199C48.89 15.5199 47.55 14.0199 47.55 11.9999C47.55 9.94994 48.89 8.47994 50.65 8.47994C52.39 8.47994 53.75 9.97994 53.75 12.0199C53.76 14.0499 52.39 15.5199 50.65 15.5199Z"
              fill="#4285F4"
            />
            <path
              d="M38 6.18994C34.79 6.18994 32.17 8.62994 32.17 11.9999C32.17 15.3399 34.79 17.8099 38 17.8099C41.21 17.8099 43.83 15.3499 43.83 11.9999C43.83 8.62994 41.21 6.18994 38 6.18994ZM38 15.5199C36.24 15.5199 34.72 14.0699 34.72 11.9999C34.72 9.90994 36.24 8.47994 38 8.47994C39.76 8.47994 41.28 9.90994 41.28 11.9999C41.28 14.0699 39.76 15.5199 38 15.5199Z"
              fill="#FBBC05"
            />
            <path d="M58 0.23999H60.51V17.81H58V0.23999Z" fill="#34A853" />
            <path
              d="M68.26 15.5199C66.96 15.5199 66.04 14.9299 65.44 13.7599L73.21 10.5499L72.95 9.88994C72.47 8.58994 70.99 6.18994 67.98 6.18994C64.99 6.18994 62.5 8.53994 62.5 11.9999C62.5 15.2599 64.96 17.8099 68.26 17.8099C70.92 17.8099 72.46 16.1799 73.1 15.2399L71.12 13.9199C70.46 14.8799 69.56 15.5199 68.26 15.5199ZM68.08 8.36994C69.11 8.36994 69.99 8.89994 70.28 9.64994L65.03 11.8199C65.03 9.37994 66.76 8.36994 68.08 8.36994Z"
              fill="#EA4335"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
