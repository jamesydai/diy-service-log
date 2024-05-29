import { SignupForm } from '../components/signup-form/signup';

import styles from './styles.module.css'

export default function Signup() {
    return (
        <div className={styles.container}>
            <SignupForm/>
        </div>
      
    );
  }
  