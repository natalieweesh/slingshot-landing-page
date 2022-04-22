import cn from 'classnames';
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';
import styles from './PhoneSection2.module.scss';

export const PhoneSection2 = () => {
  return (
    <div className={cn(styles.innerContainer, styles.noPaddingBottom)}>
      <div className={styles.phoneSectionBigger}>
        <div className={styles.phoneWrapper}><Image className={styles.phone} src="/images/phone.svg" width={360} height={730} /></div>
        <Parallax className={cn(styles.parallaxSquare, styles.square1)} speed={20}><div className={cn(styles.square, styles.largeSquare)}><Image src="/images/square1.svg" layout="responsive" width="100%" height="100%" /></div></Parallax>
        <Parallax className={cn(styles.parallaxSquare, styles.square2)} speed={15}><div className={cn(styles.square, styles.mediumSquare)}><Image src="/images/square2.svg" layout="responsive" width="100%" height="100%" /></div></Parallax>
        <Parallax className={cn(styles.parallaxSquare, styles.square3)} speed={8}><div className={styles.square}><Image src="/images/square3.svg" layout="responsive" width="100%" height="100%" /></div></Parallax>
        <Parallax className={cn(styles.parallaxSquare, styles.square4)} speed={8}><div className={styles.square}><Image src="/images/square4.svg" layout="responsive" width="100%" height="100%" /></div></Parallax>
        <Parallax className={cn(styles.parallaxSquare, styles.square5)} speed={15}><div className={cn(styles.square, styles.largeSquare)}><Image src="/images/square5.svg" layout="responsive" width="100%" height="100%" /></div></Parallax>
        <Parallax className={cn(styles.parallaxSquare, styles.square6)} speed={15}><div className={cn(styles.square, styles.mediumSquare)}><Image src="/images/square6.svg" layout="responsive" width="100%" height="100%" /></div></Parallax>
        <Parallax className={cn(styles.parallaxSquare, styles.square7)} speed={8}><div className={styles.square}><Image src="/images/square7.svg" layout="responsive" width="100%" height="100%" /></div></Parallax>
        <Parallax className={cn(styles.parallaxSquare, styles.square8)} speed={15}><div className={cn(styles.square, styles.mediumSquare)}><Image src="/images/square8.svg" layout="responsive" width="100%" height="100%" /></div></Parallax>
        <Parallax className={cn(styles.parallaxSquare, styles.square9)} speed={8}><div className={styles.square}><Image src="/images/square9.svg" layout="responsive" width="100%" height="100%" /></div></Parallax>
      </div>
    </div>
  )
}