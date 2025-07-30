# SoloLearn Project Setup Script for Windows
Write-Host "🚀 Setting up SoloLearn project for deployment..." -ForegroundColor Green

# Check if Git is installed
try {
    git --version | Out-Null
    Write-Host "✅ Git is installed" -ForegroundColor Green
} catch {
    Write-Host "❌ Git is not installed. Please install Git first." -ForegroundColor Red
    exit 1
}

# Check if Node.js is installed
try {
    node --version | Out-Null
    Write-Host "✅ Node.js is installed" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Check if npm is installed
try {
    npm --version | Out-Null
    Write-Host "✅ npm is installed" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not installed. Please install npm first." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Prerequisites check passed!" -ForegroundColor Green

# Install dependencies
Write-Host "📦 Installing frontend dependencies..." -ForegroundColor Yellow
npm install

Write-Host "📦 Installing backend dependencies..." -ForegroundColor Yellow
Set-Location express-backend
npm install
Set-Location ..

Write-Host "📦 Installing quiz backend dependencies..." -ForegroundColor Yellow
Set-Location real_time_quiz/backend
npm install
Set-Location ../..

# Initialize Git repository
Write-Host "🔧 Initializing Git repository..." -ForegroundColor Yellow
git init

# Add all files
Write-Host "📝 Adding files to Git..." -ForegroundColor Yellow
git add .

# Create initial commit
Write-Host "💾 Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: SoloLearn e-learning platform"

Write-Host ""
Write-Host "🎉 Setup completed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. Create a GitHub repository at https://github.com/yourusername/sololearn"
Write-Host "2. Add the remote origin: git remote add origin https://github.com/yourusername/sololearn.git"
Write-Host "3. Push to GitHub: git push -u origin main"
Write-Host "4. Follow the deployment guide in DEPLOYMENT.md"
Write-Host ""
Write-Host "📚 For detailed deployment instructions, see DEPLOYMENT.md" -ForegroundColor Cyan 