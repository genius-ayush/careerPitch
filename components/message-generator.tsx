"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessagePreview } from "./message-preview"

const formSchema = z.object({
  role: z.string().min(2, {
    message: "Role must be at least 2 characters.",
  }),
  skills: z.string().min(2, {
    message: "Skills must be at least 2 characters.",
  }),
  company: z.string().min(1, {
    message: "Company is required.",
  }),
  tone: z.string({
    required_error: "Please select a tone.",
  }),
  additionalInfo: z.string().optional(),
})

export function MessageGenerator() {
  const router = useRouter()
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedMessage, setGeneratedMessage] = useState<null | {
    id: string
    emailText: string
    linkedInText: string
  }>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
      skills: "",
      company: "",
      tone: "formal",
      additionalInfo: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsGenerating(true)

    // Simulate API call to generate message
    setTimeout(() => {
      const messageId = `msg-${Date.now()}`
      setGeneratedMessage({
        id: messageId,
        emailText: `Dear [Name],\n\nI hope this email finds you well. I noticed you work at ${values.company} as a [Position]. I'm a ${values.role} with experience in ${values.skills}, and I'm interested in opportunities at ${values.company}.\n\nWould you be open to a brief conversation about your experience at ${values.company} and potentially referring me for a role that matches my skills?\n\nThank you for your time and consideration.\n\nBest regards,\n[Your Name]`,
        linkedInText: `Hello [Name],\n\nI noticed you work at ${values.company} as a [Position]. I'm a ${values.role} with experience in ${values.skills}, and I'm interested in opportunities at ${values.company}.\n\nWould you be open to a brief conversation about your experience at ${values.company} and potentially referring me for a role that matches my skills?\n\nThank you for your time and consideration.\n\nBest regards,\n[Your Name]`,
      })
      setIsGenerating(false)
    }, 1500)
  }

  function handleEdit() {
    if (generatedMessage) {
      router.push(`/dashboard/messages/${generatedMessage.id}`)
    }
  }

  function handleReset() {
    form.reset()
    setGeneratedMessage(null)
  }

  return (
    <div className="max-w-4xl mx-auto">
      {!generatedMessage ? (
        <Card>
          <CardHeader>
            <CardTitle>Create Personalized Referral Message</CardTitle>
            <CardDescription>
              Enter your details to generate a personalized LinkedIn message and email for referrals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Role</FormLabel>
                        <FormControl>
                          <Input placeholder="Frontend Developer" {...field} />
                        </FormControl>
                        <FormDescription>The position you're applying for.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Google" {...field} />
                        </FormControl>
                        <FormDescription>The company you want a referral for.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="skills"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skills</FormLabel>
                      <FormControl>
                        <Input placeholder="React, JavaScript, TypeScript" {...field} />
                      </FormControl>
                      <FormDescription>Comma-separated list of your key skills.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tone</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a tone" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="formal">Formal</SelectItem>
                          <SelectItem value="casual">Casual</SelectItem>
                          <SelectItem value="enthusiastic">Enthusiastic</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>The tone of your message.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="additionalInfo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any specific details you'd like to include in your message..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Any additional context or specific points you'd like to include.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full" disabled={isGenerating}>
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    "Generate Message"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      ) : (
        <MessagePreview message={generatedMessage} onEdit={handleEdit} onReset={handleReset} />
      )}
    </div>
  )
}

