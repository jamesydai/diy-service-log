'use client';

import './styles.module.css'
import VehicleItem from './components/VehicleItem'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import useAuthRedirect from '../hooks/useAuthRedirect';
import useFetchVehicles from '../hooks/useFetchVehicles';

export default function Vehicles() {

    const { isAuthenticated, userId } = useAuthRedirect();
    const { vehicles, loading, error } = useFetchVehicles(userId);


  if (!isAuthenticated) {
    return null; // Return null or a loading spinner while redirecting
  }

  if (loading) {
    return <div>Loading...</div>; // Or any loading spinner component
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  

    return (
         <main className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
           {vehicles.map((vehicle, index) => (
        <VehicleItem
          key={index}
          year={vehicle.year}
          make={vehicle.make}
          model={vehicle.model}
          trim={vehicle.trim}
          vehicleLink={`/vehicles/${vehicle.id}`}
        />
      ))}
      <div className="col-span-full flex justify-center mt-8 mb-8">
      <Link href='\vehicles\create-new'>
        <Button size="lg">
          Add New Car
        </Button>
        </Link>
      </div>
        </main>
    )
  }
  