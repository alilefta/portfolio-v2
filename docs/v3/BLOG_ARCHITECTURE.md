# Editorial blog architecture

The publication is served from locale-aware canonical routes:

- `/en/blog` and `/ar/blog` are the index pages.
- `/[locale]/blog/[slug]` is the article template.
- `/[locale]/blog/topics/[topic]` is an indexable topic collection.
- `/[locale]/blog/feed.xml` is the RSS feed.
- `/blog` and `/blog/<slug>` permanently redirect to English routes.

## Authoring a post

English posts live in `content/blog/<slug>.mdx`. Arabic translations use the same slug in `content/blog/ar/<slug>.mdx`. A translation is indexable only when its body exists; otherwise the Arabic index is marked `noindex` and the route is omitted from the sitemap.

Frontmatter is validated by `lib/blog-schema.ts`:

```yaml
title: A sentence-case headline with one clear idea
summary: The promise of the article in one or two sentences.
publishedAt: 2026-09-02
category: frontend # architecture | backend | frontend | performance | product | career
readTime: 7 min read
coverImage: /images/blog/example.jpg
coverAlt: A useful description of the cover image
homepageFeatured: true
homepageOrder: 1
tags: [accessibility, performance]
```

Use sentence case, name the outcome or tension, and avoid generic “how I built…” phrasing. The loader rejects duplicate slugs, invalid dates/categories, and images without alt text.

The homepage is composed from server-rendered `PublicationMasthead`, `FeaturedEssay`, `TopicIndex`, `EssayArchive`, `FieldNotes`, and the reusable `NewsletterSignup`. The article template keeps the body in a readable measure, adds a cover figure, table of contents, author note, related topic, and previous/next links. New visual treatments should be added as components, not as slug branches in a route.

Newsletter subscriptions post to `/api/subscribe`. Configure `RESEND_API_KEY`, optionally `RESEND_SUBSCRIBER_SEGMENT_ID`, and `NEWSLETTER_FROM_EMAIL` in the deployment environment.
