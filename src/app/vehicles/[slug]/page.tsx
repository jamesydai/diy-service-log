'use client';

import { FC } from 'react';
import ServiceItem from './components/ServiceItem';
import { Button } from '@/components/ui/button';
import useAuthRedirect from '@/app/hooks/useAuthRedirect';
import useFetchServices from '@/app/hooks/useFetchServices';
import useFetchVehicleName from '@/app/hooks/useFetchVehicleName';
import { TableHead, TableRow, TableHeader, TableBody, Table } from "@/components/ui/table"


type PageProps = {
  params: {
    slug: string;
  };
};

const Page: FC<PageProps> = ({ params }) =>  {

  const { isAuthenticated, userId } = useAuthRedirect();
  const { services, loading: servicesLoading, error: servicesError } = useFetchServices(params.slug);
  const { vehicleInfo, loading: vehicleLoading, error: vehicleError } = useFetchVehicleName(params.slug);


  if (!isAuthenticated) {
    return null; // Return null or a loading spinner while redirecting
  }

  if (servicesLoading || vehicleLoading) {
    return <div>Loading...</div>;
  }




  return (
    <div className="grid gap-6 p-6 md:p-10">
      <div className="grid gap-2">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold">{vehicleInfo}</div>
        </div>
        <div className="text-gray-500 dark:text-gray-400" />
      </div>
      <div className="border rounded-lg overflow-hidden">
    
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3 font-bold">Date</TableHead>
            <TableHead className="w-1/3 font-bold">Mileage</TableHead>
            <TableHead className="w-1/3 font-bold">Service</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {services.map((service, index) => (
                <ServiceItem
                    key={index}
                    service_date={service.service_date}
                    service_mileage={service.service_mileage}
                    service_name={service.service_name}
                    vehicleLink={`/vehicles/${params.slug}/${service.id}`}
                />
            ))}
        </TableBody>
      </Table>
      </div>
      <div className="flex justify-center">
        <Button size="sm">Add Service Record</Button>
      </div>
    </div>
  )
}

export default Page;


