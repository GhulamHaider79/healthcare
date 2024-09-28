"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AllDoctors } from "../../_components/Doctorlist";
import { auth } from '../../(route)/lib/Firebase.js'; // Ensure this path is correct
import { onAuthStateChanged } from "firebase/auth"; // Import from Firebase

const DoctorDetail = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user); // Check if user is logged in
    });

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

    return () => unsubscribe(); // Cleanup subscription
  }, [searchParams]);

  if (doctors.length === 0 && !error) {
    return <p>Loading...</p>;
  }

  const handleBookAppointment = () => {
    if (isLoggedIn) {
      router.push("/appointment"); // Redirect to appointment page
    } else {
      alert("Please login to book an appointment."); // Show message
    }
  };
  const additionalInfo = doctors.length > 0 ? doctors[0].info : null;
  return (
    <div className="flex flex-col items-center p-6 mt-10 bg-gray-50 min-h-screen">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Doctor`s Detail
      </motion.h2>

      {error ? (
        <motion.p
          className="text-red-500 mt-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error}
        </motion.p>
      ) : (
        <div className="flex flex-col w-full max-w-10xl gap-5">
          <div className="flex-1 gap-8 ml-4 md:ml-8 lg:ml-12">
            {doctors.map((doctor) => (
              <motion.div
                key={doctor.id}
                className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="md:w-1/3 flex items-center justify-center bg-gray-100 p-6">
                  <Image
                    src={doctor.image || "/placeholder-image-url.jpg"}
                    alt={doctor.name || "Doctor Image"}
                    className="rounded-full object-cover"
                    width={200}
                    height={200}
                  />
                </div>

                <div className="md:w-2/3 flex flex-col justify-between p-6 space-y-4 text-left">
                  <h3 className="text-3xl font-semibold text-gray-700">{doctor.name}</h3>
                  <p className="text-lg"><span className="font-bold text-gray-800">Age:</span> {doctor.age}</p>
                  <p className="text-lg"><span className="font-bold text-gray-800">Field:</span> {doctor.field}</p>
                  <p className="text-lg"><span className="font-bold text-gray-800">Experience:</span> {doctor.experience}</p>
                  <p className="text-lg"><span className="font-bold text-gray-800">Timing:</span> {doctor.timing}</p>
                  <p className="text-lg text-gray-600"><span className="font-bold text-gray-800">Description:</span> {doctor.description}</p>
                  <button
                    onClick={handleBookAppointment}
                    className="mt-4 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          {additionalInfo && (
            <motion.div
              className=" ml-4 md:ml-8 lg:ml-12  mt-8 lg:mt-0 p-10 bg-white border border-gray-200 rounded-xl    shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-gray-700">Additional Info:</h3>
              <p className="text-lg text-gray-600">{additionalInfo}</p>
            </motion.div>
          )}
          
        </div>
      )}
    </div>
  );
};

// Wrap the DoctorDetail component in a Suspense boundary
const SuspenseDoctorDetail = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <DoctorDetail />
  </Suspense>
);

export default SuspenseDoctorDetail;
