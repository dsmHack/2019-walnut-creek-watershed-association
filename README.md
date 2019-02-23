# 2019-team-11
This is the repo for the dsmHack event for the team: 2019-team-11

- Data
    - https://www.waterqualitydata.us/webservices_documentation/
        - [WS Examples](https://www.waterqualitydata.us/webservices_documentation/#WQPWebServicesGuide-Domain)
    - https://programs.iowadnr.gov/geospatial/rest/services/Watersheds/Watersheds/MapServer


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

`PRODUCTION IMPORTANT: npm run build will move the build contents into a docs folder which the gh-pages hosting is configured to point at. Just push the updated contents of the docs folder into GitHub and the newest build will serve!`

Now Your App is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<h2> GitHub Page Hosting </h2>

```
Directly from Slack:

howkj1 [12:15 AM]
@channel we have static hosting up and running on the master branch (atm, but can be changed later) for team 11 github. Any typical static site content can be hosted this way. Right now we've got a boiler-plate bootstrap theme using a jekyll template (@howkj1) is extremely familiar with. We can leverage this as a landing page / business card / home page / etc. if desired. The actual api GIS app can live on its own sub-page, be embedded on the page, or whatever.

live site:
https://dsmhack.github.io/2019-team-11/
(url can be changed later)

for code-base see:
https://github.com/dsmHack/2019-team-11

I've setup a bunch of single-page-like sites with this setup.
If we need more flexibility, check with @dragon788 on possible wordpress workflows if worse comes to wear.

for more information, check out :
https://pages.github.com/
https://github.com/y7kim/agency-jekyll-theme
https://jekyllrb.com/
https://jekyllthemes.io/free

Working sites with the jekyll agency theme:
http://ottumwa1stchurch.com/
http://applecreekiowa.com/

Basically think of github's gh-pages feature as free static hosting... like a basic http server.
We use the term "static site" loosely here since modern javascript can do dynamic calls (React, anybody?) and stuffs. So, so long as we don't need server-side processing, we don't need to bother with hosting.

If nothing else, we can use this feature to host developer documentation for the project.  README.md / wiki
```

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
