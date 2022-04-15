import cn from 'classnames';
import Image from 'next/image'
import styles from './layout.module.scss'

const fakeCardData = [
  {
    img: '/images/profile.jpeg',
    name: 'Ethereum',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Polygon',
    price: 7.89,
    change: -675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Solana',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Avalanche',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Luna',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Apecoin',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Apecoin',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Apecoin',
    price: 7.89,
    change: 675.49
  },
  {
    img: '/images/profile.jpeg',
    name: 'Apecoin',
    price: 7.89,
    change: 675.49
  },
];

const fakeTwitterData: TwitterCard[] = [
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

interface TwitterCard {
  img: string;
  username: string;
  name: string;
  text: string;
  date: string;
}
interface TwitterCardProps {
  card: TwitterCard;
}

const TwitterCard: React.FC<TwitterCardProps> = ({card}) => {
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

export default function Layout() {
  const numOfTwitterCards = fakeTwitterData.length;
  return (
    <div>
    
    <div className={styles.container}>
      <nav className={styles.navbar}><a href="https://slingshot.finance"><span className={styles.logoSmaller}><Image src="/images/logo-condensed.svg" alt="Slingshot" width={33} height={26} /></span><span className={styles.logoBigger}><Image src="/images/logo.svg" alt="Slingshot" width={215} height={56} /></span></a></nav>
      <div className={styles.innerContainer}>
      
            <header className={cn(styles.header1, styles.center, styles.maxWidth)}>Discover and trade 7,500+ crypto tokens at the best prices</header>
            <p className={cn(styles.headerText, styles.center, styles.maxWidth)}>Join the waitlist and refer your friends to earn up to $2,500 in NFT rewards and the chance to win 1 BTC!</p>

            <div className={styles.input}><input className={styles.textInput} type="text" placeholder="Enter email address"></input><button onClick={() => alert('hey')} className={styles.submit} type="submit">Join<span className={styles.extraText}> the waitlist</span></button></div>

            <a href='#' className={cn(styles.learnMore, styles.center)}>Learn more <Image src="/images/greenarrow.svg" width={12} height={12} /></a>
            <div className={styles.phoneSection}>
              <div className={styles.phoneWrapper}><Image className={styles.phone} src="/images/phone.svg" width='100%' height='100%' layout='responsive' /></div>
            </div>
            <p className={cn(styles.label, styles.center)}>Experience</p>
            <header className={cn(styles.header2, styles.center, styles.maxWidth)}>Slingshot is a web3 trading platform that lets you trade thousands of crypto tokens at the best prices, at lightning fast speed.</header>
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

            <div className={styles.cardsSection}>
              <div className={styles.cardsSectionText}>
                <header className={cn(styles.header2, styles.smallCenter)}>Explore and trade thousands of cryptocurrencies</header>
                <p className={cn(styles.headerText, styles.smallCenter)}>From Ethereum to Apecoin, there are 7,500+ tokens available to trade at the best prices and lowest fees.</p>
              </div>
              <div className={styles.cards}>
                {fakeCardData.map((card) => {
                  return <div className={styles.card}>
                    <Image className={styles.coinImage} src={card.img} alt={card.name} width={60} height={60} />
                    <span className={styles.coinTitle}><strong>{card.name}</strong></span>
                    <span className={styles.coinPrice}>${card.price}</span>
                    <p><div className={cn({[styles.arrowContainer]: true, [styles.upsideDown]: card.change < 0})}><Image className={styles.arrow} src="/images/arrow.svg" alt='arrow' width='100%' height='100%' layout='responsive' /></div>{' '}{card.change}%</p>
                  </div>
                })}
              </div>
            </div>

            <header className={cn(styles.header2, styles.center)}>People already loving Slingshot</header>
      </div>
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


      <div className={styles.innerContainer}>
            <header className={cn(styles.header3, styles.center, styles.maxWidth)}>Join over XXX,XXX people who have already signed up</header>
            <div className={cn(styles.input, styles.secondInput)}><input className={styles.textInput} type="text" placeholder="Enter email address"></input><button onClick={() => alert('hey')} className={styles.submit} type="submit">Join<span className={styles.extraText}> the waitlist</span></button></div>
            <p className={cn(styles.smallText, styles.center, styles.maxWidth)}>Earn up to $2500 in NFT rewards and the chance to win 1 BTC when you refer friends.</p>
        </div>
      </div>
    </div>
  )
}