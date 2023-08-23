/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { useEffect } from 'react';
import MainLayout from './layout/mainLayout';
import { useAppDispatch } from './redux/hook';
import { setUser, setLoading } from './redux/features/users/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';



function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setLoading(true))
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!))
        dispatch(setLoading(false))
      } else {
        dispatch(setLoading(false))
      }
    });
  }, [dispatch])


  return (
    <div>
      <MainLayout />
    </div>)
}

export default App
