import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import pb from '@/lib/pocketbase';
const useAuthRedirect = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [userId, setUserId] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const isValid = pb.authStore.isValid;
      setIsAuthenticated(isValid);
      setUserId(pb.authStore.model?.id || null);

      if (!isValid) {
        router.replace('/login'); // Redirect to login page if not authenticated
      }
    };

    checkAuth();

    // Listen for changes in auth state
    pb.authStore.onChange(checkAuth);

    // Cleanup listener on component unmount
    return () => {
      pb.authStore.onChange(() => {}); // Clear the listener
    };
  }, [router]);

  return { isAuthenticated, userId };
};

export default useAuthRedirect;