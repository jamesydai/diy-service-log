'use client';

import { useState } from 'react';
import pb from '@/lib/pocketbase';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter} from 'next/navigation';
import { useParams } from 'next/navigation';




export function AddNewForm() {

  const router = useRouter();
  const { slug } = useParams();


  const [formData, setFormData] = useState({
    service_date: '',
    service_mileage: '',
    service_name: '',
    service_desc: ''
  });

  const handleChange = (e:any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      console.log(slug);
      const data = {
        service_date: formData.service_date,
        service_mileage: formData.service_mileage,
        service_name: formData.service_name,
        service_desc: formData.service_desc,
        vehicle_id: slug
      };
      const record = await pb.collection('services').create(data);
      alert('Service added successfully!');
      router.replace(`/vehicles/${slug}`);
    } catch (error) {
      console.error('Error creating vehicle:', error);
      alert('Failed to add vehicle');
    }
  };


  return (
    <div className="mx-auto max-w-2xl space-y-8 px-4 sm:px-0">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Add New Service Record</h1>
        <p className="text-base text-gray-500 dark:text-gray-400 sm:text-lg">
          Fill out the form to add a service record information to your vehicle.
        </p>
      </div>
      <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <Label className="text-sm sm:text-base" htmlFor="service_date">
              Date of Service
            </Label>
            <Input
              className="text-sm sm:text-base"
              id="service_date"
              placeholder="Enter date of service"
              value={formData.service_date}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2 sm:space-y-3">
            <Label className="text-sm sm:text-base" htmlFor="service_mileage">
              Mileage
            </Label>
            <Input
              className="text-sm sm:text-base"
              id="service_mileage"
              placeholder="Enter Mileage"
              value={formData.service_mileage}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <Label className="text-sm sm:text-base" htmlFor="service_name">
              Service Name
            </Label>
            <Input
              className="text-sm sm:text-base"
              id="service_name"
              placeholder="Enter service name"
              value={formData.service_name}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2 sm:space-y-3">
            <Label className="text-sm sm:text-base" htmlFor="service_desc">
              Service Description
            </Label>
            <Input
              className="text-sm sm:text-base"
              id="service_desc"
              placeholder="Enter service description"
              value={formData.service_desc}
              onChange={handleChange}
            />
          </div>
        </div>
        <Button className="w-full text-sm sm:text-base" type="submit">
          Add Service
        </Button>
      </form>
    </div>
  );
}
