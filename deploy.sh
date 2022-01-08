#!/bin/sh
set -e

echo "Deploying application ..."

# Enter maintenance mode
    # Update codebase
    git fetch origin main
    git reset --hard origin/main


    # Install dependencies
    npm install
    npm run build

    chmod +rx deploy.sh && ./deploy.sh
    
    cp .env build/.env && cd build && pm2 reload index.js

echo "Application deployed! Successfully"
