// eslint-disable
/* eslint-disable */
import { useRouter } from 'next/router';
import React from 'react';
import sentryLogger from "../services/logger";

export default function Custom404() {
  const router = useRouter();
  React.useEffect(() => {
    sentryLogger({
      component: '404',
      section: '404',
      error: `page not found ${router.pathname}` 
    })    
  },[])
  
  return <h1>404 - Page Not Found</h1>
};