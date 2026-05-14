import React, { useState } from "react"
import styled from "styled-components"

import H3 from "./typography/h3"

const ContactForm = () => {
  const [status, setStatus] = useState("idle")
  const [errorMsg, setErrorMsg] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus("loading")
    setErrorMsg("")

    const form = e.target
    const payload = {
      name: form.Name.value,
      phone: form.Phone.value,
      email: form.Email.value,
      company: form.Company.value,
      message: form.message.value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || "Something went wrong. Please try again.")
      }

      setStatus("success")
    } catch (err) {
      setErrorMsg(err.message)
      setStatus("error")
    }
  }

  if (status === "success") {
    return <H3 style={{ margin: "3em 0" }}>Someone from Our Team will Get in Touch with You Shortly!</H3>
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        {status === "error" && <ErrorMessage>{errorMsg}</ErrorMessage>}
        <Input type='text' name='Name' placeholder="Your Name" required />
        <Input type='tel' name='Phone' placeholder="Your phone number" required />
        <Input type="email" name="Email" placeholder="Your email" required />
        <Input type="text" name="Company" placeholder="Company name" required />
        <Textarea name='message' rows="4" placeholder="Enter your message here..."></Textarea>
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Request Information"}
        </Button>
      </Flex>
    </form>
  )
}

const ErrorMessage = styled.div`
  background: #fef2f2;
  border: 1px solid #fca5a5;
  color: #991b1b;
  padding: 0.75em 1em;
  border-radius: 5px;
  margin-bottom: 1em;
  font-family: 'Brandon Grotesque Regular';
`

const Flex = styled.div`
  display: grid;
`

const Input = styled.input`
  padding: 1em;
  margin-bottom: 1em;
  display: block;
  border-radius: 5px;
  border: #6f6f6f solid 1px;
  -webkit-appearance: none;
  clear: both;
  font-family: 'Brandon Grotesque Regular';
  &::placeholder {
    font-family: 'Brandon Grotesque Regular';
  }
  &:focus {
      border: green solid 1px;
      outline: none;
  }
`

const Textarea = styled.textarea`
  padding: 1em 0 1em 1em;
  display: block;
  border-radius: 5px;
  border: #6f6f6f solid 1px;
  font-family: 'Brandon Grotesque Regular';
  -webkit-appearance: none;
  clear: both;
  &::placeholder {
    font-family: 'Brandon Grotesque Regular';
  }
  &:focus {
      border: green solid 1px;
      outline: none;
  }
`

const Button = styled.button`
  border-radius: 5px;
  border: 0;
  background: #095129;
  padding: 1em 2.25em;
  font-size: 18px;
  letter-spacing: .1em;
  color: white;
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  outline: 0;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
  max-width: 400px;
  font-family: 'Brandon Grotesque Regular';
  margin: 1em 0;
  transition: .15s ease;
  font-weight: 500;
  &:hover {
    background: #292825;
    box-shadow: 0px 4px 7px rgba(33,32,30, .27);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default ContactForm
