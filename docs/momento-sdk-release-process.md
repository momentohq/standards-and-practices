# Momento SDK Releases: Best Practices

## Tenets

1. All open source projects for which we publish binary artifacts should have a `release` branch, distinct from the `main` branch.
2. Active development work should be done on the `main` branch.  Commits to the `main` branch should **not** trigger a public release.
3. Automated releases should come off of the `release` branch.
4. SDK repos should have a GitHub action (triggered manually via `workflow_dispatch`) to promote changes from the `main` to the `release` branch.
   (It is important that this process preserves the commit history; i.e. it’s very important that we do not do “squash and merge” here.
   For a working example, see the [JavaScript SDK](https://github.com/momentohq/client-sdk-javascript/blob/644fc8dea9b643c1e41aa67fffa7f286b2056e2f/.github/workflows/manual-release.yml#L15).)
5. We should have a mechanism for testing binary artifacts that would be produced by the code in the `main` branch even though we will never
   publish official/public binary artifacts from there.

## Hot fix

In case of hot fix where we needed to make a targeted fix to latest release version and not use latest in `main` we would would do the following process:

- Make a `hotfix/bug-to-fix` branch off latest release tag on `release` branch we wanted to patch
- Make a change on the `hotfix/*` branch and open PR back into release.
- Merge hotfix PR into `release`
- Merge `release` branch that has patch now back down into `main`
