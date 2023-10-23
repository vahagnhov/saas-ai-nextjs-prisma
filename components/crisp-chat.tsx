'use client'

import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

export const CrispChat = ({crispWebsiteID}) => {
    useEffect(() => {
        Crisp.configure(crispWebsiteID  || 'default-website-id');
    }, []);

    return null;
};