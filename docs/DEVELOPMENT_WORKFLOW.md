# Rekind Development Workflow

This document defines the development workflow used for Rekind.

The goal is to keep the project incremental, verifiable, and suitable both as a personal product and as a professional portfolio project.

## Principles

- Keep `main` stable.
- Maintain only one active milestone in detail.
- Use issues for functional outcomes, bugs, or concrete technical decisions.
- Develop meaningful changes in short-lived branches.
- Integrate functional changes through pull requests.
- Require GitHub Actions to pass before merging.
- Keep commits small, coherent, and focused on one intention.
- Do not mix unrelated changes.
- Do not introduce abstractions, layers, or dependencies before they are needed.
- Do not use `--force` or `--legacy-peer-deps` to hide dependency conflicts.

## Standard workflow

1. Create an issue containing:
   - objective;
   - acceptance criteria;
   - out-of-scope items;
   - validation steps.
2. Assign the issue to the active milestone.
3. Create a branch from `main`.
4. Implement only the agreed behavior.
5. Validate the change locally and on Android when applicable.
6. Run the quality checks.
7. Open a pull request linked to the issue.
8. Wait for GitHub Actions to pass.
9. Merge using **Squash and merge**.
10. Delete the branch after merging.

## Branch naming

Recommended format:

```text
feat/12-demo-routine
fix/18-active-workout-recovery
test/24-training-persistence
docs/30-update-roadmap
chore/35-update-tooling
```

The number should match the related GitHub issue when one exists.

## Commit messages

Use short and descriptive messages:

```text
feat: show demo training routine
fix: recover active workout after restart
test: cover workout persistence
docs: document development workflow
chore: align package version
```

Trivial changes that belong to the same functional unit do not need separate commits.

## Quality checks

Before each relevant commit and before opening a pull request:

```powershell
Set-Location .\mobile

npm run typecheck
npm run lint
npm test

Set-Location ..
git diff --check
```

When Expo configuration or Expo dependencies change, also run:

```powershell
Set-Location .\mobile
npx expo-doctor
Set-Location ..
```

## Pull requests

Use a concise description:

```markdown
## What changes

Brief description of the implemented outcome.

## Validation

- [ ] TypeScript
- [ ] ESLint
- [ ] Jest
- [ ] Android through Expo Go, when applicable

## Evidence

Screenshots or validation notes when they add value.

Closes #123
```

A pull request is not required for a trivial documentation correction.

A pull request is recommended for:

- functional changes;
- database migrations;
- persistence changes;
- architecture changes;
- dependency changes;
- CI changes.

## Milestones

Only the version currently under development should be fully detailed.

Example:

```text
v0.2.0 — Local training
```

Later milestones may remain only in the roadmap until their implementation approaches.

## Versioning

Rekind uses Semantic Versioning:

```text
v0.1.0
v0.2.0
v0.2.1
v1.0.0
```

- A minor version introduces a new functional milestone.
- A patch version fixes defects without significantly expanding scope.
- `v1.0.0` represents the first stable private release.

Before publishing a version, confirm that:

- the milestone is complete;
- `main` is clean and synchronized;
- GitHub Actions passes;
- `app.json`, `package.json`, and `package-lock.json` use the same version;
- required manual tests are complete.

## Tags and releases

Each published version must include:

1. An annotated Git tag pointing to the exact release commit.
2. A GitHub Release based on that tag.
3. Release notes describing:
   - main changes;
   - validation performed;
   - known limitations;
   - next milestone.

Published tags must never be moved or reused.

A later correction must be published as a new version.

## Current organizational scope

Rekind does not currently use:

- permanent `develop`, `staging`, or `release` branches;
- artificial sprints;
- story points;
- complex project boards;
- assignment automation;
- automatic changelog generators;
- multiple specialized templates;
- status or priority labels that do not add real information.

The initial workflow is:

```text
main
+ short-lived branches
+ issues
+ one active milestone
+ pull requests
+ CI
+ tags
+ GitHub Releases
```