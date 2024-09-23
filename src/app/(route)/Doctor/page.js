"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { AllDoctors } from "../../_components/Doctorlist";

const DoctorDetail = () => {
  const searchParams = useSearchParams();
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const id = searchParams.get("id");

    if (id) {
      const foundDoctors = AllDoctors.filter((doc) => doc.id === parseInt(id));
      if (foundDoctors.length > 0) {
        setDoctors(foundDoctors);
      } else {
        setError("Doctor(s) not found");
      }
    } else {
      setDoctors(AllDoctors); 
    }
  }, [searchParams]);

  if (doctors.length === 0 && !error) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center p-5 mt-10" >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-center mb-8">
        Doctor(s) Detail
      </h2>
      {error ? (
        <p className="text-red-500 mt-4">{error}</p>
      ) : (
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {doctors.map((doctor) => (
            <div key={doctor.id} className="flex flex-col md:flex-row gap-6">
              
              <motion.div
                className="flex flex-col items-center md:items-start border border-gray-300 rounded-lg p-8 shadow-md w-full "
                initial={{ opacity: 0, x: -100 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={doctor.image || "/placeholder-image-url.jpg"}
                  alt={doctor.name || "Doctor Image"}
                  className="rounded-full mb-4"
                  width={180}
                  height={180}
                />
                <h2 className="text-2xl font-semibold text-center md:text-left">
                  {doctor.name}
                </h2>
              </motion.div>

              <div className="flex flex-col justify-center p-4 text-left">
                <p className="text-lg mb-3 font-medium">
                  <span className="font-bold">Age:</span> {doctor.age}
                </p>
                <p className="text-lg mb-3 font-medium">
                  <span className="font-bold">Field:</span> {doctor.field}
                </p>
                <p className="text-lg mb-3 font-medium">
                  <span className="font-bold">Experience:</span> {doctor.experience}
                </p>
                <p className="text-lg mb-3 font-medium">
                  <span className="font-bold">Timing:</span> {doctor.timing}
                </p>
                <p className="text-lg font-medium">
                  <span className="font-bold">Description:</span> {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorDetail;
