"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"

interface MessageEditorProps {
  initialContent: string
  onChange: (content: string) => void
}

export function MessageEditor({ initialContent, onChange }: MessageEditorProps) {
  const [content, setContent] = useState(initialContent)

  useEffect(() => {
    setContent(initialContent)
  }, [initialContent])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value
    setContent(newContent)
    onChange(newContent)
  }

  return (
    <div className="border rounded-md p-4">
      <Textarea value={content} onChange={handleChange} className="min-h-[300px] font-mono text-sm" />
    </div>
  )
}

