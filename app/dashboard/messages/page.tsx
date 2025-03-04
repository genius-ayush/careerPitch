import { MessageList } from '@/components/message-list'
import React from 'react'

function page() {
  return (
    <div>
      <div className="p-10 ml-80  text-white">
        <MessageList/>
      </div>
    </div>
  )
}

export default page