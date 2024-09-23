"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AllDoctors = [
  {
            "id" : 1 ,
            "image": "https://expathealthservices.com/wp-content/uploads/2021/07/house-call.png",
            "name": "Dr. John Doe",
            "age": 45,
            "field": "Cardiology",
            "experience": "20 years",
            "description": "Dr. John Doe is a highly experienced cardiologist who specializes in treating heart diseases and promoting cardiovascular health.",
            "timing": "Monday to Friday, 9 AM - 5 PM"
          },
          {
            "id" : 2 ,
            "image": "https://www.trdoktor.com/file/2017/08/65248471735.jpg",
            "name": "Dr. Jane Smith",
            "age": 39,
            "field": "Neurology",
            "experience": "15 years",
            "description": "Dr. Jane Smith is an expert in neurology, focusing on disorders of the nervous system and providing specialized treatment plans.",
            "timing": "Monday to Friday, 10 AM - 4 PM"
          },
          {
            "id" : 3,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7AsV4bbwltT2ECV_t7JZ7Fjf3P9xdp7zfEg&s",
            "name": "Dr. Emily Johnson",
            "age": 50,
            "field": "Orthopedics",
            "experience": "25 years",
            "description": "Dr. Emily Johnson is a skilled orthopedic surgeon with a focus on joint replacement and sports-related injuries.",
            "timing": "Tuesday to Saturday, 11 AM - 6 PM"
          },
          {
            "id" : 4 ,
            "image": "https://evb9ktagfkv.exactdn.com/wp-content/uploads/2017/06/doctor-phone.png?strip=all&lossy=1&ssl=1",
            "name": "Dr. Michael Brown",
            "age": 38,
            "field": "Pediatrics",
            "experience": "14 years",
            "description": "Dr. Michael Brown specializes in children's health, offering top-notch care for infants, children, and adolescents.",
            "timing": "Monday to Friday, 9 AM - 3 PM"
          },
          {
            "id":5,
            "image": "https://www.shutterstock.com/image-photo/beautiful-smiling-female-doctor-happy-260nw-1390534574.jpg",
            "name": "Dr. Sarah Davis",
            "age": 43,
            "field": "Dermatology",
            "experience": "18 years",
            "description": "Dr. Sarah Davis is a renowned dermatologist specializing in skin disorders and cosmetic dermatology treatments.",
            "timing": "Monday to Thursday, 10 AM - 5 PM"
          },
          { "id" : 6,
            "image": "https://www.duzeygoz.com.tr/wp-content/uploads/2024/04/Sahan-hoca-450-1.png",
            "name": "Dr. William Wilson",
            "age": 47,
            "field": "Gastroenterology",
            "experience": "22 years",
            "description": "Dr. William Wilson is a leading expert in gastroenterology, treating conditions related to the digestive system.",
            "timing": "Monday to Friday, 8 AM - 2 PM"
          },
          {
            "id": 7,
            "image": "https://www.duzeygoz.com.tr/wp-content/uploads/2024/04/atilla-hoca-450-1.png",
            "name": "Dr. Jessica Martinez",
            "age": 36,
            "field": "Oncology",
            "experience": "12 years",
            "description": "Dr. Jessica Martinez provides compassionate oncology care, focusing on cancer treatment and patient support.",
            "timing": "Monday to Wednesday, 9 AM - 3 PM"
          },
          {
            "id" : 8,
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1fW3-aTc9ba25uvJ4Ab1CNhBSW4hMZURBE_83bVxNP_LczAVyoNE3P78edydOKK2cckI&usqp=CAU",
            "name": "Dr. David Lee",
            "age": 44,
            "field": "Radiology",
            "experience": "19 years",
            "description": "Dr. David Lee is a skilled radiologist specializing in diagnostic imaging techniques to aid in treatment planning.",
            "timing": "Monday to Friday, 9 AM - 6 PM"
          },
          {
            "id" : 9 ,
            "image": "https://www.trdoktor.com/file/2017/08/65248471735.jpg",
            "name": "Dr. Karen Thomas",
            "age": 41,
            "field": "Psychiatry",
            "experience": "17 years",
            "description": "Dr. Karen Thomas is a trusted psychiatrist who offers mental health support and therapy for various conditions.",
            "timing": "Monday to Friday, 10 AM - 4 PM"
          },
          {
            "id" : 10 ,
            "image": "https://www.duzeygoz.com.tr/wp-content/uploads/2024/04/remziye-hoca-450-1.png",
            "name": "Dr. Daniel White",
            "age": 40,
            "field": "Ophthalmology",
            "experience": "16 years",
            "description": "Dr. Daniel White is a dedicated ophthalmologist with expertise in vision care, eye surgeries, and treatment of eye disorders.",
            "timing": "Tuesday to Saturday, 9 AM - 5 PM"
          },
          {
            "id" : 11,
            "image": "https://www.shutterstock.com/image-photo/beautiful-smiling-female-doctor-happy-260nw-1390534574.jpg",
            "name": "Dr. Laura Harris",
            "age": 52,
            "field": "Rheumatology",
            "experience": "27 years",
            "description": "Dr. Laura Harris specializes in rheumatology, offering care for patients with joint diseases and autoimmune disorders.",
            "timing": "Monday to Thursday, 8 AM - 1 PM"
          },
          {
            "id" : 12 ,
            "image": "https://www.trdoktor.com/file/2017/08/65248471735.jpg",
            "name": "Dr. James Clark",
            "age": 49,
            "field": "Endocrinology",
            "experience": "24 years",
            "description": "Dr. James Clark is a leading endocrinologist focusing on hormonal disorders and metabolic health.",
            "timing": "Monday to Friday, 9 AM - 3 PM"
          }
      
];

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setDoctors(AllDoctors);
    } catch (error) {
      setError('Failed to load doctors.');
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col items-center p-5 mt-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-center mb-8">
        Doctor <span className="text-primary">Lists</span>
      </h2>
      <div className="flex flex-wrap gap-5 justify-center mt-8">
        {doctors.length === 0 && !error ? (
          <p>Loading...</p>
        ) : (
          doctors.map((doctor) => (
            <div key={doctor.id} className="border border-gray-300 rounded-lg p-5 w-full max-w-xs text-center shadow-md">
              <Image
                src={doctor.image || '/placeholder-image-url.jpg'}
                alt={doctor.name || 'Doctor Image'}
                className="rounded-full mx-auto"
                width={160}
                height={160}
                priority
              />
              <h2 className="text-xl mt-5 mb-2">{doctor.name}</h2>
              <p>Age: {doctor.age}</p>
              <p>Field: {doctor.field}</p>
              <p>Experience: {doctor.experience}</p>
              <Link href={`/doctor/${doctor.id}`}>
                <button className="mt-4 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md">
                  Book Now
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};


export default DoctorList;

