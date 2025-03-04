"use client"
import { useState } from "preact/hooks"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Label } from "./ui/label"

export function EmailForm({ onSend, savedData }) {
  const [formData, setFormData] = useState({
    senderEmail: savedData.senderEmail || "",
    apiKey: savedData.apiKey || "",
    toAddresses: "",
    subject: "",
    body: "",
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.senderEmail) newErrors.senderEmail = "Sender email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.senderEmail)) newErrors.senderEmail = "Invalid email format"

    if (!formData.apiKey) newErrors.apiKey = "API key is required"

    if (!formData.toAddresses) newErrors.toAddresses = "To address is required"
    else {
      const emails = formData.toAddresses.split(",").map((e) => e.trim())
      const invalidEmails = emails.filter((email) => !/\S+@\S+\.\S+/.test(email))
      if (invalidEmails.length > 0) newErrors.toAddresses = "Invalid email format"
    }

    if (!formData.subject) newErrors.subject = "Subject is required"
    if (!formData.body) newErrors.body = "Email body is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      onSend(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold text-primary mb-6">SendGrid API Tester</h1>

      <div className="space-y-2">
        <Label htmlFor="senderEmail">Sender Email</Label>
        <Input
          id="senderEmail"
          name="senderEmail"
          type="email"
          placeholder="from@example.com"
          value={formData.senderEmail}
          onChange={handleChange}
          className={errors.senderEmail ? "border-red-500" : ""}
        />
        {errors.senderEmail && <p className="text-red-500 text-xs">{errors.senderEmail}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="apiKey">SendGrid API Key</Label>
        <Input
          id="apiKey"
          name="apiKey"
          type="password"
          placeholder="SG.xxxxxxxxxxxxxxxxxxxxxxxx"
          value={formData.apiKey}
          onChange={handleChange}
          className={errors.apiKey ? "border-red-500" : ""}
        />
        {errors.apiKey && <p className="text-red-500 text-xs">{errors.apiKey}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="toAddresses">To Addresses</Label>
        <Input
          id="toAddresses"
          name="toAddresses"
          placeholder="to@example.com, another@example.com"
          value={formData.toAddresses}
          onChange={handleChange}
          className={errors.toAddresses ? "border-red-500" : ""}
        />
        <p className="text-xs text-gray-500">Separate multiple emails with commas</p>
        {errors.toAddresses && <p className="text-red-500 text-xs">{errors.toAddresses}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Email Subject"
          value={formData.subject}
          onChange={handleChange}
          className={errors.subject ? "border-red-500" : ""}
        />
        {errors.subject && <p className="text-red-500 text-xs">{errors.subject}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="body">Email Body</Label>
        <Textarea
          id="body"
          name="body"
          placeholder="Your email content here..."
          value={formData.body}
          onChange={handleChange}
          rows={5}
          className={errors.body ? "border-red-500" : ""}
        />
        {errors.body && <p className="text-red-500 text-xs">{errors.body}</p>}
      </div>

      <Button type="submit" className="w-full">
        Send Email
      </Button>
    </form>
  )
}

