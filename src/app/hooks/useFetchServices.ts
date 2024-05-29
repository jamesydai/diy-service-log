import { useEffect, useState } from 'react';
import pb from '@/lib/pocketbase';


interface Service {
    id: string;
    service_date: Date;
    service_mileage: number;
    service_name: string;
    vehicle_id: string;
  }

export default function useFetchServices(vehicleId:string) {
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    if (!vehicleId) return;

    const fetchVehicles = async () => {
    try {
        const records = await pb.collection('services').getFullList<Service>({
        filter: `vehicle_id='${vehicleId}'`,
        });
        setServices(records);

        
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [vehicleId]);

  return { services, loading, error };
}