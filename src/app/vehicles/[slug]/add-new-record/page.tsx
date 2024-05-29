'use client'
import styles from './styles.module.css'
import useAuthRedirect from '@/app/hooks/useAuthRedirect'
import { AddNewForm } from './components/add-record-form';

export default function AddNewRecord() {
  const { isAuthenticated, userId } = useAuthRedirect();

  if (!isAuthenticated) {
    return null; // Return null or a loading spinner while redirecting
  }
    return (
      <div className={styles.container}>
        <AddNewForm/>
      </div>
    )
  }
  