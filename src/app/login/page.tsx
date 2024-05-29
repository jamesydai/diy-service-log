'use client'

import { useRouter } from 'next/navigation';
import { LoginForm } from '../components/login-form/login';
import useAuthRedirect from '../hooks/useAuthRedirect';

import styles from './styles.module.css'



export default function Login() {

    const { isAuthenticated, userId } = useAuthRedirect();
    const router = useRouter();


  if (isAuthenticated) {
    router.replace('/vehicles');
  }

    return (
        <div className={styles.container}>
            <LoginForm/>
        </div>
      
    );
  }
  