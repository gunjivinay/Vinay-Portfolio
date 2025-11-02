# Deployment Guide - Portfolio Website

This guide will help you push your portfolio to GitHub and deploy it on Vercel.

## 📦 Step 1: Initialize Git Repository (if not already done)

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make your first commit
git commit -m "Initial commit: Portfolio website"
```

## 🔗 Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `portfolio` (or any name you prefer)
4. Description: "Personal Portfolio Website"
5. Choose **Public** or **Private** (your choice)
6. **DO NOT** initialize with README, .gitignore, or license (since you already have these)
7. Click **"Create repository"**

## 📤 Step 3: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note**: You'll be prompted for your GitHub username and password/token. If you have 2FA enabled, use a Personal Access Token instead of password.

## 🚀 Step 4: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Easiest)

1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account
2. Click **"Add New Project"** or **"Import Project"**
3. Import your GitHub repository (the one you just pushed)
4. Vercel will auto-detect Next.js settings
5. **Important**: Add environment variables:
   - Go to **"Environment Variables"**
   - Add `RESEND_API_KEY` with your Resend API key value
   - Add `CONTACT_EMAIL` with `gunjivinaykumar2001@gmail.com` (optional)
6. Click **"Deploy"**
7. Wait for deployment to complete (usually 2-3 minutes)
8. Your site will be live at a URL like: `https://your-portfolio.vercel.app`

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (run this in your project directory)
vercel

# For production deployment
vercel --prod
```

When prompted:
- Set up and deploy? **Yes**
- Which scope? (select your account)
- Link to existing project? **No** (for first time)
- Project name? (press enter for default)
- Directory? `./`
- Override settings? **No**

## 🔐 Step 5: Add Environment Variables in Vercel

**Critical**: You must add your environment variables in Vercel dashboard!

1. Go to your project in Vercel dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Add these variables:

```
RESEND_API_KEY = re_your_api_key_here
CONTACT_EMAIL = gunjivinaykumar2001@gmail.com
```

4. Select **Production**, **Preview**, and **Development** environments
5. Click **"Save"**
6. **Redeploy** your site (or it will redeploy automatically)

## ✅ Step 6: Verify Deployment

1. Visit your Vercel deployment URL
2. Test the contact form to ensure emails are working
3. Check all sections load properly
4. Test on mobile device
5. Verify dark/light mode toggle works

## 🔄 Step 7: Future Updates

After making changes:

```bash
# Add your changes
git add .

# Commit with a message
git commit -m "Description of your changes"

# Push to GitHub
git push

# Vercel will automatically redeploy!
```

## 📝 Important Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Always add environment variables in Vercel dashboard** after deployment
3. **Vercel automatically deploys** when you push to the main branch
4. **Check Vercel dashboard** for deployment logs if something goes wrong
5. **Custom domain**: You can add a custom domain in Vercel Settings → Domains

## 🐛 Troubleshooting

### Contact form not working?
- Check environment variables are set correctly in Vercel
- Verify Resend API key is valid
- Check Vercel deployment logs for errors

### Build fails?
- Check for TypeScript errors: `npm run build` locally
- Check Vercel build logs in dashboard
- Ensure all dependencies are in `package.json`

### Styles not loading?
- Ensure `tailwind.config.ts` and `postcss.config.js` are committed
- Check `globals.css` is imported correctly

## 🎉 You're Done!

Your portfolio is now live on Vercel! Share your deployment URL with the world!

