# Contact Form Email Setup Guide

This guide will help you set up the contact form to receive emails when someone fills out the form on your portfolio website.

## Step 1: Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day free tier)
3. Verify your email address

## Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Go to **API Keys** in the sidebar
3. Click **Create API Key**
4. Give it a name (e.g., "Portfolio Contact Form")
5. Copy the API key (it starts with `re_`)

## Step 3: Set Up Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add the following variables:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=gunjivinaykumar2001@gmail.com
```

**Important**: 
- Replace `re_your_api_key_here` with your actual Resend API key
- The `CONTACT_EMAIL` is optional (defaults to `gunjivinaykumar2001@gmail.com` if not set)

## Step 4: Verify Your Sender Domain (Optional but Recommended)

For production, you should verify your domain:

1. In Resend dashboard, go to **Domains**
2. Add your domain (e.g., `yourdomain.com`)
3. Add the DNS records Resend provides to your domain's DNS settings
4. Wait for verification (usually takes a few minutes)

**Note**: For development, you can use `onboarding@resend.dev` as the sender (this is already set in the code).

## Step 5: Update the Sender Email (After Domain Verification)

Once your domain is verified in Resend (all DNS records show "Verified" status):

1. Open `app/api/contact/route.ts`
2. Find the line with `from: 'Portfolio Contact <onboarding@resend.dev>'`
3. Replace it with your verified domain:
```typescript
from: 'Portfolio Contact <contact@vinay.com>', // Your verified domain
```

**Note:** While your domain verification is pending, the form will use `onboarding@resend.dev`. Once all DNS records are verified (DKIM, MX, SPF), you can switch to your domain email.

## Testing the Contact Form

1. Make sure your `.env.local` file is set up correctly
2. Restart your development server:
   ```bash
   npm run dev
   ```
3. Fill out the contact form on your website
4. Check your email inbox for the new message
5. The form should show a success message when the email is sent

## Troubleshooting

### Form not sending emails?

1. **Check your API key**: Make sure `RESEND_API_KEY` is correct in `.env.local`
2. **Check server logs**: Look for error messages in your terminal/console
3. **Verify API key permissions**: Ensure your Resend API key is active
4. **Check email limits**: Free tier allows 100 emails/day

### Environment variables not working?

- Make sure `.env.local` is in the root directory (same level as `package.json`)
- Restart your development server after creating/modifying `.env.local`
- Never commit `.env.local` to Git (it should be in `.gitignore`)

### Still having issues?

- Check the Resend dashboard for API errors
- Review the browser console for client-side errors
- Check the Next.js terminal for server-side errors

## Alternative Email Services

If you prefer a different email service, you can modify `app/api/contact/route.ts` to use:
- **Nodemailer** with SMTP (Gmail, Outlook, etc.)
- **SendGrid**
- **Mailgun**
- **AWS SES**

For more information, check the [Resend documentation](https://resend.com/docs).

