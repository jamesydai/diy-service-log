import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbase';

const useFetchVehicleName = (vehicleId:string) => {
  const [vehicleInfo, setVehicleInfo] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVehicleInfo = async () => {
      try {
        const vehicle = await pb.collection('vehicles').getOne(vehicleId);

        if (vehicle) {
          const { year, make, model, trim } = vehicle;
          const vehicleString = `${year} ${make} ${model} ${trim}`;
          setVehicleInfo(vehicleString);
        } 
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleInfo();
  }, [vehicleId]);

  return { vehicleInfo, loading, error };
};

export default useFetchVehicleName;