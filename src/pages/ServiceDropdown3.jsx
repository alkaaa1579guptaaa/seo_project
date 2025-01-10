import GuestPostImportant from '@/components/Services/Service-Dropdown3/GuestPostImportant'
import GuestPostingBanner from '@/components/Services/Service-Dropdown3/GuestPostingBanner'
import GuestPostingCards from '@/components/Services/Service-Dropdown3/GuestPostingCards'
import GuestPostingEffective from '@/components/Services/Service-Dropdown3/GuestPostingEffective'
import GuestPostingMean from '@/components/Services/Service-Dropdown3/GuestPostingMean'
import React from 'react'

const ServiceDropdown3 = () => {
  return (
    <>
    <GuestPostingBanner/>
    <GuestPostingCards/>
    <GuestPostingEffective/>
    <GuestPostingMean/>
    <GuestPostImportant/>
    </>
  )
}

export default ServiceDropdown3