## Contributing

We welcome all contributions to documenting PGM and making it approachable for everyone, regardless of their expertise.
This document serves as a guideline to establish a standard when it comes to submitting changes.

### Scope

PGM Documentation provides detailed and accurate information about features offered by PGM that mapmakers and server administrators can take advantage of.

### Prerequisites

* [Git (advanced users)](https://git-scm.com/downloads), [GitHub Desktop (recommended)](https://desktop.github.com/download/), or [alternative GUI clients](https://git-scm.com/downloads/guis).
* [NodeJS (LTS version preferred)](https://nodejs.org)
* Text editors like [Notepad++](https://notepad-plus-plus.org/), [Visual Studio Code](https://code.visualstudio.com/), or [Sublime Text](https://www.sublimetext.com/)
    * If you are on Windows, avoid using the built-in Notepad program as it lacks several features and can affect files in unexpected ways.
    * Additionally, Windows users should enable file extensions by clicking `View`, `Show`, and selecting `File name extensions`.

### Steps

1. Clone this repository.
    ```
    git clone git@github.com:PGMDev/Website.git
    ```
3. Navigate to the repository in the terminal, and then run `npm install`.
    * You will only need to do this occasionally, especially for package updates.
2. After installation finishes, run `npm start` to start a local webserver.
    * You can stop this at any time by pressing `Ctrl` + `C`.
3. Make your changes, which will appear in your web browser.
4. Commit your changes, using the `-S` and `-s` tag to [sign](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits) and [certify](https://developercertificate.org) the origin of your contributions.
    ```bash
    git commit -S -s -m "A short description of your changes"
    ```
5. Submit changes in a pull request for review and feedback.
6. Depending on where you host it, you can build the website using `npm run build` if you intend to upload it yourself or build it _and_ deploy it to GitHub Pages using the [Action workflow](/.github/workflows/deploy.yml).
    * Some modifications will be needed to deploy outside the pgm.dev environment.

### Pull requests

Before opening a pull request, please:

- Verify that there is no ongoing discussion concerning the implementation you wish to contribute. You can search for such a discussion in the [repository issues page](https://github.com/PGMDev/Website/issues).
- Make sure your contribution follows American (US) English grammar rules and spelling, e.g. "color" and not "colour" or "center" and not "centre."
- If editing pages in the `mdx` format, try to use [Markdown](https://commonmark.org/help/) and avoid HTML as much as possible.
- PGMDev enforces the *Developer Certificiate of Origin* (DCO). As such, you must sign off your commits.