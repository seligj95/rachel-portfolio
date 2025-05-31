# Azure App Service Deployment Troubleshooting Guide

## Current Issues and Solutions

### Problem: Application Won't Start on Azure App Service

Based on the log stream showing startup failures, here are the key fixes implemented:

## 1. Updated GitHub Actions Workflow

The workflow now:
- Uses Node.js 22.x
- Properly builds the Next.js application
- Creates a custom `server.js` for Azure compatibility
- Includes proper `web.config` for IIS integration
- Packages only production dependencies

## 2. Created Custom Server Script

A new `server.js` file has been created that:
- Handles Azure's specific hosting environment
- Properly configures Next.js for production
- Includes error handling and graceful shutdown
- Works with Azure's load balancer and proxy setup

## 3. Updated Package.json

The start script now points to `server.js` instead of `next start` for better Azure compatibility.

## 4. Enhanced Web.config

The `web.config` file now includes:
- Proper IIS node configuration
- Static file handling for Next.js assets
- Better error handling
- Performance optimizations

## Deployment Steps

### 1. Verify Azure App Service Configuration

In your Azure App Service, ensure:

```bash
# Application Settings
NODE_ENV=production
WEBSITE_NODE_DEFAULT_VERSION=22-lts
SCM_DO_BUILD_DURING_DEPLOYMENT=true
```

### 2. Check GitHub Secrets

Ensure you have the correct secret:
- `AZURE_WEBAPP_PUBLISH_PROFILE` contains the publish profile from Azure

### 3. Update GitHub Actions Workflow Variables

In the workflow file, update the `AZURE_WEBAPP_NAME` to match your actual app service name:

```yaml
env:
  AZURE_WEBAPP_NAME: your-actual-app-service-name
```

### 4. Trigger New Deployment

After making these changes, commit and push to trigger a new deployment:

```bash
git add .
git commit -m "Fix Azure App Service deployment configuration"
git push origin main
```

## Monitoring Deployment

### 1. Check GitHub Actions

Monitor the GitHub Actions workflow to ensure:
- Build completes successfully
- Deployment artifact is created properly
- Deployment to Azure succeeds

### 2. Azure App Service Logs

In Azure Portal:
1. Go to your App Service
2. Navigate to "Log stream" or "App Service logs"
3. Enable application logging
4. Watch for startup messages

### 3. Expected Startup Messages

You should see:
```
> Ready on http://localhost:PORT
> Environment: production
> Process PID: [number]
```

## Common Issues and Solutions

### Issue: "Cannot find module 'next'"
**Solution**: The GitHub Actions workflow now properly includes node_modules in the deployment package.

### Issue: "ENOENT: no such file or directory, open '.next/BUILD_ID'"
**Solution**: The workflow now ensures the .next directory is included in the deployment.

### Issue: "Port already in use"
**Solution**: The server.js now properly uses Azure's PORT environment variable.

### Issue: Static files not loading
**Solution**: The web.config now includes proper rewrite rules for Next.js static assets.

## Manual Verification Steps

If the deployment still fails, you can manually verify:

1. **Local build test**:
```bash
npm install
npm run build
node server.js
```

2. **Check build output**:
```bash
ls -la .next/
```

3. **Verify package.json scripts**:
```bash
npm run start
```

## Alternative Deployment Method

If GitHub Actions continues to fail, you can try direct deployment:

1. **Build locally**:
```bash
npm install
npm run build
```

2. **Create deployment zip**:
```bash
# Include only necessary files
zip -r deploy.zip .next/ public/ node_modules/ package*.json server.js web.config
```

3. **Deploy via Azure CLI**:
```bash
az webapp deployment source config-zip --resource-group YOUR_RG --name YOUR_APP_NAME --src deploy.zip
```

## Environment Variables for Azure

Set these in Azure App Service Configuration:

```
NODE_ENV=production
WEBSITE_NODE_DEFAULT_VERSION=22-lts
PORT=process.env.PORT (auto-set by Azure)
WEBSITES_HOSTNAME=process.env.WEBSITES_HOSTNAME (auto-set by Azure)
```

## Next Steps

1. Commit and push the changes
2. Monitor the GitHub Actions workflow
3. Check Azure App Service logs
4. If issues persist, try the manual deployment method
5. Contact support with specific error messages if problems continue

The application should now start successfully on Azure App Service with proper Next.js production configuration.
