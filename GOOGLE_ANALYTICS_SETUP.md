# Google Analytics Setup Guide

This project includes Google Analytics 4 (GA4) integration with automatic page view tracking and custom event tracking capabilities.

## Setup Instructions

### 1. Get Your Google Analytics Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or select an existing one
3. Go to **Admin** → **Data Streams** → Select your web stream
4. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Configure Environment Variable

Create a `.env` file in the root directory:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

**Important:** 
- For production builds, you'll need to set this as an environment variable in your deployment platform (GitHub Actions, Vercel, Netlify, etc.)
- Never commit the `.env` file with your actual Measurement ID to version control

### 3. Verify Installation

1. Build your project: `npm run build`
2. Deploy and visit your site
3. Open Google Analytics → **Reports** → **Realtime**
4. You should see active users when you visit your site

## Features

### Automatic Page View Tracking

Page views are automatically tracked when users navigate between routes using React Router. No additional configuration needed.

### Custom Event Tracking

The analytics utility provides helper functions for tracking common events:

```typescript
import { analytics } from '../utils/analytics'

// Track button clicks
analytics.trackButtonClick('Button Name', 'Location')

// Track external link clicks
analytics.trackExternalLink('https://example.com', 'Link Text')

// Track case study views
analytics.trackCaseStudyView('Case Study Name')

// Track CTA clicks
analytics.trackCTAClick('CTA Name', 'Location')

// Track form submissions
analytics.trackFormSubmit('Form Name')

// Track social media clicks
analytics.trackSocialClick('Platform Name')
```

### Manual Event Tracking

For custom events, use the `trackEvent` function:

```typescript
import { trackEvent } from '../utils/analytics'

trackEvent('action', 'category', 'label', value)
```

## Current Tracking Implementation

The following events are already tracked:

- ✅ Page views (automatic on route changes)
- ✅ Hero CTA buttons
- ✅ Contact form submissions
- ✅ Social media link clicks
- ✅ Case study page views
- ✅ External link clicks (cal.com)

## Testing

### Development Mode

In development, if the Measurement ID is not set, you'll see a console warning. Analytics will not be initialized, so your app will work normally.

### Production Testing

1. Deploy with your Measurement ID set
2. Visit your site and perform actions
3. Check Google Analytics Realtime reports to verify events are being tracked

## Privacy Considerations

- Google Analytics respects user privacy settings
- Consider adding a cookie consent banner if required by your jurisdiction (GDPR, CCPA, etc.)
- You can configure data retention and IP anonymization in Google Analytics settings

## Troubleshooting

### Analytics not working?

1. **Check Measurement ID**: Verify `VITE_GA_MEASUREMENT_ID` is set correctly
2. **Check Browser Console**: Look for any errors or warnings
3. **Check Network Tab**: Verify requests to `googletagmanager.com` are being made
4. **Ad Blockers**: Some ad blockers may prevent GA from loading
5. **Privacy Extensions**: Browser privacy extensions may block analytics

### Events not showing in GA?

- Events may take 24-48 hours to appear in standard reports
- Use Realtime reports to see events immediately
- Check that events are being sent (Network tab → Filter by `collect`)

## Additional Resources

- [Google Analytics 4 Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 Event Tracking Guide](https://developers.google.com/analytics/devguides/collection/ga4/events)

