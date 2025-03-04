import { MessageGenerator } from "@/components/message-generator"

function page() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-10 ">
        <MessageGenerator />
      </div>
    </div>
  )
}

export default page