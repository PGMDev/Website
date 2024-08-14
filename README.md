# PGM Documentation Website

Source for the official [PGM plugin](https://github.com/PGMDev/PGM) documentation, using [Docusaurus](https://docusaurus.io/).

## Overview

This website aims to be a direct successor to the old [XML Documentation website](https://github.com/OvercastNetwork/docs.oc.tc), and much of its content will be inherited. However, since PGM has now been open-sourced, this new website aims to widen the scope and introduce more materials, ranging from map & XML documentation, to PGM's features, to development processes for contributing features to PGM. As such, this website is designed not only for individual server administrators and map developers, but also for contributors to the PGM project and its community at large.

## Usage

Follow the steps below to get a working local installation of this documentation website.

1. Run `npm install` in this project's root folder. This will install all dependencies.
2. Once it's done, run `npm start`. This command starts a local development server and opens up a browser window. Most changes are reflected live without needing to restart the server.
3. Depending where you host it, you can build the website using `npm run build` if you intend to upload it yourself or build it _and_ deploy it to GitHub pages using the [Action workflow](.github/workflows/deploy.yml).
    * Some modifications will be needed to deploy outside the pgm.dev environment.

## How to Contribute

Before opening a Pull Request, please:

- Verify that there is no ongoing discussion concerning the implementation you wish to contribute. You can search for such a discussion in the [plugin's repository issues page](https://github.com/PGMDev/PGM/issues).
- Make sure your contribution follows American (US) English grammar rules and spelling, e.g. "color" and not "colour".

## Governance

This project is maintained by [CoWinkKeyDinkInc](https://github.com/CoWinkKeyDinkInc), with assistance from [Electroid](https://github.com/Electroid) and other members from the [PGM community](https://discord.gg/RTcBe5AKRA).

## License

> [**Apache-2.0**](LICENSE)
