# Contributing to DoDoWeb

Thank you for considering contributing to DoDoWeb! This document outlines the process for contributing to this project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and considerate of others.

## How Can I Contribute?

### Reporting Bugs

- Check if the bug has already been reported in the Issues section
- Use the bug report template when creating a new issue
- Include detailed steps to reproduce the bug
- Include screenshots if applicable
- Describe what you expected to happen and what actually happened

### Suggesting Features

- Check if the feature has already been suggested in the Issues section
- Use the feature request template when creating a new issue
- Provide a clear description of the feature
- Explain why this feature would be useful to most users

### Pull Requests

1. Fork the repository
2. Create a new branch from `develop`:
   ```bash
   git checkout -b feature/your-feature-name develop
   ```
3. Make your changes
4. Run tests and linting:
   ```bash
   npm run lint
   npm run build
   ```
5. Commit your changes using conventional commit messages:
   ```bash
   git commit -m "feat: add new feature"
   ```
6. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. Create a pull request to the `develop` branch of the original repository

## Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/sharathkumar0510/dodo_web.git
   cd dodo_web
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Coding Guidelines

- Follow the existing code style
- Write clear, readable, and maintainable code
- Add comments for complex logic
- Write tests for new features
- Update documentation when necessary

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: Code changes that neither fix a bug nor add a feature
- `perf`: Performance improvements
- `test`: Adding or fixing tests
- `chore`: Changes to the build process or auxiliary tools

## License

By contributing to DoDoWeb, you agree that your contributions will be licensed under the project's MIT License.
