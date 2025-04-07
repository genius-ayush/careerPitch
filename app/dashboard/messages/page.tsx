import { MessageList } from '@/components/message-list'
import React from 'react'

function page() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Your Messages</h1>
        <MessageList />
      </div>
    </div>
  )
}

export default page