"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Profile {
  publicKey: string;
  displayName: string;
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch profile data from localStorage
    const storedProfile = localStorage.getItem('nostr-profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    } else {
      // Redirect to home page if profile data not found
      router.push('/');
    }
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <p>Public Key: {profile.publicKey}</p>
          <p>Display Name: {profile.displayName}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;