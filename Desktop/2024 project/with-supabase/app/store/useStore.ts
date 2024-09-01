// app/store/useStore.ts
import create from 'zustand';
import { createClient } from '@/utils/supabase/client';

interface State {
  user: any;
  sponsorId: string | null;
  sponsees: any[];
  fetchUser: () => Promise<void>;
  fetchSponsorId: () => Promise<void>;
  fetchSponsees: (sponsorId: string) => Promise<void>;
  clearState: () => void;
}

export const useStore = create<State>((set, get) => ({
  user: null,
  sponsorId: null,
  sponsees: [],
  fetchUser: async () => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    set({ user });
  },
  fetchSponsorId: async () => {
    const { user } = get();
    if (!user) return;
    
    const supabase = createClient();
    const { data, error } = await supabase
      .from('Sponsors')
      .select('id')
      .eq('Email', user.email)
      .single();
    
    if (!error && data) {
      set({ sponsorId: data.id });
    }
  },
  fetchSponsees: async (sponsorId) => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from('Sponsees')
      .select('*')
      .eq('sponsor_id', sponsorId);
    
    if (!error && data) {
      set({ sponsees: data });
    }
  },
  clearState: () => set({ user: null, sponsorId: null, sponsees: [] }),
}));
