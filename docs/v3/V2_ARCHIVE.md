# Portfolio V2 archive and recovery

Portfolio V2 is preserved as the immutable Git tag `portfolio-v2-final`.

- Commit: `10d3177f39324d38b66d2c5c1ef613dec2922147`
- Snapshot date: 2026-01-28
- V3 development branch: `codex/portfolio-v3`

The tag contains the original `app/page.tsx` and the complete repository as it
existed before V3 implementation. Legacy `components/home/*` files also remain
in the working tree during migration, but the tag is the authoritative archive.

## Inspect a V2 file

```powershell
git show portfolio-v2-final:app/page.tsx
```

## Open the complete V2 site without changing the V3 branch

From the parent directory, create a temporary worktree:

```powershell
git worktree add ../portfolio-v2-archive portfolio-v2-final
```

This creates a detached, read-only-by-convention copy that can be run and
compared without replacing current V3 files.

## Restore one V2 file intentionally

```powershell
git restore --source portfolio-v2-final -- app/page.tsx
```

Only use the restore command for files that should genuinely return to their V2
state. The tag itself must not be moved or overwritten.
