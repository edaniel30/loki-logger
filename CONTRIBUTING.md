# Contribution Guidelines
Thank you for your interest in contributing to Loki-Logger! We appreciate community contributions and are committed to maintaining a collaborative, secure, and efficient development environment.

# 📋 Table of Contents
1. [How to Contribute](#how-to-contribute)
1. [Prerequisites](#prerequisites)
1. [Code Guidelines](#code-guidelines)
1. [Commit Message Convention](#commit-message-convention)
1. [Pull Request Process](#pull-request-process)

# How to Contribute
There are multiple ways you can contribute:

- Report a bug 🐞
- Suggest a new feature 🚀
- Improve documentation 📝
- Refactor or improve existing code ✨
- Write additional tests 🧪

# Prerequisites
Before contributing, please make sure to:
1. Have a GitHub account.
1. Clone the repository and set up locally
1. Read the [README.md](./README.md) to understand the project structure.

# Code Guidelines
- Use TypeScript according to the project configuration.
- Follow the coding style.
- Add brief documentation/comments for new features.
- Avoid adding unnecessary dependencies.
- Keep functions/methods small, clear, and single-responsibility.

# Commit Message Convention
We use Conventional Commits format:
```arduino
<type>(scope): short description
``` 

## Common types:
- feat: New feature
- fix: Bug fix
- docs: Documentation update
- refactor: Code refactor without functional change
- test: Adding or improving tests
- chore: Minor tasks (builds, dependencies, etc.)

### Examples:
```pgsql
feat(logger): format for grafana loki
fix(logger): resolve format bug
docs(readme): update usage instructions
``` 

## Pull Request Process
1. Create a descriptive branch:
```arduino
git checkout -b feat/new-feature
```

1. Commit changes following the commit convention.
1. Open a Pull Request and include:
    - A clear description of what you changed and why.
    - Related issues (if applicable).
    - Screenshots or examples (optional).

We may request adjustments before merging.

