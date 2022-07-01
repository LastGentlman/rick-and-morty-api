import { Link } from 'react-router-dom'
import styles from './Nav.module.css'


export default function Nav() {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
        <h1>My Rick</h1><h1 className={styles.y}>{`. ${'&'} .`}</h1><h1>Morty App</h1>
        </div>
        <div className={styles.btns}>
            <Link to ="/"> <button>Home</button> </Link>
            <Link to ='/characters'> <button>Main Characters</button> </Link>
            <Link to='/about'> <button>About</button> </Link>
        </div>
    </div>
  )
}
