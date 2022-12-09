[![Project Banner](https://cdn.upload.systems/uploads/qMFHQblV.png)](https://yukinon.falcxxdev.ml)
![Vercel state](https://img.shields.io/github/deployments/gifaldyazkaa/yukinon/Production?label=Vercel&logo=vercel&logoColor=%23000&style=for-the-badge) ![CI status](https://img.shields.io/github/workflow/status/gifaldyazkaa/yukinon/Lint?label=CI&logo=github-actions&style=for-the-badge) ![Wakatime stats](https://wakatime.com/badge/user/aac434b8-a027-4f92-ac90-e5b2ae48b541/project/2f2c8a01-7cf3-4fb7-b446-30db17215319.svg?style=for-the-badge)

## 👋️ Hello, Yukino here!

Nekono Yukino (猫乃ユキノ) is a Japanese Virtual YouTuber from Re:AcT.

She is a domestic cat & maid. Started debut on May 27, 2021. On YouTube, she mainly stream games such as APEX Legends, karaoke stream, and ASMR. She is the second member in Re:AcT.

## 📖️ About this project

I made this for a case study on using Nuxt 3 as a web framework which was just learned by me recently. Not gonna lying, but the first idea that came to my mind was a virtual youtuber. I thought about making a fan-made website about a vtuber. Before this project was made, I didn't know who I was going to turn the idea into. When I scrolled through YouTube, I found a VTuber from Re:AcT. None other than her. And that's where the project started.

> Shoutout to [Nuxt 3](https://nuxt.com) for Front-end web framework, [nuxt-tailwindcss](https://tailwind.nuxt.dev) for the styling framework, [Strapi](https://strapi.com) for content managing system, and other dependencies I use in this project!

## 💎️ Features

The main focus of this project is showing lots of data & text, anything else is not as important. Here's a list of what you can and may do:

### 🌏️ Read in different language (i18n)

Currently, it supports English, and Japanese. This is possible by providing multiple data from the back-end server.

> **Note**
> Japanese are currently incomplete, they just exist.

### 🌗️ Switch theme toggle

Self-explanatory. Very basic features that lets user to switch theme from Light to Dark, and _vice versa_. This feature following your system theme. If your device currently using dark mode, it will follows your system preference. (Default: Light mode)

### ⌛️ Server-side Rendering (SSR)

This is a method of loading a JavaScript-based (\*.mjs or \*.cjs) website on the server side. So, if a website implements SSR, an HTML document will be generated on every request. Then the document is sent from the server so that it can be displayed on the client's browser. Applying SSR will cause the initial page load of a website to be faster and increase First Contentful Paint (FCP).

> **Warning**
> If you encountering long page load, that's because the server is hosted on different locations. In the fact, Back-end CMS are hosted in `Paris - mysql19.paris1`, Front-end app is hosted at `Tokyo, Japan (Northeast) - hnd1`. To retrieve the data, it requires time because Front-end and Back-end are hosted in different location.

## 🗓️ Roadmap

I will put this here because I know well I won't do them. Things that can be added or improved, priority, and the reason why I didn't do it:

| Task name                 | Priority | Reason                                                                                                                                                                                                    |
| ------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Localization              | High     | I don't have much knowledge in Japanese. I'm still learning until right now. It's hard to translate the contents all by myself.                                                                           |
| Migrate hosting provider  | High     | On initial request, i know the server is sooo slow and takes ~4-5 seconds (from measurement) to load the initial page. This is possible to do, but it requires paid plans to get fast server, daaaaamnnn. |
| Progressive Web App (PWA) | Low      | Too lazy to create a service-workers, serving lots of 64x64, 128x128, 256x256 icons, and there is a lot additional meta for PWA (apple-touch-icon, etc).                                                  |

## 🧑‍💻️ Developing

To get this running on your machine, you could try these steps below:

### 📥️ Clone the repository

```bash
$ git clone https://github.com/gifaldyazkaa/yukinon.git
$ cd yukinon
```

### 📦️ Install dependencies

```bash
$ pnpm install
```

### 📝️ Fill required credentials in .env

```bash
$ cp .env.example .env
$ echo "NUXT_PUBLIC_STRAPI_URL=http://your-strapi-url:1337" > .env
```

### 🏃️ Run it on development server

```bash
$ pnpm run dev
# ...
```

### ⚡️ Optimizing for production

```bash
# Server deployment (SSR)
$ pnpm run build

# Static deployment (Pre-rendered)
$ pnpm run generate
```

## 📃️ License

Distributed under MIT License. See [LICENSE file](./LICENSE) for more information.
