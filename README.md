# iOS App Collection Archive

GitHub Pages + GitHub Codespaces-ready static web app example for an iOS App Collection Archive.

## Included

- `index.html` — collection UI
- `src/styles.css` — responsive styling
- `src/app.js` — search/filter logic
- `data/apps.json` — app metadata
- `assets/icons/app-archive.svg` — site icon
- `assets/icons/app-archive.ico` — favicon
- `.github/workflows/pages.yml` — GitHub Pages deployment
- `scripts/serve.sh` — local preview helper
- `tools/validate.py` — metadata validation
- `LICENSE` — MIT license
- `.gitignore` — Git ignore rules
- `package.json` — optional local development metadata
- `archive.plist` — archive metadata example
- `sample.php` — optional server-side metadata example
- `sample.txt` — plain-text archive notes
- `sample.pyc` — compiled Python bytecode example
- `sample.exe` — placeholder Windows launcher file

## GitHub Pages

1. Create or open a GitHub repository.
2. Copy these files into the repository.
3. Push to the default branch.
4. In **Settings → Pages**, choose GitHub Actions if it is not already enabled.
5. The included workflow publishes the repository as a static GitHub Pages site.

No server is required for the main app.

## Codespaces

Open the repository in GitHub Codespaces and run:

```bash
python3 -m http.server 8000
```

Then open port 8000.

## Data note

The app metadata in `data/apps.json` is based on the collection information supplied for this project. The `Stickers` entry was normalized to `206.1 MB` because the supplied value was `206.1` without the unit.

## Archive contents

This project is a catalog/web-app example. It does not include copyrighted IPA binaries or proprietary app resources.
