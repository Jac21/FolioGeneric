# [FolioGeneric](https://jac21.github.io/FolioGeneric)
[![CircleCI](https://circleci.com/gh/Jac21/FolioGeneric/tree/master.svg?style=shield)](https://circleci.com/gh/Jac21/FolioGeneric/tree/master)

Live site: 
>-  https://jac21.github.io/FolioGeneric

Features
-------
Full-fledged multi-disciplinary portfolio site, for the developers that like to do a little more. Included in this starter site is a relatively straightforward Gulp build system to aid in development, as well as Progressive-Web-App features that utilize Service Workers for local caching.

Usage 
----
1. *git clone* this repository.
2. Navigate to the parent directory, and *npm install*
3. Ensuring you have Gulp 3.9.0 installed gloablly on your machine (i.e., *npm install gulp@3.9.0*), simply run *gulp* in the same parent directory to kick off browser-sync and the associated content processing.
4. After any content changes, use *npm run build* to kick off the gulp JavaScript, CSS styling, and service-worker precache processes to refresh your site's associated content and service worker file.

Resources Used
-------------
- [Materialize CSS](http://materializecss.com/)
- [AngularJS](https://angularjs.org/)
- [gulp.js](http://gulpjs.com/)
- [sw-precache](https://github.com/GoogleChrome/sw-precache)
