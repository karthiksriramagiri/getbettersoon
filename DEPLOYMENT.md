# GetBetterSoon - Deployment Guide

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   The website will be available at `http://localhost:8080`

## Vercel Deployment

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/getbettersoon.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect the Node.js setup
   - Click "Deploy"

### Configuration

The project includes:
- `package.json` - Node.js dependencies and scripts
- `server.js` - Express server configuration
- `vercel.json` - Vercel deployment configuration
- `.gitignore` - Git ignore rules

## Project Structure

```
getbettersoon/
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── script.js
│       └── connect.js
├── images/
│   └── [all image files]
├── *.html (all HTML pages)
├── package.json
├── server.js
├── vercel.json
└── .gitignore
```

## Features

- **Node.js/Express Backend**: Professional server setup
- **Static File Serving**: Optimized for CSS, JS, and images
- **SEO-Friendly Routes**: Clean URLs for all pages
- **Vercel Ready**: Configured for instant deployment
- **Mobile Responsive**: Works on all devices
- **Fast Loading**: Optimized assets and minimal dependencies

## Environment Variables

No environment variables are required for basic deployment.

## Custom Domain

After deployment, you can add a custom domain in the Vercel dashboard:
1. Go to your project dashboard
2. Click "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Support

For issues with deployment, check:
- Vercel logs in the dashboard
- Node.js version compatibility (requires Node 14+)
- Static file paths are correct 