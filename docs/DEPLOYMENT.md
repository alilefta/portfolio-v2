# Production deployment

The portfolio is a server-rendered Next.js 16 application. Deploy it to a Node.js-capable platform; Vercel is the recommended initial host because the application already includes Vercel Analytics.

## Before connecting the repository

1. Run `pnpm verify`. It runs the contract tests, linter, and production build in that order.
2. Ensure the production branch contains the intended commit.
3. Choose the final public domain. Set it before requesting indexing so canonical URLs, the sitemap, and social sharing point at the right host.

## Production environment variables

Configure these in the hosting provider's production environment settings. Do not commit a production `.env` file.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes | Final absolute origin, for example `https://example.com`. It drives canonical URLs, sitemap entries, robots, JSON-LD, and social images. No trailing slash. |
| `RESEND_API_KEY` | Yes for email features | Server-only Resend key used by contact and newsletter endpoints. |
| `CONTACT_FROM_EMAIL` | Yes for contact delivery | A sender on a domain verified in Resend. |
| `CONTACT_TO_EMAIL` | Yes for contact delivery | Inbox that receives portfolio enquiries. |
| `RESEND_SUBSCRIBER_SEGMENT_ID` | Optional | Resend segment receiving newsletter subscribers. |
| `NEWSLETTER_FROM_EMAIL` | Optional today | Reserved sender identity for future newsletter sends. |

Use a verified Resend domain for `CONTACT_FROM_EMAIL`. The contact form will return a safe configuration error until its sender, recipient, and API key are all set. Newsletter signup can use the same API key; its segment is optional.

## Vercel setup

1. Import this repository into Vercel and select the production branch.
2. Keep the detected framework preset as **Next.js** and the build command as `pnpm build`.
3. Add the production variables above, then deploy.
4. Add the final custom domain in Vercel, update `NEXT_PUBLIC_SITE_URL` to that exact HTTPS origin, and redeploy.
5. In Resend, verify the sending domain and configure the sender address used by `CONTACT_FROM_EMAIL`.

## Post-deploy smoke test

Check these live URLs after the production deployment:

- `/`, `/projects`, `/contact`
- `/en/blog`, `/ar/blog`, `/en/blog/feed.xml`
- One English article, one note, and each project dossier
- `/robots.txt` and `/sitemap.xml`

Then submit one real contact enquiry and one newsletter subscription using a controlled email address. Confirm the message arrives, the subscriber appears in Resend, the canonical URLs use the final domain, and no browser-console errors appear.

Only submit the sitemap to Search Console after the custom domain and `NEXT_PUBLIC_SITE_URL` are final. Arabic publication routes remain intentionally `noindex` until Arabic article bodies are published.
