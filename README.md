# Payload CMS Form Builder Plugin Application

A web application built with PayloadCMS with the Payload Form Builder Plugin and Next.js that allows users to create, manage, and submit forms with file attachments.

## VIDEO
- https://youtu.be/dEXJyOnHwgY?si=Tvv_b30tI0aaSEre

## Overview

This application provides a form building and submission system with the following features:

- Dynamic form creation through PayloadCMS admin interface
- File attachment support
- Custom form fields including:
  - Text inputs
  - Email inputs
  - Checkboxes
  - File uploads
  - And more
- Form submission storage and management
- Confirmation messages and redirects after submission

## Tech Stack

- **Framework**: Next.js 15
- **CMS**: PayloadCMS
- **Database**: SQLite
- **Storage Adapter**: Local Disk
- **Package Manager**: npm
- **Language**: TypeScript

## Development

### Prerequisites

- Node.js ^18.20.2 || >=20.9.0
- pnpm ^9
- MongoDB

### Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with required environment variables
4. Start the development server:
   ```bash
   npm run dev
   ```

### Docker Support

The project includes Docker configuration for development:
