"use client"
import { v4 as uuid } from 'uuid';
import { useLocalStorage } from './hooks/useLocalStorage';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const [userId, setUserId] = useLocalStorage('user_id', '');

  useEffect(() => {

    if (!userId) setUserId(uuid());
    userId && redirect(`/user/${userId}`);

  }, [userId, setUserId])
}