import React from 'react';
import Image from 'next/image';
import styles from './ThreeColumnSection.module.scss';

export const ThreeColumnSection = () => {
	return (
		<div className={styles.grid}>
			<div>
				<div className={styles.imageContainer}>
					<Image src="/images/web3.svg" alt="web 3" width={85} height={85} />
				</div>
				<header className={styles.header3}>Built for Web3</header>
				<p className={styles.iconText}>Connect wallet, start trading. Stay private and keep control over your assets.</p>
			</div>
			<div>
				<div className={styles.imageContainer}>
					<Image src="/images/data.svg" alt="web 3" width={101} height={98} />
				</div>
				<header className={styles.header3}>Real-time data</header>
				<p className={styles.iconText}>View real-time price charts and trade logs for every token.</p>
			</div>
			<div>
				<div className={styles.imageContainer}>
					<Image src="/images/chat.svg" alt="web 3" width={89} height={76} />
				</div>
				<header className={styles.header3}>Chat while you trade</header>
				<p className={styles.iconText}>Live chat with traders all over the world.</p>
			</div>
		</div>
	)
}