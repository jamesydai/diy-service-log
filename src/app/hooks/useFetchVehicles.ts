import { useEffect, useState } from 'react';
import pb from '@/lib/pocketbase';


interface Vehicle {
    id: string;
    year: number;
    make: string;
    model: string;
    trim: string;
    owner_id: string;
  }

export default function useFetchVehicles(userId:string) {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchVehicles = async () => {
    try {
        const records = await pb.collection('vehicles').getFullList<Vehicle>({
        filter: `owner_id='${userId}'`,
        });
        setVehicles(records);
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [userId]);

  return { vehicles, loading, error };
}