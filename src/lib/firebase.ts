/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDqCWH_pjQm-4IRe-uaVF6XdX5iCavXnF8',
  authDomain: 'tech-net-b03d7.firebaseapp.com',
  projectId: 'tech-net-b03d7',
  storageBucket: 'tech-net-b03d7.appspot.com',
  messagingSenderId: '701070055736',
  appId: '1:701070055736:web:feac762fb45c906f1189cd',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
