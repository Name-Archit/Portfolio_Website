# Private contact message storage

The contact form stores submissions in MongoDB Atlas. It does not expose a page or API for reading submissions publicly.

## Configure MongoDB Atlas

1. Create a MongoDB Atlas cluster and a database user with read/write access to the cluster.
2. In Atlas Network Access, allow connections from the backend host. For Render, use the outbound IP allowlist if available; otherwise Atlas may require allowing `0.0.0.0/0`, protected by a strong database password.
3. Copy the Atlas connection string. Replace its username/password placeholders and URL-encode special characters in the password.
4. In the Render backend service, add `MONGODB_URI` with that connection string. Optionally set `MONGODB_DATABASE` (defaults to `portfolio`) and `MONGODB_COLLECTION` (defaults to `contact_messages`).
5. Redeploy the backend. Submit a test message, then inspect the `contact_messages` collection in Atlas Data Explorer.

Keep the connection string private. Never put it in frontend code or commit it to the repository. The API only inserts contact documents; it has no public read endpoint.

If `MONGODB_URI` is missing or MongoDB is unavailable, the form reports a delivery error rather than claiming the message was received.
