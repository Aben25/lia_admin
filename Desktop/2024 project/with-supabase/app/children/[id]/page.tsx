import { createClient } from '@/utils/supabase/server';
import ChildDetails from '@/components/ChildDetails';

export default async function ChildPage({ params }: { params: { id: string } }) {
  const supabase = createClient();

  try {
    const { data: childData, error } = await supabase
      .from('Sponsees')
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) {
      console.error('Error fetching child data:', error);
      return <div className="text-red-500">Error: {error.message}</div>;
    }

    if (!childData) {
      console.error('No child data found');
      return <div className="text-yellow-500">No child data found</div>;
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-white">Child Details</h1>
        <ChildDetails childData={childData} />
      </div>
    );
  } catch (error) {
    console.error('Unexpected error:', error);
    return <div className="text-red-500">An unexpected error occurred</div>;
  }
}