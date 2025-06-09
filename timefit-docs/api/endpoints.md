# API Endpoints

Detailed documentation of all available API endpoints.

## User Management

### GET /users/me

Get current user information.

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.timefit.com/v1/users/me
```

Response:
```json
{
  "id": "user123",
  "email": "user@example.com",
  "name": "John Doe"
}
```

## Time Tracking

### POST /time-entries

Create a new time entry.

```bash
curl -X POST \
     -H "Authorization: Bearer YOUR_API_KEY" \
     -H "Content-Type: application/json" \
     -d '{"description": "Working on docs", "duration": 3600}' \
     https://api.timefit.com/v1/time-entries
```

### GET /time-entries

Get all time entries.

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.timefit.com/v1/time-entries
``` 