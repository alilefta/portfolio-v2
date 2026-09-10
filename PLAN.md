# Premium Editorial Blog Redesign and SEO Architecture

## Summary

Rebuild the blog as a crawlable engineering publication based on the selected “Editorial Index” direction.

The experience will prioritize:

- Readability over decorative composition
- Clear article discovery
- Human, sentence-case headlines
- Predictable MDX authoring
- Explicit English and Arabic URLs
- Indexable topic pages
- Real newsletter subscriptions
- Strong semantic HTML, metadata, JSON-LD, sitemap, RSS, and accessibility

The current `/blog` route will remain compatible through redirects, while the canonical publication routes become locale-aware.

## Information architecture

```text
/blog                                  → redirect to /en/blog
/blog/<slug>                           → redirect to /en/blog/<slug>

/[locale]/blog
├── PublicationMasthead
├── FeaturedEssay
├── TopicIndex
├── EssayArchive
├── FieldNotes
├── NewsletterSignup
└── SiteFooter

/[locale]/blog/[slug]
├── ArticleHeader
├── CoverFigure
├── ArticleBody
├── TableOfContents
├── AuthorNote
├── RelatedTopics
└── PreviousNextNavigation

/[locale]/blog/topics/[topic]
├── TopicHeader
├── TopicDescription
├── TopicArticleList
├── NewsletterSignup
└── SiteFooter

/[locale]/blog/feed.xml
```

`/en/...` and `/ar/...` receive self-canonicals and reciprocal `hreflang` links. Existing unprefixed blog URLs permanently redirect to English routes so current backlinks continue working.

Arabic pages become indexable only when translated article bodies exist. Until then, an Arabic route must use `noindex` and stay out of the sitemap rather than exposing duplicate English content.

## Implementation changes

### Content contract

Replace the current untyped blog metadata cast with a Zod-backed contract.

Required fields:

```ts
type BlogPostMetadata = {
  title: string;
  summary: string;
  publishedAt: string; // ISO date
  category: BlogCategorySlug;
  readTime: string;
  coverImage?: string;
  coverAlt?: string;
  homepageFeatured?: boolean;
  homepageOrder?: number;
  tags?: string[];
};
```

Use stable category slugs:

```text
architecture
backend
frontend
performance
product
career
```

Migrate existing articles from display labels such as `"Engineering"` and `"Performance Engineering"` to these slugs. Display labels remain localized through translation messages.

English content remains in the existing blog content location. Arabic translations use a parallel locale directory while preserving the same public slug:

```text
content/blog/<slug>.mdx
content/blog/ar/<slug>.mdx
```

The loader must validate:

- Unique slugs
- Valid ISO dates
- Valid category slugs
- Required cover alt text when an image exists
- Matching English/Arabic article availability before Arabic indexing

Headline guidance becomes part of the authoring documentation:

- Sentence case
- One clear idea per title
- Prefer outcome, decision, or tension
- Avoid repeated colon-heavy titles
- Avoid inflated claims and generic “how I built…” phrasing

### Homepage composition

Create reusable editorial sections:

- `PublicationMasthead` — publication thesis and quiet navigation
- `FeaturedEssay` — one featured article with image, metadata, dek, and CTA
- `TopicIndex` — server-rendered links to indexable topic pages
- `EssayArchive` — chronological ruled list; no card grid
- `FieldNotes` — compact secondary register for short notes
- `NewsletterSignup` — reusable subscription block
- `PublicationFooter` — RSS, contact, and essential navigation

Remove the current marketing-style hero metrics, chapter numbering, oversized all-caps framing, and dense archive-card presentation.

The homepage remains server-rendered. Topic navigation uses normal links rather than client-only filtering so crawlers and keyboard users can discover every article.

### Topic pages

Add static topic routes for categories with published articles:

```text
/[locale]/blog/topics/[topic]
```

Each topic page receives:

- Localized title and description
- Breadcrumb navigation
- Article count
- Chronological article list
- `CollectionPage` and `BreadcrumbList` JSON-LD
- Self-canonical URL
- Open Graph and Twitter metadata
- Internal links back to `/[locale]/blog` and related topics

Topic pages are generated only for categories with content, preventing thin empty pages.

### Article template

Redesign articles around a calm reading column:

- Serif headline at a controlled size
- Short dek below the headline
- Compact date, topic, and reading-time metadata
- Responsive cover image with required alt text
- Body measure capped around 65 characters per line
- Sticky table of contents on large screens
- Inline code, figures, lists, and blockquotes with generous spacing
- Author note and contact link after the article
- Previous/next navigation at the end

The article template must preserve readable content with JavaScript disabled and support RTL direction without mirrored or clipped layout.

### Newsletter subscription

Add a real subscription flow using Resend Contacts rather than the deprecated Audience model. Resend’s current API treats contacts as global records and supports optional segments and topic subscriptions. [Resend Contacts API](https://resend.com/docs/api-reference/contacts/create-contact)

Configuration:

```text
RESEND_API_KEY
RESEND_SUBSCRIBER_SEGMENT_ID
NEWSLETTER_FROM_EMAIL
```

Add:

```text
POST /api/subscribe
```

Behavior:

- Validate email server-side with Zod
- Include a required consent checkbox for promotional emails
- Include a honeypot field
- Enforce origin, payload-size, and rate-limit checks
- Create or update the contact through Resend Contacts
- Add the contact to the configured segment when available
- Treat duplicate subscriptions as a neutral success response
- Never expose provider errors, API keys, or contact existence details
- Return accessible success and error states
- Support native form submission without JavaScript through a redirect response
- Support enhanced inline feedback when JavaScript is enabled

The subscription section appears on the blog homepage after the secondary content register and before the footer. It is also reusable on topic and article pages where appropriate.

Copy must clearly explain:

- What subscribers receive
- Expected frequency
- That the content is engineering-focused
- How to unsubscribe

### SEO and crawlability

Implement canonical and alternate metadata for every locale-aware publication route:

- Self-canonical URL
- English/Arabic `hreflang`
- Correct `lang` and `dir`
- Localized title and description
- Cover image with absolute URL
- Published and modified dates
- `Article`, `CollectionPage`, and `BreadcrumbList` JSON-LD
- Author reference to the portfolio `Person`
- `WebSite` and RSS discovery metadata where applicable

Update:

- Sitemap to include English articles, translated Arabic articles, topic pages, and RSS only where indexable
- Robots to allow public publication routes and disallow `/api`, `/dev`, and private paths
- RSS feed with stable article URLs, titles, dates, summaries, and cover images
- Open Graph generation to use article cover images with a social fallback

Redirected legacy `/blog` URLs must not appear in the sitemap.

## Test plan

### Contract tests

- Invalid blog frontmatter fails with actionable errors
- Invalid category slugs fail validation
- Duplicate slugs fail validation
- Missing cover alt text fails validation
- English/Arabic pairing rules are enforced
- Featured article ordering is deterministic

### Route and SEO tests

- `/blog` redirects to `/en/blog`
- Legacy article URLs redirect to locale-aware URLs
- English and Arabic routes generate expected static params
- Topic pages exist only for populated categories
- Canonicals and `hreflang` values are correct
- Sitemap excludes redirects, untranslated Arabic pages, `/dev`, and `/api`
- Robots output is correct
- RSS entries contain canonical article URLs
- JSON-LD contains the correct schema types and author references

### Subscription tests

- Valid email reaches the provider adapter
- Invalid email returns `422`
- Missing consent returns `422`
- Honeypot submissions return neutral success without provider calls
- Duplicate emails do not leak subscriber existence
- Rate-limited requests return `429`
- Missing production credentials return an honest configuration error
- Provider failures return a safe generic error
- API responses never include secrets

### UI and accessibility QA

Verify English and Arabic at desktop, tablet, and mobile widths:

- One meaningful `h1` per page
- No horizontal overflow
- Comfortable article measure
- Visible focus states
- Logical keyboard order
- Topic links and subscription form usable without a mouse
- Correct RTL alignment and icon direction
- Reduced-motion behavior disables decorative transitions
- Images have meaningful alt text
- Success and error states are announced through `aria-live`
- Browser console remains free of errors

Run:

```text
pnpm test
pnpm exec eslint <changed files>
pnpm build
```

## Assumptions and defaults

- Option 1 remains the visual source of truth.
- `/en/blog` is the English canonical publication route.
- `/ar/blog` is indexable only after Arabic article bodies are available.
- Topic pages are indexable and use stable category slugs.
- Resend Contacts is the initial subscriber provider, isolated behind a provider adapter for future migration.
- Article URLs and existing slugs remain unchanged.
- No search interface is added in this iteration; topic navigation is sufficient for the current content volume.
- RSS is included because it improves discovery without adding visual complexity.
