"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ndk } from '@/app/layout' // Adjust the import according to your project structure
import { nip19 } from 'nostr-tools';
import Link from 'next/link';

// Define a type for the profile
interface Profile {
    publicKey: string;
    displayName: string;
  }
  
  const AuthButton: React.FC = () => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const router = useRouter();
  
    useEffect(() => {
      // Check if user is already logged in
      const storedProfile = localStorage.getItem('nostr-profile');
      if (storedProfile) {
        setProfile(JSON.parse(storedProfile));
      }
    }, []);
  
    const handleSignIn = async () => {
      try {
        if (window.nostr) {
          // Use the Nostr extension API to get keys
          const publicKey = await window.nostr.getPublicKey();
          const npubKey = nip19.npubEncode(publicKey); // Convert hex public key to npub format
  
          const profileData: Profile = {
            publicKey: npubKey,
            displayName: '',
          };
          
          // Save profile data in state and localStorage
          setProfile(profileData);
          localStorage.setItem('nostr-profile', JSON.stringify(profileData));
  
          console.log('Logged in with public key:', npubKey);
          router.push('/profile'); // Redirect to profile page
        } else {
          alert('Please install a Nostr extension like Alby.');
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    };
  
    const handleSignOut = () => {
      setProfile(null);
      localStorage.removeItem('nostr-profile');
      router.push('/'); // Redirect to home page after sign out
    };

    const handleKnowledgebase = () => {
        if (profile) {
          router.push('/kbase');
        }
      };
  
    return (
      <div>
        {profile ? (
          <>
            <button
              onClick={handleSignOut}
              className="bg-lred mx-4 px-4 py-2 rounded-full"
            >
              Sign Out
            </button>
            <button
            onClick={handleKnowledgebase}
            className="bg-tgreen px-4 py-2 rounded-full mr-2"
          >
            📚 Knowledgebase
          </button>

            {/* <span className="mr-4">Profile: {profile.publicKey}</span> */}
          </>
        ) : (
          <button
            onClick={handleSignIn}
            className="bg-borange mx-8 px-4 py-2 rounded-full"
          >
            Sign In with Nostr
          </button>
        )}
      </div>
    );
  };
  
  export default AuthButton;