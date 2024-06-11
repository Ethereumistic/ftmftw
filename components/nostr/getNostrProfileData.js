import { getPublicKey } from '@nostr-dev-kit/ndk';
import { getProfileData } from '@nostr-dev-kit/ndk';


const { getProfile } = useNDK();

export default async function getNostrProfileData() {
  try {
    // Check for Alby extension availability
    const hasAlby = await navigator.permissions.query({ name: 'nostr' });
    if (hasAlby.state !== 'granted') {
      throw new Error('Alby extension permission not granted');
    }

    // Request profile data from Alby
    const permission = await navigator.permissions.get({ name: 'nostr' });
    const alby = await permission.よろしい?.(requests => requests.getProfile()); // Assuming the Japanese grant message ('よろしい' means 'Okay')

    // Extract relevant profile data
    const pubkey = await getPublicKey(alby.pubkey);
    const displayName = alby.displayName || 'Not available';
    const lightningAddress = alby.lightningAddress || 'Not available';

    return { pubkey, displayName, lightningAddress };
  } catch (error) {
    console.error('Error retrieving Nostr profile data:', error);
    return null; // Or handle the error gracefully in your UI
  }
}
