You have built a high-performance "Ferrari" of a blog engine. It looks great, handles data correctly, and has a professional architecture.

Now you need to **put fuel in it** (Content) and **polish the windows** (SEO & UX).

Here is your **Go-To-Market Checklist** to get this portfolio from "Localhost" to "Hired".

---

### Phase 1: Essential Features (The Missing Links)

You have the UI for these, but likely not the backend logic yet.

- [ ] **RSS Feed (`/rss.xml`)**
  - **Why:** Developers use RSS. It allows your content to be syndicated to aggregators like Daily.dev.
  - **How:** Use the `feed` package. Create a route handler `app/feed.xml/route.ts` that iterates over `getBlogPosts()`.
- [ ] **Sitemap & Robots.txt**
  - **Why:** Google cannot index your site efficiently without them.
  - **How:** Use Next.js built-in `app/sitemap.ts` and `app/robots.ts`.
- [ ] **Newsletter Integration**
  - **Why:** Your `NewsletterCTA` currently simulates a success state. You need to actually collect emails.
  - **How:** Sign up for **Resend** (free tier) or **ConvertKit**. Create a Server Action to send the email to your audience list.
- [ ] **Contact Form Logic**
  - **Why:** You likely have a `/contact` page UI, but does it send emails?
  - **How:** Use **React Hook Form** + **Zod** (validation) + **Resend** (email sending).

---

### Phase 2: Content Migration (The Hardest Part)

A portfolio with "Lorem Ipsum" or mock data is worse than no portfolio.

- [ ] **Migrate Projects to MDX**
  - Take your 4-5 projects from the old `projects.ts` array.
  - Create `content/projects/oscar-lab.mdx`, etc.
  - **Task:** Write the "Challenge," "Solution," and "Result" for each.
- [ ] **Write "The Origin Story"**
  - Write the blog post we discussed: _"From Microns to Microservices"_. This defines your brand.
- [ ] **Populate Lab Notes**
  - Add 3-5 real notes.
  - _Ideas:_ A specific Git command you forget, a VS Code setting, or a Zod validation snippet.
- [ ] **Author Avatar**
  - Replace `/images/avatar.jpg` with a professional headshot.
  - _Tip:_ If you don't have one, use a high-quality Memoji or a stylized black/white photo.

---

### Phase 3: SEO & Social Polish

- [ ] **Dynamic Metadata**
  - Ensure every page (`/`, `/projects`, `/blog`) exports a `metadata` object with a unique `title` and `description`.
- [ ] **JSON-LD Schema**
  - **Why:** Helps Google understand "This is a Blog Post" or "This is a Person".
  - **How:** Add a `<script type="application/ld+json">` to your `BlogPost` layout containing structured data.
- [ ] **404 Page**
  - **Why:** Users _will_ hit broken links.
  - **How:** Create `app/not-found.tsx`. Make it cool—maybe a "System Malfunction" terminal screen to fit your theme.
- [ ] **Analytics**
  - **Why:** You need to know if people are reading.
  - **How:** Vercel Analytics (easiest) or Posthog (more detailed).

---

### Phase 4: Performance & UX

- [ ] **Lighthouse Audit**
  - Run Chrome DevTools -> Lighthouse.
  - Aim for all Green (90+).
  - _Common fix:_ Add `sizes="..."` prop to your Next.js `<Image />` components to prevent layout shift.
- [ ] **Scroll Restoration**
  - Test clicking a blog post and hitting "Back". Does it take you to the exact spot in the list? (Next.js handles this mostly, but test it).
- [ ] **Mobile QA**
  - Open your site on a real phone.
  - Check the Navbar glassmorphism.
  - Check that code blocks don't break the layout width.

---

### 🚀 Immediate Next Action

**Stop coding features.**
You have enough features. Now you need to fill the empty rooms.

1.  **Delete the Mock Data** (`LAB_NOTES` array, `LAB_POSTS` array).
2.  **Create the real MDX files.**
3.  **Write.**

If you want to code one last thing before writing, build the **RSS Feed**. It's purely technical and highly valuable for a dev blog. Would you like the code for that?
