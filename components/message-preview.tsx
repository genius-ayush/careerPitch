"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, Edit, RefreshCw } from "lucide-react"
import { useState } from "react"

interface MessagePreviewProps {
  message: {
    id: string
    emailText: string
    linkedInText: string
  }
  onEdit: () => void
  onReset: () => void
}

export function MessagePreview({ message, onEdit, onReset }: MessagePreviewProps) {
  const [activeTab, setActiveTab] = useState("linkedin")
  const [copySuccess, setCopySuccess] = useState<string | null>(null)

  const handleCopy = async () => {
    const textToCopy = activeTab === "linkedin" ? message.linkedInText : message.emailText

    try {
      await navigator.clipboard.writeText(textToCopy)
      setCopySuccess(activeTab)
      setTimeout(() => setCopySuccess(null), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Your Generated Message</CardTitle>
        <CardDescription>Review and edit your personalized referral message.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="linkedin" onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="linkedin">LinkedIn Message</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
          </TabsList>
          <TabsContent value="linkedin">
            <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">{message.linkedInText}</div>
          </TabsContent>
          <TabsContent value="email">
            <div className="bg-muted p-4 rounded-md whitespace-pre-wrap">{message.emailText}</div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-3">
        <Button onClick={handleCopy} className="w-full sm:w-auto">
          <Copy className="mr-2 h-4 w-4" />
          {copySuccess === activeTab ? "Copied!" : "Copy to Clipboard"}
        </Button>
        <Button onClick={onEdit} variant="outline" className="w-full sm:w-auto">
          <Edit className="mr-2 h-4 w-4" />
          Edit Message
        </Button>
        <Button onClick={onReset} variant="ghost" className="w-full sm:w-auto">
          <RefreshCw className="mr-2 h-4 w-4" />
          Create New Message
        </Button>
      </CardFooter>
    </Card>
  )
}

