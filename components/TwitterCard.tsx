import React from 'react';
import Image from 'next/image'
import styles from './TwitterCard.module.scss';

export interface TwitterCardContent {
  img: string;
  username: string;
  name: string;
  text: string;
  date: string;
}

interface TwitterCardProps {
  card: TwitterCardContent;
}

export const TwitterCard: React.FC<TwitterCardProps> = ({card}) => {
  return (
    <div className={styles.twitterCard}>
      <div>
        <div className={styles.twitterProfileSection}>
        <div className={styles.twitterImage}><Image className={styles.twitterImage} src={card.img} width={44} height={44} /></div>
      <div>
      <span>{card.name}</span>
      <span className={styles.username}>@{card.username}</span>
      </div>
      </div>
      <div className={styles.twitterLogo}><Image src='/images/twitter.svg' width={20} height={20} alt='twitter' /></div>

      <p className={styles.twitterCaption}>{card.text}</p>
      </div>
      <p className={styles.twitterDate}>{card.date}</p>
    </div>
  )
}