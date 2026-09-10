## Ali Lefta Portfolio

Ali Lefta's portfolio, project dossiers, and multilingual engineering publication. Built with Next.js 16, MDX, next-intl, and Resend-backed contact and newsletter endpoints.

### Local development

Install dependencies, copy `.env.example` to `.env.local` if needed, then start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Never commit provider credentials.

### Verification

Run the full production gate with:

```bash
pnpm verify
```

### Deployment

See [the deployment runbook](docs/DEPLOYMENT.md) for the required production environment variables, Vercel setup, and post-deploy checks.
