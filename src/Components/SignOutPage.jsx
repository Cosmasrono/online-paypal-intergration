import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
  "https://swocaqwllmwkocyhqnhm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI" // Replace this with your actual Supabase token

);

function SignOutPage() {
  const navigate = useNavigate();

  async function signOutUser() {
    await supabase.auth.signOut();
    navigate('/');
  }

  return (
    <div className="App flex items-end justify-end pr-2">
      <header className="App-header">
         <button onClick={signOutUser}
         className=' bg-blue-700 p-3 m-2 rounded-md '>
          Sign Out</button>
      </header>
    </div>
  );
}

export default SignOutPage;
