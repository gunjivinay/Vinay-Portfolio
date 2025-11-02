import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send email using Resend API
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO_EMAIL = process.env.CONTACT_EMAIL || 'gunjivinaykumar2001@gmail.com'

    console.log('Contact form submission:', { name, email, hasApiKey: !!RESEND_API_KEY })

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      )
    }

    // Escape HTML in user input to prevent XSS
    const escapeHtml = (text: string) => {
      const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      }
      return text.replace(/[&<>"']/g, (m) => map[m])
    }

    // Email content with escaped user inputs
    const emailSubject = `Portfolio Contact: Message from ${escapeHtml(name)}`
    const safeEmailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">New Contact Form Submission</h2>
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${escapeHtml(message)}</p>
        </div>
        <p style="color: #6b7280; font-size: 14px;">This message was sent from your portfolio website contact form.</p>
      </div>
    `

    // Send email using Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        // Using onboarding@resend.dev while domain verification is pending
        // Once vinay.com is verified, change to: 'Portfolio Contact <contact@vinay.com>'
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: TO_EMAIL,
        reply_to: email,
        subject: emailSubject,
        html: safeEmailBody,
      }),
    })

    const responseText = await resendResponse.text()
    
    if (!resendResponse.ok) {
      let errorData
      try {
        errorData = JSON.parse(responseText)
      } catch {
        errorData = { message: responseText || 'Unknown error' }
      }
      
      console.error('Resend API error:', {
        status: resendResponse.status,
        statusText: resendResponse.statusText,
        error: errorData,
      })
      
      // Provide more specific error messages
      let errorMessage = 'Failed to send email. Please try again later.'
      if (errorData.message) {
        if (errorData.message.includes('Invalid API key')) {
          errorMessage = 'Email service configuration error. Please contact the administrator.'
        } else if (errorData.message.includes('rate limit')) {
          errorMessage = 'Too many requests. Please try again later.'
        } else {
          errorMessage = errorData.message
        }
      }
      
      return NextResponse.json(
        { error: errorMessage },
        { status: resendResponse.status || 500 }
      )
    }

    let data
    try {
      data = JSON.parse(responseText)
    } catch {
      console.error('Failed to parse Resend response:', responseText)
      return NextResponse.json(
        { error: 'Unexpected response from email service.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Message sent successfully!',
        id: data.id 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

