import axios from "axios"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const { name, phone, email, company, message } = req.body

  if (!name || !phone || !email || !company) {
    return res.status(400).json({ error: "Missing required fields" })
  }

  try {
    await axios.post(
      "https://api.resend.com/emails",
      {
        from: "Frey Farms Website <onboarding@resend.dev>",
        to: "hilarylong@freyfarms.com",
        reply_to: email,
        subject: `Bubbler Program Inquiry from ${name}`,
        html: [
          `<h2>New Bubbler Program Inquiry</h2>`,
          `<p><strong>Name:</strong> ${name}</p>`,
          `<p><strong>Phone:</strong> ${phone}</p>`,
          `<p><strong>Email:</strong> ${email}</p>`,
          `<p><strong>Company:</strong> ${company}</p>`,
          `<p><strong>Message:</strong></p>`,
          `<p>${message || "No message provided."}</p>`,
        ].join(""),
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )

    return res.status(200).json({ success: true })
  } catch (err) {
    const status = err.response?.status || 500
    const detail = err.response?.data?.message || "Failed to send email"
    return res.status(status).json({ error: detail })
  }
}
