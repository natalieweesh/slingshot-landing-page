import React from 'react';
import { TwitterCard, TwitterCardContent } from './TwitterCard';
import styles from './TwitterSection.module.scss';

const fakeTwitterData: TwitterCardContent[] = [
  {
    name: 'First Last',
    username: 'firstlast',
    img: '/images/profile.jpeg',
    text: '@slingshot is everything I\'ve ever wanted from a web wallet. If it\'s a sign of what\'s to come, Solana UX will dwarf Ethereum.',
    date: 'March 21, 2021 • 7:54am'
  },
  {
    name: 'First Last',
    username: 'firstlast',
    img: '/images/profile.jpeg',
    text: '@slingshot is everything I\'ve ever wanted from a web wallet. If it\'s a sign of what\'s to come, Solana UX will dwarf Ethereum.',
    date: 'March 21, 2021 • 7:54am'
  },
  {
    name: 'First Last',
    username: 'firstlast',
    img: '/images/profile.jpeg',
    text: '@slingshot is everything I\'ve ever wanted from a web wallet. If it\'s a sign of what\'s to come, Solana UX will dwarf Ethereum.',
    date: 'March 21, 2021 • 7:54am'
  },
  {
    name: 'First Last',
    username: 'firstlast',
    img: '/images/profile.jpeg',
    text: '@slingshot is everything I\'ve ever wanted from a web wallet. If it\'s a sign of what\'s to come, Solana UX will dwarf Ethereum.',
    date: 'March 21, 2021 • 7:54am'
  },
  {
    name: 'First Last',
    username: 'firstlast',
    img: '/images/profile.jpeg',
    text: '@slingshot is everything I\'ve ever wanted from a web wallet. If it\'s a sign of what\'s to come, Solana UX will dwarf Ethereum.',
    date: 'March 21, 2021 • 7:54am'
  },
  {
    name: 'First Last',
    username: 'firstlast',
    img: '/images/profile.jpeg',
    text: '@slingshot is everything I\'ve ever wanted from a web wallet. If it\'s a sign of what\'s to come, Solana UX will dwarf Ethereum.',
    date: 'March 21, 2021 • 7:54am'
  },
]

export const TwitterSection = () => {
	return (
		<>
			<div className={styles.twitterSectionBigger}>
			{fakeTwitterData.map((card) => {
				return <TwitterCard card={card} />
			})}
			</div>
			<div className={styles.twitterSectionTop}>
				{fakeTwitterData.slice(0, fakeTwitterData.length/2).map((card) => {
					return <TwitterCard card={card} />
				})}
			</div>
			<div className={styles.twitterSectionBottom}>
				{fakeTwitterData.slice(fakeTwitterData.length/2).map((card) => {
					return <TwitterCard card={card} />
				})}
			</div>
		</>
	)
}