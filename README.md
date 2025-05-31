# Rachel Portfolio

A minimalist portfolio website for Rachel, a graphic designer, illustrator, and artist. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring clean design principles and optimized for Azure App Service deployment.

## Features

- **Minimalist Design**: Clean, symmetric layout with Helvetica typography
- **Responsive**: Fully responsive design for all devices
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Ready**: Optimized for search engines with proper meta tags
- **Portfolio Sections**: Dedicated areas for Graphic Design, Illustration, and Art
- **Contact Form**: Professional contact form for client inquiries
- **Azure Ready**: Configured for easy deployment to Azure App Service

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **SEO**: Next-SEO
- **Deployment**: Azure App Service

## Getting Started

### Prerequisites

- Node.js 22.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rachel-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── portfolio/      # Portfolio page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── About.tsx       # About section
│   ├── FeaturedWork.tsx # Featured work section
│   ├── Hero.tsx        # Hero section
│   └── Navigation.tsx  # Navigation component
```

## Customization

### Design System

The design system is based on minimalist principles with:
- **Typography**: Helvetica Neue family
- **Colors**: Defined in CSS variables in `globals.css`
- **Spacing**: Tailwind CSS utilities
- **Animations**: Subtle fade-in and slide-up effects

### Content Updates

1. **Portfolio Projects**: Update the projects array in `src/app/portfolio/page.tsx`
2. **Featured Work**: Modify `src/components/FeaturedWork.tsx`
3. **About Content**: Edit `src/app/about/page.tsx`
4. **Contact Information**: Update `src/app/contact/page.tsx`
5. **Navigation**: Modify `src/components/Navigation.tsx`

### Images

Replace placeholder images in the `public/` directory:
- Add project images
- Add portrait/studio photos
- Update image paths in components

## Azure App Service Deployment

### Method 1: Direct Deployment

1. **Build the application**:
```bash
npm run build
```

2. **Create Azure App Service**:
   - Go to Azure Portal
   - Create new App Service
   - Select Node.js 22 LTS runtime
   - Choose appropriate pricing tier

3. **Deploy using VS Code**:
   - Install Azure App Service extension
   - Right-click project folder
   - Select "Deploy to Web App"
   - Choose your App Service

### Method 2: GitHub Actions (Recommended)

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Set up GitHub Actions**:
   - Go to Azure Portal → App Service → Deployment Center
   - Select GitHub as source
   - Configure repository and branch
   - Azure will auto-generate workflow file

3. **Environment Variables** (if needed):
   - Set `NODE_ENV=production`
   - Set `WEBSITE_NODE_DEFAULT_VERSION=22-lts`

### Method 3: Azure CLI

```bash
# Login to Azure
az login

# Create resource group
az group create --name rachel-portfolio-rg --location "East US"

# Create App Service plan
az appservice plan create --name rachel-portfolio-plan --resource-group rachel-portfolio-rg --sku B1 --is-linux

# Create web app
az webapp create --resource-group rachel-portfolio-rg --plan rachel-portfolio-plan --name rachel-portfolio --runtime "NODE|18-lts"

# Deploy code
az webapp deployment source config-zip --resource-group rachel-portfolio-rg --name rachel-portfolio --src dist.zip
```

## Performance Optimization

The application includes several performance optimizations:

- **Static Generation**: Pages are statically generated where possible
- **Image Optimization**: Next.js Image component for optimized loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Compression**: Gzip compression enabled
- **Caching**: Proper cache headers for static assets

## SEO Optimization

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML structure
- Proper heading hierarchy

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is private and proprietary. All rights reserved.

## Support

For questions or support, please contact [your-email@domain.com].
