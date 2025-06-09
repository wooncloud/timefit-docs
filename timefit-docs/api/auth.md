# Authentication

Learn how to authenticate with the Timefit API.

## API Keys

Authentication is handled via API keys. Include your API key in the request header:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.timefit.com/v1/endpoint
```

## Getting an API Key

1. Sign up for a Timefit account
2. Navigate to Settings > API Keys
3. Generate a new API key

## Security Best Practices

- Never expose your API key in client-side code
- Use environment variables to store your API key
- Rotate your API keys regularly 