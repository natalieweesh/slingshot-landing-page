import cn from 'classnames';
import Image from 'next/image';
import { CardsSection } from './CardsSection';
import { PhoneSection } from './PhoneSection';
import { ThreeColumnSection } from './ThreeColumnSection';
import { TwitterSection } from './TwitterSection';
import styles from './layout.module.scss';

export default function Layout() {
  return (
    <div>
      <div className={styles.container}>
        <nav className={styles.navbar}><a href="https://slingshot.finance"><span className={styles.logoSmaller}><Image src="/images/logo-condensed.svg" alt="Slingshot" width={33} height={26} /></span><span className={styles.logoBigger}><Image src="/images/logo.svg" alt="Slingshot" width={215} height={56} /></span></a></nav>
        <div className={styles.innerContainer}>
          <header className={cn(styles.header1, styles.center, styles.maxWidth)}>Discover and trade 7,500+ crypto tokens at the best prices</header>
          <p className={cn(styles.headerText, styles.center, styles.maxWidth)}>Join the waitlist and refer your friends to earn up to $2,500 in NFT rewards and the chance to win 1 BTC!</p>
          <div className={styles.input}><input className={styles.textInput} type="text" placeholder="Enter email address"></input><button onClick={() => alert('hey')} className={styles.submit} type="submit">Join<span className={styles.extraText}> the waitlist</span></button></div>
          <a href='#' className={cn(styles.learnMore, styles.center)}>Learn more <Image src="/images/greenarrow.svg" width={12} height={12} /></a>
          <PhoneSection />
          <p className={cn(styles.label, styles.center)}>Experience</p>
          <header className={cn(styles.header2, styles.center, styles.maxWidth)}>Slingshot is a web3 trading platform that lets you trade thousands of crypto tokens at the best prices, at lightning fast speed.</header>
          <ThreeColumnSection />
          <CardsSection />
          <header className={cn(styles.header2, styles.center)}>People already loving Slingshot</header>
        </div>
        <TwitterSection />
        <div className={styles.innerContainer}>
          <header className={cn(styles.header3, styles.center, styles.maxWidth)}>Join over XXX,XXX people who have already signed up</header>
          <div className={cn(styles.input, styles.secondInput)}><input className={styles.textInput} type="text" placeholder="Enter email address"></input><button onClick={() => alert('hey')} className={styles.submit} type="submit">Join<span className={styles.extraText}> the waitlist</span></button></div>
          <p className={cn(styles.smallText, styles.center, styles.maxWidth)}>Earn up to $2500 in NFT rewards and the chance to win 1 BTC when you refer friends.</p>
        </div>
      </div>
    </div>
  )
}