import { FaGithub } from 'react-icons/Fa'
import { FiX } from 'react-icons/Fi'
import { signIn, signOut, useSession } from 'next-auth/client';


import styles from './styles.module.scss'


export function SignInButton(){
    const [session] = useSession()


    console.log(session)
    return session ? (
        <button 
            type = "button" 
            className = {styles.SignInButton}
            onClick={() => signOut()}
            >
            <FaGithub  color = "#eba417"/>
            {session.user.name}
            <FiX color = "#737380" className = {styles.closeIcon}></FiX>
        </button>
    ) : (
        <button type = "button" className = {styles.SignInButton} onClick = {() => signIn('github')}>
            <FaGithub  color = "#5af500"/>
            Sign in with Github
        </button>
    );
}