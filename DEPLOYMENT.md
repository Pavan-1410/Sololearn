# Deployment Guide for SoloLearn

This guide will help you deploy the SoloLearn project to GitHub and various hosting platforms.

## 🚀 Step 1: GitHub Setup

### 1.1 Initialize Git Repository

```bash
# Navigate to the project directory
cd new_sololearn/sololearn/sololearn

# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: SoloLearn e-learning platform"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/yourusername/sololearn.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 1.2 GitHub Repository Setup

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `sololearn` or `sololearn-platform`
3. Make it public or private as per your preference
4. Don't initialize with README (we already have one)
5. Copy the repository URL and use it in the commands above

## 🚀 Step 2: Frontend Deployment

### 2.1 Vercel Deployment (Recommended)

1. **Connect to Vercel**:
   - Go to [Vercel](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Build Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables** (if needed):
   - Add any frontend environment variables
   - Set `VITE_API_URL` to your backend URL

4. **Deploy**:
   - Click "Deploy"
   - Vercel will automatically build and deploy your app

### 2.2 Netlify Deployment

1. **Connect to Netlify**:
   - Go to [Netlify](https://netlify.com)
   - Sign up/Login with GitHub
   - Click "New site from Git"

2. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18` (in environment variables)

3. **Deploy**:
   - Click "Deploy site"

## 🚀 Step 3: Backend Deployment

### 3.1 Railway Deployment (Recommended)

1. **Connect to Railway**:
   - Go to [Railway](https://railway.app)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Select "Deploy from GitHub repo"

2. **Configure Backend**:
   - Select your repository
   - Set root directory to `express-backend`
   - Railway will auto-detect Node.js

3. **Environment Variables**:
   ```env
   DATABASE_URL=your_mongodb_atlas_url
   JWT_SECRET=your_jwt_secret
   PORT=5000
   NODE_ENV=production
   ```

4. **Deploy**:
   - Railway will automatically deploy your backend

### 3.2 Render Deployment

1. **Connect to Render**:
   - Go to [Render](https://render.com)
   - Sign up/Login with GitHub
   - Click "New Web Service"

2. **Configure Service**:
   - Connect your GitHub repository
   - Set root directory to `express-backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Environment Variables**:
   - Add the same environment variables as above

4. **Deploy**:
   - Click "Create Web Service"

### 3.3 Quiz Backend Deployment

For the real-time quiz system, deploy it separately:

1. **Create another service** on Railway/Render
2. **Set root directory** to `real_time_quiz/backend`
3. **Use the same configuration** as the main backend

## 🚀 Step 4: Database Setup

### 4.1 MongoDB Atlas

1. **Create MongoDB Atlas Account**:
   - Go to [MongoDB Atlas](https://mongodb.com/atlas)
   - Create a free account

2. **Create Cluster**:
   - Choose "Shared" (free tier)
   - Select your preferred region
   - Click "Create"

3. **Configure Database**:
   - Create a database user
   - Set up network access (allow all IPs for development)
   - Get your connection string

4. **Add to Environment Variables**:
   ```env
   DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/sololearn
   ```

## 🚀 Step 5: Domain and SSL

### 5.1 Custom Domain (Optional)

1. **Vercel/Netlify**:
   - Go to your project settings
   - Add custom domain
   - Configure DNS settings

2. **Backend**:
   - Railway/Render provides HTTPS by default
   - You can add custom domains in their settings

## 🚀 Step 6: Environment Configuration

### 6.1 Frontend Environment Variables

Create `.env` file in the root directory:

```env
VITE_API_URL=https://your-backend-url.railway.app
VITE_QUIZ_API_URL=https://your-quiz-backend-url.railway.app
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

### 6.2 Backend Environment Variables

In Railway/Render dashboard:

```env
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/sololearn
JWT_SECRET=your_super_secret_jwt_key_here
PORT=5000
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-url.vercel.app
```

## 🚀 Step 7: Testing Deployment

### 7.1 Test Frontend
- Visit your frontend URL
- Check if the app loads correctly
- Test navigation and basic functionality

### 7.2 Test Backend
- Test API endpoints using Postman or curl
- Check if database connections work
- Verify file uploads (if applicable)

### 7.3 Test Quiz System
- Test teacher interface
- Test student interface
- Verify video recording functionality

## 🚀 Step 8: Monitoring and Maintenance

### 8.1 Set up Monitoring
- Enable logging in your deployment platforms
- Set up error tracking (Sentry, LogRocket)
- Monitor performance metrics

### 8.2 Regular Updates
- Keep dependencies updated
- Monitor security vulnerabilities
- Backup database regularly

## 🚀 Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Database Connection Issues**:
   - Verify MongoDB Atlas connection string
   - Check network access settings
   - Ensure database user has correct permissions

3. **CORS Errors**:
   - Update CORS_ORIGIN in backend environment variables
   - Ensure frontend URL is correctly configured

4. **Environment Variables**:
   - Double-check all environment variables are set
   - Ensure no typos in variable names
   - Restart services after changing environment variables

## 🚀 Next Steps

1. **Set up CI/CD**:
   - Configure GitHub Actions for automated testing
   - Set up automatic deployments on push

2. **Add Analytics**:
   - Google Analytics for frontend
   - Application monitoring for backend

3. **Security Hardening**:
   - Enable rate limiting
   - Set up proper authentication
   - Configure HTTPS redirects

4. **Performance Optimization**:
   - Enable CDN for static assets
   - Optimize images and assets
   - Implement caching strategies

---

**Remember**: Always test thoroughly in development before deploying to production! 