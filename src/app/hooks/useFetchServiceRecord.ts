import { useEffect, useState } from 'react';
import pb from '@/lib/pocketbase';


interface Service {
    id: string;
    service_date: Date;
    service_mileage: number;
    service_name: string;
    service_desc: string;
    vehicle_id: string;
  }

export default function useFetchServiceRecord(serviceId:string) {
    const [serviceRecord, setServiceRecords] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  useEffect(() => {
    if (!serviceId) return;

    const fetchVehicles = async () => {
    try {
        const records = await pb.collection('services').getFullList<Service>({
        filter: `id='${serviceId}'`,
        });
        setServiceRecords(records);

        
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, [serviceId]);

  return { serviceRecord, loading, error };
}