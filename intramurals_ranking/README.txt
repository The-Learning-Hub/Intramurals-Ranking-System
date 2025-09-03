Intramurals Ranking - Package
Files included:
- dashboard.html        (public dashboard, animated rank transitions)
- adminpanel.html       (admin panel to update medal counts)
- firebase-config.js    (module to initialize Firebase - REPLACE placeholders with your project's config)
- style.css             (external stylesheet)

How to use:
1) Open Firebase Console -> Project settings -> Your apps -> intramurals-web -> SDK setup and config.
   Copy the config object and replace the placeholders in firebase-config.js.
   The values you need are: apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId

2) Enable Realtime Database:
   In Firebase Console -> Build -> Realtime Database -> Create database -> Start in test mode (or configure rules properly).
   Create initial data structure like:
   {
     "teams": {
       "Grade 7": { "gold": 0, "silver": 0, "bronze": 0 },
       "Grade 8": { "gold": 0, "silver": 0, "bronze": 0 }
     }
   }

3) Host files:
   - For local testing: open dashboard.html and adminpanel.html in your browser (some browsers block ES module imports from file://; if so, use a simple local server like 'python -m http.server' in the folder).
   - For GitHub Pages: push the files to a repo and enable GitHub Pages (will serve as static site).

4) Using:
   - Open adminpanel.html, type/select a team, update medals and press Update.
   - Open dashboard.html to view live ranking animations.

Notes:
- firebase-config.js contains placeholders. DO NOT commit your private API key publicly if you don't want it exposed.
- For production, secure your Realtime Database rules to restrict writes to authorized users only.
