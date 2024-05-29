'use client';

import Link from "next/link"
import React, { useState, FormEvent } from 'react';


import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation";
import pb from "@/lib/pocketbase";


export const LoginForm: React.FC = () => {
    
const router = useRouter(); 
const [formData, setFormData] = useState({
    email:'', password:''
})
const [error, setError] = useState<string>('');



const handleSubmit = async (event: FormEvent) => {
  event.preventDefault();
  setError('');

  try {
    await pb.collection('users').authWithPassword(formData.email, formData.password);
    // Redirect to dashboard or any other page
    router.push('/vehicles');
  } catch (err) {
    setError('Login failed. Please check your credentials.');
    alert(err);
  }
};

// Handle input changes
const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
            
          <div className="grid gap-2">
            
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          
        </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="\signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}