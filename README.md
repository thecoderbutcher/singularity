
![App logo](https://raw.githubusercontent.com/thecoderbutcher/singularity-web/refs/heads/main/src/assets/images/singularity.webp)

An MP3 player to redefine your music. Enjoy your music with a user-friendly interface



## 📸 Screenshots

![App Screenshot](https://raw.githubusercontent.com/thecoderbutcher/singularity-web/refs/heads/main/src/assets/images/singularity-hero.webp)


## ⭐ Features

- Local File Playback
- Custom Playlists
- Audio Equalizer
- Progress Sync
- Light and Dark Themes
- Integrated File Explorer
- Fast and smart search
- Local statistics
- Independent volume control
- Lightweight, fast, and distraction-free
## 🖥️ Run Locally

Clone the project

```bash
  git clone https://github.com/thecoderbutcher/singularity.git
```

Go to the project directory

```bash
  cd singularity
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL=`


## 🗂️ Architecture

#### General
```javascript
src/
├── main/           # Backend
├── preload/        # Preload script
└── renderer/       # Frontend
```

#### Backend
```javascript
main/
├── application/
├── domain/
├── infrastructure/
├── lib/
├── presentation/
├── use.cases/
└── index.ts
```
#### Frontend
```javascript
renderer/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── ControlMusic/
│   ├── MusicDetails/
│   ├── Playlist/
│   ├── SongList/
│   ├── App.tsx
│   ├── env.d.ts
│   ├── global.d.ts
│   └── main.tsx
└── index.html
```
## 🚀 Tech Stack

- Typescript
- React
- TailwindCSS
- Node
- Electron
- Prisma
- Sqlite3

## 🤝 Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started. (coming soon)

Please adhere to this project's `code of conduct`.


## 📚 Lessons Learned

In this project, I applied hexagonal architecture as a practical approach. It was initially developed with NextJS, but when faced with the challenge of a lack of internet access, I decided to use Electron. This meant getting more familiar with this framework, but because it's based on JavaScript, the learning curve was gentler.


## 📜 License

[MIT](https://choosealicense.com/licenses/mit/)


## 🧑🏾‍💻 Authors

- [@thecoderbutcher](https://thecoderbutcher.site)

