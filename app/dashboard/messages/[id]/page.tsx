"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { MessageEditor } from "@/components/message-editor"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

// Mock data for demonstration
const mockMessages = [
  {
    id: "msg-1",
    userId: "user-123",
    role: "Frontend Developer",
    skills: "React, JavaScript, TypeScript",
    company: "Google",
    tone: "Formal",
    emailText:
      "Dear [Name],\n\nI hope this email finds you well. I noticed you work at Google as a [Position]. I'm a Frontend Developer with experience in React, JavaScript, and TypeScript, and I'm interested in opportunities at Google.\n\nWould you be open to a brief conversation about your experience at Google and potentially referring me for a role that matches my skills?\n\nThank you for your time and consideration.\n\nBest regards,\n[Your Name]",
    linkedInText:
      "Hello [Name],\n\nI noticed you work at Google as a [Position]. I'm a Frontend Developer with experience in React, JavaScript, and TypeScript, and I'm interested in opportunities at Google.\n\nWould you be open to a brief conversation about your experience at Google and potentially referring me for a role that matches my skills?\n\nThank you for your time and consideration.\n\nBest regards,\n[Your Name]",
  },
  {
    id: "msg-2",
    userId: "user-123",
    role: "UX Designer",
    skills: "Figma, User Research, Prototyping",
    company: "Microsoft",
    tone: "Casual",
    emailText:
      "Hi [Name],\n\nI came across your profile and saw that you work at Microsoft. I'm a UX Designer with skills in Figma, User Research, and Prototyping, and I'm exploring opportunities at Microsoft.\n\nWould you be up for a quick chat about your experience there and possibly pointing me in the right direction for applying?\n\nThanks!\n[Your Name]",
    linkedInText:
      "Hi [Name],\n\nI came across your profile and saw that you work at Microsoft. I'm a UX Designer with skills in Figma, User Research, and Prototyping, and I'm exploring opportunities at Microsoft.\n\nWould you be up for a quick chat about your experience there and possibly pointing me in the right direction for applying?\n\nThanks!\n[Your Name]",
  },
]

export default function MessageDetailPage() {
  const params = useParams()
  const [message, setMessage] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch message
    setTimeout(() => {
      const foundMessage = mockMessages.find((m) => m.id === params.id)
      setMessage(foundMessage || null)
      setLoading(false)
    }, 500)
  }, [params.id])

  if (loading) {
    return (
      <div className="flex flex-col h-full ml-80">
        <div className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-8 w-64" />
            <Skeleton className="h-10 w-24" />
          </div>
          <Skeleton className="h-12 w-full mb-6" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    )
  }

  if (!message) {
    return (
      <div className="flex flex-col h-full ml-80">
        <div className="flex-1 p-6">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold mb-2">Message not found</h2>
            <p className="text-muted-foreground mb-4">
              The message you're looking for doesn't exist or has been deleted.
            </p>
            <Button  asChild>
              <a href="/dashboard">Return to Dashboard</a>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full ml-80">
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">
            {message.role} at {message.company}
          </h1>
          <Button variant="outline">Save Changes</Button>
        </div>

        <Tabs defaultValue="linkedin" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="linkedin">LinkedIn Message</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="details">Message Details</TabsTrigger>
          </TabsList>

          <TabsContent value="linkedin">
            <MessageEditor
              initialContent={message.linkedInText}
              onChange={(content) => console.log("LinkedIn content updated:", content)}
            />
          </TabsContent>

          <TabsContent value="email">
            <MessageEditor
              initialContent={message.emailText}
              onChange={(content) => console.log("Email content updated:", content)}
            />
          </TabsContent>

          <TabsContent value="details">
            <div className="space-y-4 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Role</h3>
                  <p>{message.role}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Company</h3>
                  <p>{message.company}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Skills</h3>
                  <p>{message.skills}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Tone</h3>
                  <p>{message.tone}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

