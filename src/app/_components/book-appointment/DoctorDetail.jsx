"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { AllDoctors } from './Doctorlist'; 

const DoctorDetail = () => {
  const router = useRouter();
  const { id } = router.query; 
  const [doctor, setDoctor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const foundDoctor = AllDoctors.find((doc) => doc.id === parseInt(id));
      if (foundDoctor) {
        setDoctor(foundDoctor);
      } else {
        setError('Doctor not found');
      }
    }
  }, [id]);

  if (!doctor && !error) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center p-5 mt-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-center mb-8">
        Doctor <span className="text-primary">{doctor?.name}</span>
      </h2>
      {error ? (
        <p className="text-red-500 mt-4">{error}</p>
      ) : (
        <div className="border border-gray-300 rounded-lg p-8 w-full max-w-md text-center shadow-md">
          <Image
            src={doctor.image || '/placeholder-image-url.jpg'}
            alt={doctor.name || 'Doctor Image'}
            className="rounded-full mx-auto"
            width={160}
            height={160}
          />
          <h2 className="text-2xl mt-5 mb-2">{doctor.name}</h2>
          <p>Age: {doctor.age}</p>
          <p>Field: {doctor.field}</p>
          <p>Experience: {doctor.experience}</p>
          <p>Timing: {doctor.timing}</p>
          <p>Description: {doctor.description}</p>
        </div>
      )}
    </div>
  );
};

export default DoctorDetail;

