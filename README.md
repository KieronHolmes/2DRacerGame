# Phaser Starter Kit
This repository serves as a TypeScript-driven Starter Kit for the Phaser HTML5 Game Framework, built using Babel and Webpack. This starter kit supports hot-reloading within a development scenario and minified production-ready builds.

Currently, this Starter Kit only includes a pre-loading screen for image/sound assets, but will be expanded in the near future to include a basic Main Menu.
## File Structure
The overall file structure of this Starter Kit, with a brief explanation of each file/directory have been included below.
```bash
# File structure temporarily removed
```

## Getting Started
A few simple steps to get started using this Starter Kit have been included below:
### Installing Packages
To install all packages required for this module, please ensure you have **npm** installed in your development environment, then execute the following command in a terminal window:
```bash
npm install
```

### Building/Running Application
A series of basic NPM scripts have been developed to streamline the process of generating development/production assets, or using the inbuilt hot-reloading webserver for realtime testing. Please pick the appropriate command from the list below, executing them in the terminal.

| NPM Command | Description |
| --- | --- |
| `npm run dev` | Builds development assets to `/dist/`. |
| `npm run prod` | Builds production-ready (minified) assets to `/dist/`. |
| `npm run watch` | Launches Webpack's internal webserver with hot-reloading enabled for realtime testing during development. Defaults to port **9000**. URL to access the environment will be displayed once the command has been run.|
| `npm run lint` | Runs ESLint against the `/src/` directory. |
| `npm run style` | Runs Prettier against the `/src/` directory|


### Customising HTML Template
In order to customise the HTML template, you are able to modify the `/src/index.html` file within this kit. If you are using the `npm run watch` command, all changes will be recompiled by **HtmlWebpackPlugin** and reloaded in any active browser windows. Otherwise, you will need to re-run a Development/Production build using the appropriate command.

### Deploying Production Builds

Once you have executed the NPM command to generate a Production-ready build, a `/dist/` file will be created in your project directory. The contents of this folder should be uploaded to a publicly-accesible location on a web-server.

## Additional Information
### Webpack
In accordance with the Production best practices on the Webpack documentation, the configurations have been split into 3 seperate files:

| File Name | Description |
| --- | --- |
| `webpack.common.js` | This configuration file contains the common attributes which should be applied regardless of whether a Development or Production build is required. |
| `webpack.dev.js` | This file contains the Development specific configuration attributes (For example, non-minification and hot-reloading web server). |
| `webpack.prod.js` | This file contains the Production specific configuration attributes (For example, minifying assets using TerserPlugin).

### Babel
The Babel transcompiler has been used within this project in order to convert ES6+ Javascript to the browser versions you require. Values can be customised by editing the `/.babelrc` file, but, by default, this file targets all commonly used web browsers.

## Contributions
This Starter Kit was created as a base template for a University project, therefore will not be actively maintained. If you notice something not quite right, please feel free to raise an issue or open a Pull Request.

## Attributions
* [Babel](https://babeljs.io/) - Transcompiler used for generating backwards compatible JavaScript for older browsers.
* [Webpack](https://webpack.js.org/) - JavaScript module bundler/transformer used to generate production assets.
* [Phaser](https://phaser.io/) - HTML5 Game Framework used for the core of this project.

In addition to the above, the following community additions have been used in this project:
* CopyWebpackPlugin
* HtmlLoader
* HtmlWebpackPlugin
* SourceMapLoader
* TerserWebpackPlugin
* WebpackMerge
* TsLoader
* Prettier
* ESLint