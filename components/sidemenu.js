"use client";
import React, { useState, useEffect } from 'react';

function Sidemenu() {
  const [displayName, setDisplayName] = useState(null);

  useEffect(() => {
    const fetchDisplayName = async () => {
      try {
        if (window.nostr) {
          const profile = await window.nostr.getProfile();
          setDisplayName(profile.displayName);
        }
      } catch (error) {
        console.error('Error fetching Nostr display name:', error);
      }
    };

    fetchDisplayName();
  }, []);

  return (
    <div className="sidemenu">
      <div className="profile">
      <div className='dark:text-gray-200'>
        <strong>🔑 Public Key:</strong> {profile.publicKey}
      </div>
        <h3 className="profile-name">{displayName ? displayName : 'Loading...'}</h3>
      </div>
      {/* Add other sidemenu items here */}
    </div>
  );
}

export default Sidemenu;

