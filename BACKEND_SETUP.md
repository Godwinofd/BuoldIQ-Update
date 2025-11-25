# BuildIQ Backend Setup Guide

## Environment Variables Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="file:./prisma/dev.db"

# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-here"

# Gmail Configuration
GMAIL_USER="your-business-email@gmail.com"
GMAIL_APP_PASSWORD="your-gmail-app-password"

# Admin Credentials
ADMIN_EMAIL="admin@buildiq.agency"
ADMIN_PASSWORD_HASH="your-hashed-password"
```

## Setup Instructions

### 1. Gmail App Password Setup

To send emails via Nodemailer, you need a Gmail App Password:

1. Go to [Google Account](https://myaccount.google.com/)
2. Select **Security**
3. Under "How you sign in to Google," enable **2-Step Verification**
4. At the bottom, select **App passwords**
5. Select "Mail" and your device
6. Copy the 16-character password
7. Paste it as `GMAIL_APP_PASSWORD` in your `.env` file

### 2. Generate NextAuth Secret

Run this command to generate a random secret:

```bash
openssl rand -base64 32
```

Copy the output and use it as `NEXTAUTH_SECRET` in your `.env` file.

### 3. Create Admin Password Hash

Run this Node.js command to hash your admin password:

```bash
node -e "const bcrypt = require('bcryptjs'); bcrypt.hash('YOUR_PASSWORD_HERE', 10).then(console.log);"
```

Replace `YOUR_PASSWORD_HERE` with your desired admin password, then copy the hash output and use it as `ADMIN_PASSWORD_HASH` in your `.env` file.

### 4. Initialize Database

Run these commands to set up the database:

```bash
npx prisma generate
npx prisma db push
```

### 5. Start Development Server

```bash
npm run dev
```

## Admin Dashboard Access

- **URL**: `http://localhost:3000/admin/login`
- **Email**: The email you set in `ADMIN_EMAIL`
- **Password**: The password you hashed in step 3

## Deployment to Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Add all environment variables in the Vercel dashboard:
   - `DATABASE_URL`
   - `NEXTAUTH_URL` (your production URL)
   - `NEXTAUTH_SECRET`
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD_HASH`

## Features

- ✅ Contact form with database storage
- ✅ Automated thank-you emails via Gmail
- ✅ Admin notifications for new submissions
- ✅ Secure admin dashboard with authentication
- ✅ View, search, and manage contact submissions
- ✅ Mark submissions as read/unread
- ✅ Delete submissions
