import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST', 'OPTIONS']);
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ success: false, error: 'Missing RESEND_API_KEY' });
  }

  const { name, email, message, subject, to } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'name, email, and message are required' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const recipient = to || 'vinayakxsingh21@gmail.com';
  const emailSubject = subject || `New contact form message from ${name}`;

  const html = `
    <div>
      <p><strong>Name:</strong> ${String(name)}</p>
      <p><strong>Email:</strong> ${String(email)}</p>
      <p><strong>Subject:</strong> ${String(emailSubject)}</p>
      <p><strong>Message:</strong></p>
      <p>${String(message).replace(/\n/g, '<br/>')}</p>
    </div>
  `;

  try {
    const { data } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: recipient,
      subject: emailSubject,
      html,
      replyTo: email,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error?.message || String(error) });
  }
}
