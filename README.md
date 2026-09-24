# iOS App Collection Archive

A searchable archive of legacy iOS applications with metadata, IPA files, OTA installation manifests, and a GitHub Pages web catalog.

## Overview

This project provides a static iOS application archive containing historical app metadata:

* App name
* Bundle identifier
* Version
* Minimum iOS version
* Binary size
* IPA package
* OTA installation manifest
* App icons

Built for:

* GitHub Pages hosting
* Static web deployment
* Legacy iOS software preservation
* Offline catalog browsing

---

# App Collection

| App Name               | Bundle ID                                   | Version | Minimum iOS | Binary Size |
| ---------------------- | ------------------------------------------- | ------- | ----------- | ----------- |
| Animal Sounds          | `com.smartbabyapps.animalsounds`            | 2.0     | 3.1         | 19.8 MB     |
| SoundTouch             | `com.yourcompany.SoundTouch`                | 1.4     | 3.0         | 155.5 MB    |
| Tozzle                 | `com.nodeflexion.Tozzle`                    | 3.7     | 3.1.3       | 112.6 MB    |
| AutismXpress           | `X7WS995LSR.com.StudioEmotion.AutismXpress` | 1.0     | 3.1.2       | 7.4 MB      |
| Lunchbox               | `com.thup.MonkeyPreschool`                  | 1.4     | 3.0         | 13.7 MB     |
| Peek-a-Zoo             | `com.duckduckmoosedesign.peekazoo`          | 1.1.1   | 3.0         | 19.1 MB     |
| Michigan Nature Sounds | `com.yourcompany.MichiganNatureSounds`      | 1.0     | 3.0         | 24.6 MB     |
| Peek-a-Zoo             | `com.tbd.pazCLL`                            | 1.0     | 3.0         | 24.6 MB     |
| Artsee                 | `com.britejar.artsee`                       | 1.1     | 2.2         | 12.4 MB     |
| Angry Birds            | `com.rovio.AngryBirdsHalloween`             | 1.5.3   | 3.0         | 16.8 MB     |
| Farm Flip Fun          | `lv.yapp.farmflipfun`                       | 1.0     | 3.0         | 10.6 MB     |
| Farm Story             | `com.teamlava.farmstory`                    | 1.2     | 3.0         | 19.9 MB     |
| Stickers               | `com.nightanddaystudios.ericcarlestickers`  | 1.0     | 5.0         | 206.1 MB    |
| Forest                 | `com.nightanddaystudios.peekabooforest`     | 1.1.0   | 3.1.3       | 25.6 MB     |
| Virtuoso               | `com.peterb.virtuosopianofree`              | 3.1.2   | 4.0         | 19.9 MB     |
| ABC Tracer             | `com.appzoo.ABCTracer`                      | 1.8     | 2.2.1       | 20.9 MB     |
| Peek Wild              | `com.nightanddaystudios.peekaboowild`       | 2.0.1   | 3.1.3       | 9.8 MB      |
| Peekaboo               | `com.nightanddaystudios.peekaboobarn`       | 2.0     | 2.2         | 3.6 MB      |
| Finding Sight          | `my.finding3`                               | 2.1     | 3.2         | 34 MB       |
| ArtikPix               | `com.rinnapps.artikpix.iap`                 | 1.2.4   | 3.1         | 41.4 MB     |

---

# Project Structure

```
ios-app-archive/

├── index.html
├── style.css
├── app.js
├── apps.json
├── README.md
├── LICENSE
├── .gitignore

├── ipa/
│   ├── AnimalSounds.ipa
│   ├── SoundTouch.ipa
│   └── ...

├── manifests/
│   ├── animal-sounds.plist
│   ├── soundtouch.plist
│   └── ...

└── assets/

    └── icons/
        ├── animal-sounds.png
        └── ...
```

---

# Features

## Searchable Catalog

The website provides:

* App search
* Bundle ID lookup
* Version filtering
* Mobile-friendly layout

---

## IPA Metadata Generator

The Python generator extracts:

```
CFBundleDisplayName
CFBundleIdentifier
CFBundleShortVersionString
MinimumOSVersion
Application Icons
IPA File Size
```

and creates:

```
apps.json
```

---

## OTA Installation Support

Each application can include an iOS OTA manifest:

```
itms-services://?action=download-manifest
```

Manifest location:

```
/manifests/app-name.plist
```

IPA location:

```
/ipa/application.ipa
```

---

# GitHub Pages Deployment

## 1. Create Repository

Example:

```
ios-app-archive
```

---

## 2. Upload Files

Upload:

```
index.html
style.css
app.js
apps.json
ipa/
manifests/
assets/
```

---

## 3. Enable GitHub Pages

Open:

```
Repository
→ Settings
→ Pages
```

Select:

```
Deploy from branch
```

Choose:

```
main
/
root
```

---

## Website URL

Your archive will be available at:

```
https://USERNAME.github.io/ios-app-archive/
```

---

# Adding New Apps

To add another IPA:

1. Place IPA file:

```
ipa/NewApp.ipa
```

2. Run:

```bash
python3 generate_metadata.py
```

3. Upload:

```
apps.json
manifests/
assets/icons/
```

---

# Build Tools

Included tools:

| File                   | Purpose                |
| ---------------------- | ---------------------- |
| `generate_metadata.py` | Extract IPA metadata   |
| `build.sh`             | Generate archive files |
| `app.js`               | Catalog search engine  |
| `apps.json`            | App database           |
| `manifest.plist`       | OTA installation data  |

---

# License

This repository contains metadata and archival organization files.

Individual applications remain property of their respective developers and publishers.

```
MIT License
```

---

# Credits

Archive structure created for:

**iOS App Collection Archive**

Compatible with:

* GitHub Pages
* Static hosting
* Legacy iOS catalog projects
* IPA metadata workflows

```

This README can be placed directly at the root of the GitHub repository. It documents the complete pipeline from IPA files → metadata generation → OTA manifests → searchable web catalog.
```
