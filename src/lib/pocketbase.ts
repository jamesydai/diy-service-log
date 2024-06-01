import PocketBase from 'pocketbase';

const pb = new PocketBase('#'); // Adjust the URL to your PocketBase server

export const loadAuthStoreFromCookies = () => {
    if (typeof document !== 'undefined') {
      pb.authStore.loadFromCookie(document.cookie);
    }
}  

// Save the auth store to cookies whenever it changes
pb.authStore.onChange(() => {
  document.cookie = pb.authStore.exportToCookie({ httpOnly: false });
});

export default pb;