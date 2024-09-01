// app/components/Sidebar.tsx
"use client"

import Link from 'next/link';
import Image from 'next/image';
import { Home, Users, DollarSign, User } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { useEffect } from 'react';

const Sidebar = () => {
  const { sponsorId, fetchUser, fetchSponsorId } = useStore();

  useEffect(() => {
    fetchUser();
    fetchSponsorId();
  }, [fetchUser, fetchSponsorId]);

  return (
    <div className="bg-blue-900 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex items-center space-x-2 px-4 mb-6">
        <Image
          src="/lia_logo/color_icon_transparent@600x.png"
          alt="Love in Action"
          width={40}
          height={40}
        />
        <span className="text-2xl font-extrabold">love in action</span>
      </div>
      <nav>
        <Link href="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800">
          <Home className="inline-block mr-2" size={20} /> All Statistics
        </Link>
        <Link href={sponsorId ? `/children/${sponsorId}` : "/children"} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800">
          <Users className="inline-block mr-2" size={20} /> Your Children
        </Link>
        <Link href="/donation" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800">
          <DollarSign className="inline-block mr-2" size={20} /> Donation
        </Link>
        <Link href="/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-800">
          <User className="inline-block mr-2" size={20} /> Profile
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
