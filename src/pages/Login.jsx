import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
  "https://laezregghnrhmnlrffrx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhZXpyZWdnaG5yaG1ubHJmZnJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY2NDU0MDcsImV4cCI6MTk5MjIyMTQwN30.b6-KLqxqtwklKfBYXCnT5sA_KlURsfbd7hFrWzDpaIU" // Replace this with your actual Supabase token

  );

function Login() {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event === "SIGNED_IN") {
      navigate('/success');
    } else {
      navigate('/');
    }
  });
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-300">
      <div className="w-full max-w-md p-4 bg-blue-500 rounded-lg shadow-md">
        <header className="text-center mb-4">
          <h1 className="text-3xl font-bold">Welcome to My App</h1>
        </header>
        <Auth
          supabaseClient={supabase}
          providers={['google']}
          view="sign_in"
          socialLayout="horizontal"
          socialColors={true}
          socialButtonSize="xlarge"
          redirectTo="/success"
          supabaseUrl="https://laezregghnrhmnlrffrx.supabase.co"
        />
      </div>
    </div>
  );
}

export default Login;
