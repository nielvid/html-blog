import styles from './Header.module.css'
import Logo from '../assets/images/8-medical-logo-white.svg'
import List from './List'

function Header() {
  return (
    <div>
      <div className={styles.navbar} style={{ display: 'flex', justifyContent: "space-between", alignContent: 'center'}} id='a'>
        <img src={Logo} alt='logo' />

        <nav>
          <List menu='Home' />
          <List menu='About us' />
          <List menu='Covid-19' />
          <List menu='About Us' />
          <List menu='Services' />
          <List menu='Networks' />
          <List menu='Impacts' />
          <List menu='Press' />
          <List menu='FAQs' />
          <List menu='Contacts' />
        </nav>
      </div>
    </div>
  )
}

export default Header
