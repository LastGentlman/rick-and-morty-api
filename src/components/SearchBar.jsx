import styles from './SearchBar.module.css'

export default function SearchBar() {
    return (
        <>
            <div>
                <input type="text" placeholder='Name or ID of Character'/>
                <input className={styles.btn} type="submit" autoFocus/>
            </div>
        </>
    )
}