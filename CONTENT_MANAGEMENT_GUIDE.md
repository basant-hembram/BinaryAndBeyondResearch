# Content Management System - JSON Guide

This document explains how to use JSON files for managing website content in Finyzer Assets.

## Overview

All site content is managed through JSON files located in `src/data/`. This allows for easy content updates without modifying React components.

## Current JSON Files

### 1. **hero.json** - Homepage Hero Section
- Title, subtitle, CTA button, images
- Company branding and statistics
- WhatsApp contact information

### 2. **about.json** - About Us Page
- Company description and mission
- Statistics (trusted clients, investor base)
- Company image

### 3. **blog.json** - Blog Posts
- Blog title and collection
- Individual blog entries with images, dates, titles, descriptions

### 4. **calculator.json** - Investment Calculator
- Calculator title and description
- Input parameters (min, max, default values, steps)
- Chart configuration (colors, labels)

### 5. **faq.json** - FAQ Section
- Frequently asked questions and answers

### 6. **disclaimer.json** - Disclaimer Page
- Disclaimer title and sections
- Multiple paragraphs organized by sections
- Page metadata (breadcrumbs, background image)

### 7. **privacyPolicy.json** - Privacy Policy Page
- Privacy policy sections and content
- Page metadata

### 8. **termsOfUse.json** - Terms of Use Page
- Terms and conditions sections
- Page metadata

## JSON Structure Pattern

All content pages follow this consistent structure:

```json
{
  "title": "Page Title",
  "titleHighlight": "Highlighted Part",
  "sections": [
    {
      "id": "unique-section-id",
      "title": "Section Title",
      "paragraphs": [
        "First paragraph text...",
        "Second paragraph text...",
        "Additional paragraphs as needed"
      ]
    }
  ],
  "breadcrumbs": [
    {
      "label": "Home",
      "path": "/"
    },
    {
      "label": "Page Name",
      "path": "/page-url"
    }
  ],
  "backgroundImage": "/images/image-name.avif"
}
```

## How to Update Content

### Updating Disclaimer Content
1. Open `src/data/disclaimer.json`
2. Locate the section you want to update
3. Edit the paragraph text in the `paragraphs` array
4. Add new sections by following the existing structure
5. Save the file - changes appear automatically

### Updating Privacy Policy Content
1. Open `src/data/privacyPolicy.json`
2. Follow the same process as Disclaimer
3. Update section titles and paragraphs as needed

### Updating Terms of Use Content
1. Open `src/data/termsOfUse.json`
2. Add or modify sections as required
3. All changes are reflected immediately in the component

## Adding a New Section

To add a new section to any page:

```json
{
  "id": "new-section-id",
  "title": "New Section Title",
  "paragraphs": [
    "Your new paragraph content here"
  ]
}
```

Add this object to the `sections` array in the appropriate JSON file.

## Component Integration

All JSON files are imported in `src/data/index.ts` and exported through the `data` object:

```typescript
import { data } from '../data';

// Access data in components
const disclaimerData = data.disclaimer;
const privacyPolicyData = data.privacyPolicy;
const termsOfUseData = data.termsOfUse;
```

## Benefits

✅ **Easy Updates** - No coding required, just edit JSON
✅ **Centralized Management** - All content in one place
✅ **Version Control** - Track changes in Git
✅ **Type Safety** - TypeScript interfaces for data validation
✅ **Scalability** - Easy to add new pages and sections
✅ **No Admin Panel Needed** - Direct file editing

## Pages Using JSON Files

- ✅ Home (hero.json)
- ✅ About Us (about.json)
- ✅ Blog (blog.json)
- ✅ Calculator (calculator.json)
- ✅ FAQ (faq.json)
- ✅ Disclaimer (disclaimer.json)
- ✅ Privacy Policy (privacyPolicy.json)
- ✅ Terms of Use (termsOfUse.json)

## File Naming Convention

- camelCase for file names (e.g., `privacyPolicy.json`, `termsOfUse.json`)
- Lowercase with hyphens for section IDs (e.g., `our-commitment`, `terms-of-use`)
- PascalCase for component/interface names

## Best Practices

1. **Keep paragraphs concise** - Break long text into multiple paragraphs
2. **Use consistent formatting** - Follow existing style
3. **Update breadcrumbs** - Ensure page paths are correct
4. **Test after updates** - Verify changes appear correctly
5. **Commit changes** - Save updates in Git with meaningful messages

## To Add More Pages

1. Create a new JSON file in `src/data/` (e.g., `services.json`)
2. Follow the standard structure with sections and paragraphs
3. Import the JSON in `src/data/index.ts`
4. Add to the exported `data` object
5. Create/update the component to use the JSON data
6. Update TypeScript interfaces for type safety
