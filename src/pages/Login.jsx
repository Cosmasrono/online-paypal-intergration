import React from 'react';
import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { useNavigate } from 'react-router-dom';

const supabase = createClient(
  "https://swocaqwllmwkocyhqnhm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3b2NhcXdsbG13a29jeWhxbmhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExNzM2NDIsImV4cCI6MTk4Njc0OTY0Mn0.eE7E7QeAT2iGCsInhiPVjYqOEuyrfD0-OAKsKhuWVaI" // Replace this with your actual Supabase token

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
