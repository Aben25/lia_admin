import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Fetch Sponsors data for the logged-in user
  const { data: sponsorsData, error: sponsorsError } = await supabase
    .from("Sponsors")
    .select("*")
    .eq("Email", user.email)
    .single();

  if (sponsorsError) {
    console.error("Error fetching Sponsors data:", sponsorsError);
  }

  // Fetch Sponsees data for the logged-in user
  let sponseesData = null;
  let sponseesError = null;
  
  if (sponsorsData && sponsorsData.Sponsee_id) {
    const { data, error } = await supabase
      .from("Sponsees")
      .select("*")
      .eq("id", sponsorsData.Sponsee_id)
      .single();
    
    sponseesData = data;
    sponseesError = error;

    if (sponseesError) {
      console.error("Error fetching Sponsees data:", sponseesError);
    }
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
      </div>

      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-2xl mb-4">Your Sponsees data</h2>
        {sponseesData ? (
          <pre className="text-xs font-mono p-3 rounded border max-h-64 overflow-auto">
            {JSON.stringify(sponseesData, null, 2)}
          </pre>
        ) : (
          <div>
            <p>No Sponsees data found for this user.</p>
            <p>Debug info:</p>
            <pre className="text-xs font-mono p-3 rounded border max-h-64 overflow-auto">
              {JSON.stringify({
                sponseeId: sponsorsData?.Sponsee_id,
                sponseesData,
                sponseesError: sponseesError?.message,
                sponseesErrorDetails: sponseesError
              }, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}