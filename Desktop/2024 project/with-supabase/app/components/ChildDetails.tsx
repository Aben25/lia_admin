import React from 'react';
import Image from 'next/image';
import { User, MapPin, GraduationCap, HeartHandshake, Calendar } from 'lucide-react';

interface ChildData {
  "First Name": string;
  "Last Name": string;
  gender: string;
  location: string;
  grade: string;
  aspiration: string;
  bio: string;
  bod: string;
  profile: string;
}

const ChildDetails: React.FC<{ childData: ChildData }> = ({ childData }) => {
  const calculateAge = (birthDate: string) => {
    const ageDifMs = Date.now() - new Date(birthDate).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <Image 
            src={childData.profile} 
            alt={`${childData['First Name']} ${childData['Last Name']}`} 
            width={300} 
            height={300} 
            className="rounded-lg object-cover"
          />
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h2 className="text-3xl font-bold mb-2">{`${childData['First Name']} ${childData['Last Name']}`}</h2>
          <p className="text-xl text-purple-400 mb-4">{`Aspires to be a ${childData.aspiration}`}</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center">
              <User className="mr-2" size={20} />
              <span>{childData.gender}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" size={20} />
              <span>{childData.location}</span>
            </div>
            <div className="flex items-center">
              <GraduationCap className="mr-2" size={20} />
              <span>{`Grade ${childData.grade}`}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2" size={20} />
              <span>{`${calculateAge(childData.bod)} years old`}</span>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{childData.bio}</p>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <HeartHandshake className="mr-2" size={24} />
              Sponsorship Status
            </h3>
            <p>{childData.sponsor_id ? "Sponsored" : "Awaiting Sponsorship"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildDetails;