'use client';

import { useState } from 'react';
import pb from '@/lib/pocketbase';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation';


export function AddNewForm() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    year: '',
    make: '',
    model: '',
    trim: ''
  });

  const handleChange = (e:any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const data = {
        make: formData.make,
        model: formData.model,
        trim: formData.trim,
        year: parseInt(formData.year, 10),
        owner_id: pb.authStore.model?.id
      };
      const record = await pb.collection('vehicles').create(data);
      alert('Vehicle added successfully!');
      router.replace('/vehicles');
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
            <Label className="text-sm sm:text-base" htmlFor="year">
              Date of Service
            </Label>
            <Input
              className="text-sm sm:text-base"
              id="year"
              placeholder="Enter year"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2 sm:space-y-3">
            <Label className="text-sm sm:text-base" htmlFor="make">
              Mileage
            </Label>
            <Input
              className="text-sm sm:text-base"
              id="make"
              placeholder="Enter make"
              value={formData.make}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="space-y-2 sm:space-y-3">
            <Label className="text-sm sm:text-base" htmlFor="model">
              Service Name
            </Label>
            <Input
              className="text-sm sm:text-base"
              id="model"
              placeholder="Enter model"
              value={formData.model}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2 sm:space-y-3">
            <Label className="text-sm sm:text-base" htmlFor="trim">
              Service Description
            </Label>
            <Input
              className="text-sm sm:text-base"
              id="trim"
              placeholder="Enter trim"
              value={formData.trim}
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
