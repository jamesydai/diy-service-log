'use client'
import styles from './styles.module.css'
import { CreateNewForm } from './components/create-new-form'
import useAuthRedirect from '@/app/hooks/useAuthRedirect'

export default function CreateNew() {
  const { isAuthenticated, userId } = useAuthRedirect();

  if (!isAuthenticated) {
    return null; // Return null or a loading spinner while redirecting
  }
    return (
      <div className={styles.container}>
      <CreateNewForm/>
      </div>
    )
  }
  