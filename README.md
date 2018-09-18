# Hands-on Workshop: Progressive Web Apps für echte Cross-Plattform-Lösungen

[BASTA Workshop](https://basta.net/html5-javascript/cross-plattform-workshop/), Freitag, 28. September 2018 08:30 - 16:30

Your trainers: [Christian Liebel](https://twitter.com/chris_liebel), [Steffen Jahr](https://twitter.com/steffenjahr), Thinktecture.

## Setup

As we are expecting a high number of participants and we’ve seen a lot of unreliable conference WiFis, we kindly ask you to prepare the following setup steps at home or in the hotel.

### Step 1: Devices and Software

Please bring your developer devices and install the following software. [Already done? Click here for step 2.](#step-2-demo-repository)

**NOTE:** As web technologies move fast and quickly, there might be new releases in the meantime. To ensure everything works as intended, we strictly recommend you to stick to the versions noted below. Thanks!

#### Devices
- Laptop with recent Windows/macOS/Linux version
- Optional: Android smartphone/tablet with recent Android and Chrome version
- Note: iOS Devices do not yet support the all technologies that make a real PWA

#### Browsers (Desktop)
- [Google Chrome](https://www.google.de/chrome/browser/desktop/), version 68 or later
- Optional: [Mozilla Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/), version 62 or later
- Optional: [Google Chrome Canary](https://www.google.com/chrome/browser/canary.html), version 70 or later

#### Developer Tools
- [Git](https://git-scm.com/) (obviously)
  - Optional: Git UI tool such as TortoiseGit, Tower, SourceTree, GitKraken, …
- [Node.js](https://nodejs.org/en/), version 8.9.4 LTS
- [ngrok](https://ngrok.com/download) for secure & easy TCP/HTTP/HTTPS tunneling during development
- Editor of your choice
  - [WebStorm](https://www.jetbrains.com/webstorm/) 2018.1 (commercial, free trial)
  - [Visual Studio Code](https://code.visualstudio.com/), recent version
  - Notepad, vi, …

### Step 2: Install Angular CLI

On your favorite terminal, please run:

```
npm uninstall -g angular-cli @angular/cli
npm cache verify
npm install -g @angular/cli@6.2.2
```

The installation was successful, when the following command shows Angular CLI’s version information:

```
ng version
```

### Step 3: Clone Demo Repository

Next, navigate to a folder of your choice and execute:

```
git clone https://github.com/thinktecture/basta-2018-pwa-workshop.git
cd basta-2018-pwa-workshop/api
npm install   # or yarn install (if installed)
cd ../client
npm install   # or yarn install (if installed)
```

If you prefer SSH, you can use this checkout URL: `git@github.com:thinktecture/basta-2018-pwa-workshop.git`
