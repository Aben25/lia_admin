// app/children/[sponsorId]/page.tsx
import { useStore } from '@/store/useStore';
import { useEffect } from 'react';

export default function ChildrenPage({ params }: { params: { sponsorId: string } }) {
  const { user, sponsees, fetchSponsees, fetchUser, fetchSponsorId } = useStore();

  useEffect(() => {
    const fetchData = async () => {
      await fetchUser();
      await fetchSponsorId();
      if (params.sponsorId) {
        await fetchSponsees(params.sponsorId);
      }
    };
    fetchData();
  }, [params.sponsorId, fetchUser, fetchSponsorId, fetchSponsees]);

  if (!user) {
    return <div>Please log in to view this page.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-white">Your Sponsored Children</h1>
      {sponsees.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsees.map((child) => (
            <div key={child.id} className="bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-white">{child["First Name"]} {child["Last Name"]}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">You have no sponsored children at the moment.</p>
      )}
    </div>
  );
}
