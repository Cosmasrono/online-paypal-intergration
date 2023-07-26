import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
  "https://laezregghnrhmnlrffrx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhZXpyZWdnaG5yaG1ubHJmZnJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY2NDU0MDcsImV4cCI6MTk5MjIyMTQwN30.b6-KLqxqtwklKfBYXCnT5sA_KlURsfbd7hFrWzDpaIU" // Replace this with your actual Supabase token

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
