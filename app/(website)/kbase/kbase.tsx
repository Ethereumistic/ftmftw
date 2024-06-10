"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Kbase {
  publicKey: string;
  displayName: string;

}


const Kbase: React.FC = () => {
  const [profile, setProfile] = useState<Kbase | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedProfile = localStorage.getItem('nostr-profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    } else {
      // Redirect to home if no profile found
      router.push('/');
    }
  }, [router]);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
<div className="p-4">
      <h1 className="text-2xl mb-4 dark:text-gray-200">📚 Knowledgebase</h1>
      <div className="sidemenu">
        <div className="profile">
        <div className='dark:text-gray-200'>
          <strong>🔑 Public Key:</strong> {profile.publicKey}
          </div>
          <h3 className="profile-name">{profile.displayName}asd</h3>
        </div>
        <ul className="menu-items">
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Kbase;
