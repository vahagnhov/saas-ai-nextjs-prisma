'use client'

import { CrispChat } from '@/components/crisp-chat'

export const CrispProvider = ({crispWebsiteID}) => {
    return <CrispChat crispWebsiteID={crispWebsiteID}/>
};