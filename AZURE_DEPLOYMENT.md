# Azure App Service Deployment Guide

This guide provides step-by-step instructions for deploying the Rachel Portfolio website to Azure App Service.

## Prerequisites

- Azure account with active subscription
- Azure CLI installed (optional but recommended)
- Git repository with the portfolio code

## Method 1: Deploy via Azure Portal (Recommended for beginners)

### Step 1: Create App Service

1. **Login to Azure Portal**: Go to [portal.azure.com](https://portal.azure.com)

2. **Create Resource**: Click "Create a resource" → "Web App"

3. **Configure Basic Settings**:
   - **Subscription**: Select your subscription
   - **Resource Group**: Create new or select existing
   - **Name**: `rachel-portfolio` (must be globally unique)
   - **Publish**: Code
   - **Runtime stack**: Node 22 LTS
   - **Operating System**: Linux
   - **Region**: Choose closest to your target audience

4. **Configure App Service Plan**:
   - Create new plan or select existing
   - **SKU**: B1 Basic (minimum recommended for production)

5. **Review and Create**: Click "Review + create" → "Create"

### Step 2: Configure Deployment

1. **Go to App Service**: Navigate to your created App Service

2. **Deployment Center**:
   - Go to "Deployment Center" in the left menu
   - **Source**: GitHub
   - **Organization**: Your GitHub username
   - **Repository**: Select the portfolio repository
   - **Branch**: main (or master)

3. **Build Configuration**:
   - **Runtime stack**: Node.js
   - **Version**: 22 LTS
   - Azure will automatically detect it's a Next.js app

4. **Save Configuration**: Click "Save"

### Step 3: Environment Variables (if needed)

1. **Configuration**: Go to "Configuration" in the left menu

2. **Application Settings**: Add the following if needed:
   ```
   NODE_ENV = production
   WEBSITE_NODE_DEFAULT_VERSION = 22-lts
   SCM_DO_BUILD_DURING_DEPLOYMENT = true
   ```

3. **Save**: Click "Save" and "Continue"

## Method 2: Deploy via GitHub Actions (Recommended for CI/CD)

### Step 1: Create App Service (same as Method 1)

### Step 2: Set up GitHub Actions

1. **Create Workflow File**: In your repository, create `.github/workflows/azure-webapps-node.yml`:

```yaml
name: Build and deploy Node.js app to Azure Web App

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: Set up Node.js version
        uses: actions/setup-node@v3
        with:
          node-version: '22'

      - name: npm install, build
        run: |
          npm install
          npm run build

      - name: Upload artifact for deployment job
        uses: actions/upload-artifact@v3
        with:
          name: node-app
          path: .

  deploy:
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: 'Production'
      url: ${{ steps.deploy-to-webapp.outputs.webapp-url }}

    steps:
      - name: Download artifact from build job
        uses: actions/download-artifact@v3
        with:
          name: node-app

      - name: 'Deploy to Azure Web App'
        id: deploy-to-webapp
        uses: azure/webapps-deploy@v2
        with:
          app-name: 'rachel-portfolio'
          slot-name: 'Production'
          publish-profile: ${{ secrets.AZUREAPPSERVICE_PUBLISHPROFILE }}
          package: .
```

2. **Get Publish Profile**:
   - In Azure Portal, go to your App Service
   - Click "Get publish profile" and download the file
   - Copy the entire content

3. **Add GitHub Secret**:
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `AZUREAPPSERVICE_PUBLISHPROFILE`
   - Value: Paste the publish profile content

4. **Commit and Push**: The deployment will automatically trigger

## Method 3: Deploy via Azure CLI

### Step 1: Install Azure CLI

```bash
# Windows (using winget)
winget install Microsoft.AzureCLI

# Or download from: https://aka.ms/installazurecliwindows
```

### Step 2: Login and Deploy

```bash
# Login to Azure
az login

# Create resource group
az group create --name rachel-portfolio-rg --location "East US"

# Create App Service plan
az appservice plan create \
  --name rachel-portfolio-plan \
  --resource-group rachel-portfolio-rg \
  --sku B1 \
  --is-linux

# Create web app
az webapp create \
  --resource-group rachel-portfolio-rg \
  --plan rachel-portfolio-plan \
  --name rachel-portfolio \
  --runtime "NODE|22-lts"

# Configure deployment from GitHub
az webapp deployment source config \
  --name rachel-portfolio \
  --resource-group rachel-portfolio-rg \
  --repo-url https://github.com/YOUR_USERNAME/rachel-portfolio \
  --branch main \
  --manual-integration

# Configure app settings
az webapp config appsettings set \
  --resource-group rachel-portfolio-rg \
  --name rachel-portfolio \
  --settings NODE_ENV=production
```

## Post-Deployment Configuration

### 1. Custom Domain (Optional)

1. **Purchase Domain**: Buy a domain from your preferred registrar
2. **Add Custom Domain**: In Azure Portal → App Service → Custom domains
3. **Configure DNS**: Point your domain to the Azure App Service URL
4. **SSL Certificate**: Azure provides free SSL certificates for custom domains

### 2. Performance Optimization

1. **Application Insights**: Enable for monitoring and performance tracking
2. **CDN**: Set up Azure CDN for better global performance
3. **Caching**: Configure appropriate caching headers

### 3. Security

1. **Authentication**: Set up Azure AD authentication if needed
2. **IP Restrictions**: Configure if you need to restrict access
3. **HTTPS Only**: Ensure HTTPS redirect is enabled

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node.js version compatibility
   - Verify package.json scripts
   - Check build logs in Azure Portal

2. **Application Won't Start**:
   - Verify `start` script in package.json
   - Check application logs in Azure Portal
   - Ensure all dependencies are installed

3. **Static Files Not Loading**:
   - Verify `next.config.ts` configuration
   - Check public folder structure
   - Ensure proper routing configuration

### Accessing Logs

1. **Azure Portal**: App Service → Log stream
2. **Azure CLI**: 
   ```bash
   az webapp log tail --name rachel-portfolio --resource-group rachel-portfolio-rg
   ```

## Monitoring and Maintenance

### 1. Set up Monitoring

- Enable Application Insights
- Configure alerts for downtime or performance issues
- Set up log analytics

### 2. Regular Updates

- Monitor for security updates
- Update dependencies regularly
- Review and optimize performance

### 3. Backup Strategy

- Set up automated backups in Azure
- Keep your code repository updated
- Document configuration changes

## Cost Optimization

### 1. Right-sizing

- Start with Basic B1 plan
- Monitor usage and scale as needed
- Consider App Service Environment for high-traffic sites

### 2. Auto-scaling

- Configure auto-scaling rules based on CPU/memory
- Set up schedule-based scaling for predictable traffic

### 3. Monitoring Costs

- Use Azure Cost Management
- Set up billing alerts
- Regular review of resource usage

## Support

For technical issues:
- Azure Documentation: [docs.microsoft.com/azure](https://docs.microsoft.com/azure)
- Azure Support: Available through Azure Portal
- Community: Stack Overflow with `azure` tag

For application-specific issues:
- Check the main README.md file
- Review Next.js documentation
- Contact the development team
