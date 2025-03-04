"use client"
import { useState, useEffect } from "preact/hooks"
import { EmailForm } from "./email-form"
import { Progress } from "./progress"
import { Result } from "./result"

// Declare chrome as a global variable to avoid undefined errors.
// This is necessary because the chrome API is only available in the extension's context.
/* global chrome */

export function App() {
  const [view, setView] = useState("form") // form, sending, result
  const [result, setResult] = useState({ success: false, message: "" })
  const [savedData, setSavedData] = useState({
    senderEmail: "",
    apiKey: "",
  })

  useEffect(() => {
    // Load saved data from storage
    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.local.get(["senderEmail", "apiKey"], (data) => {
        if (data.senderEmail || data.apiKey) {
          setSavedData({
            senderEmail: data.senderEmail || "",
            apiKey: data.apiKey || "",
          })
        }
      })
    }
  }, [])

  const handleSend = async (formData) => {
    // Save sender email and API key for future use
    if (typeof chrome !== "undefined" && chrome.storage) {
      chrome.storage.local.set({
        senderEmail: formData.senderEmail,
        apiKey: formData.apiKey,
      })
    }

    setView("sending")

    try {
      const response = await sendEmail(formData)
      setResult({
        success: true,
        message: "Email sent successfully!",
        details: response,
      })
    } catch (error) {
      setResult({
        success: false,
        message: "Failed to send email",
        details: error.message,
      })
    }

    setView("result")
  }

  const handleReset = () => {
    setView("form")
    setResult({ success: false, message: "" })
  }

  return (
    <div className="w-[400px] min-h-[500px] bg-white text-gray-800 p-4 font-sans">
      {view === "form" && <EmailForm onSend={handleSend} savedData={savedData} />}
      {view === "sending" && <Progress />}
      {view === "result" && <Result result={result} onReset={handleReset} />}
    </div>
  )
}

async function sendEmail(formData) {
  const { senderEmail, apiKey, toAddresses, subject, body } = formData

  const toArray = toAddresses.split(",").map((email) => ({ email: email.trim() }))

  const data = {
    personalizations: [
      {
        to: toArray,
        subject: subject,
      },
    ],
    from: { email: senderEmail },
    content: [
      {
        type: "text/html",
        value: body,
      },
    ],
  }

  const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || `Error: ${response.status}`)
  }

  return "Email sent successfully"
}

