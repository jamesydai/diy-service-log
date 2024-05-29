'use client';

import useFetchVehicleName from '@/app/hooks/useFetchVehicleName';
import { Button } from "@/components/ui/button"
import useAuthRedirect from '@/app/hooks/useAuthRedirect';
import { FC } from 'react';
import useFetchServiceRecord from '@/app/hooks/useFetchServiceRecord';
import RecordItem from './components/RecordItem';


type PageProps = {
    params: {
      slug: string;
      record: string;
    };
  };

const Page: FC<PageProps> = ({ params }) =>  {

    const { isAuthenticated, userId } = useAuthRedirect();
    const { vehicleInfo, loading: vehicleLoading, error: vehicleError } = useFetchVehicleName(params.slug);
    const { serviceRecord, loading: servicesLoading, error: servicesError } = useFetchServiceRecord(params.record);


    if (!isAuthenticated) {
      return null; // Return null or a loading spinner while redirecting
    }
  
    if (vehicleLoading) {
      return <div>Loading...</div>;
    }

    if (serviceRecord.length === 0) {
        return <div>Record Not Found!</div>
    }
  

    
  return (
    <div className="px-4 py-6 md:px-6 lg:py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">{vehicleInfo}</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline">
              <PencilIcon className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button size="sm" variant="outline">
              <TrashIcon className="mr-2 h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>
        {serviceRecord.map((service, index) => (
                <RecordItem
                    key={index}
                    service_date={service.service_date}
                    service_mileage={service.service_mileage}
                    service_name={service.service_name}
                    service_desc={service.service_desc}
                />
            ))}
      </div>
    </div>
  )
}

export default Page;

function PencilIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function TrashIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}