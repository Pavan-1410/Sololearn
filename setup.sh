#!/bin/bash

# SoloLearn Project Setup Script
echo "🚀 Setting up SoloLearn project for deployment..."

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Prerequisites check passed!"

# Install dependencies
echo "📦 Installing frontend dependencies..."
npm install

echo "📦 Installing backend dependencies..."
cd express-backend
npm install
cd ..

echo "📦 Installing quiz backend dependencies..."
cd real_time_quiz/backend
npm install
cd ../..

# Initialize Git repository
echo "🔧 Initializing Git repository..."
git init

# Add all files
echo "📝 Adding files to Git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: SoloLearn e-learning platform"

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Create a GitHub repository at https://github.com/yourusername/sololearn"
echo "2. Add the remote origin: git remote add origin https://github.com/yourusername/sololearn.git"
echo "3. Push to GitHub: git push -u origin main"
echo "4. Follow the deployment guide in DEPLOYMENT.md"
echo ""
echo "📚 For detailed deployment instructions, see DEPLOYMENT.md" 