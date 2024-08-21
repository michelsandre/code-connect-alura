'use client'; // Error boundaries must be Client Components

import { GenericError } from '@/components/GenericError';
import { useEffect } from 'react';

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return <GenericError />;
}
