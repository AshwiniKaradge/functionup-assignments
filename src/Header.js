import styles from './Header.module.css';
import {BsApple} from 'react-icons/bs'
export default function Header(){

    const navOptions=[
        'Home',
        'About Us',
        'Register',
        'Login',
        'Sign Up',
        'Contacts'
    ]

    return(

        <header className={styles.header}>

            <div className={styles.navOptions}>
                {
                    navOptions.map(page => (
                        <p>{page}</p>
                    ))
                }
            </div>
            <BsApple
               
               className={styles.menu}
               onClick={()=> alert(1234)}
            
            />
        </header>
    )
}