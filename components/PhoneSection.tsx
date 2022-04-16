import cn from 'classnames';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import styles from './PhoneSection.module.scss';

export const PhoneSection = () => {
	return (
		<div className={styles.phoneSection}>
			<div className={styles.phoneWrapper}><Image className={styles.phone} src="/images/phone.svg" width='100%' height='100%' layout='responsive' /></div>
			<Parallax className={cn(styles.parallaxSquare, styles.square1)} speed={20}><div className={cn(styles.square, styles.largeSquare)}><Image src="/images/profile.jpeg" layout="responsive" width="100%" height="100%" /></div></Parallax>
			<Parallax className={cn(styles.parallaxSquare, styles.square2)} speed={15}><div className={cn(styles.square, styles.mediumSquare)}><Image src="/images/profile.jpeg" layout="responsive" width="100%" height="100%" /></div></Parallax>
			<Parallax className={cn(styles.parallaxSquare, styles.square3)} speed={8}><div className={styles.square}><Image src="/images/profile.jpeg" layout="responsive" width="100%" height="100%" /></div></Parallax>
			<Parallax className={cn(styles.parallaxSquare, styles.square4)} speed={8}><div className={styles.square}><Image src="/images/profile.jpeg" layout="responsive" width="100%" height="100%" /></div></Parallax>
			<Parallax className={cn(styles.parallaxSquare, styles.square5)} speed={15}><div className={cn(styles.square, styles.mediumSquare)}><Image src="/images/profile.jpeg" layout="responsive" width="100%" height="100%" /></div></Parallax>
			<Parallax className={cn(styles.parallaxSquare, styles.square6)} speed={15}><div className={cn(styles.square, styles.mediumSquare)}><Image src="/images/profile.jpeg" layout="responsive" width="100%" height="100%" /></div></Parallax>
			<Parallax className={cn(styles.parallaxSquare, styles.square7)} speed={8}><div className={styles.square}><Image src="/images/profile.jpeg" layout="responsive" width="100%" height="100%" /></div></Parallax>
			<Parallax className={cn(styles.parallaxSquare, styles.square8)} speed={8}><div className={styles.square}><Image src="/images/profile.jpeg" layout="responsive" width="100%" height="100%" /></div></Parallax>
			<Parallax className={cn(styles.parallaxSquare, styles.square9)} speed={8}><div className={cn(styles.square, styles.mediumSquare)}><Image src="/images/profile.jpeg" layout="responsive" width="100%" height="100%" /></div></Parallax>
		</div>
	)
}