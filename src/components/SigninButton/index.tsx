import { FaGithub } from 'react-icons/Fa'
import { FiX } from 'react-icons/Fi'
import styles from './styles.module.scss'

export function SignInButton(){
    const isUserLoggedIn =  false;

    return isUserLoggedIn ? (
        <button type = "button" className = {styles.SignInButton}>
            <FaGithub  color = "#eba417"/>
            Israel Alves
            <FiX color = "#737380" className = {styles.closeIcon}></FiX>
        </button>
    ) : (
        <button type = "button" className = {styles.SignInButton}>
            <FaGithub  color = "#5af500"/>
            Sign in with Github
        </button>
    );
}