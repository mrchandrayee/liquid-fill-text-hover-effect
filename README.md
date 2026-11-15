# Liquid Fill Text Hover Effect

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/liquid-fill-text-hover-effect/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A complete runnable recreation of the uploaded 20.2-second screen recording.

## What appears in the video
- Heading: **Liquid Fill Text Hover Effect**
- Large outlined cyan word: **LIQUID**
- Dark navy / near-black background.
- On hover, cyan liquid-like fill rises through the letters.
- Cyan outline remains visible and gains a soft neon glow.
- Small prompt below the word: `Comment "Liquid" for code`.

## CSS source visibly readable in the video

The screen recording clearly shows this hover rule and keyframes:

```css
.perspective-container:hover .liquid-text {
  background-position-y: 0px, 0px;
  -webkit-text-stroke: 2px rgba(0, 217, 255, 0.8);
  text-shadow:
    0 0 15px rgba(0, 217, 255, 0.3),
    0 0 35px rgba(0, 217, 255, 0.2);
}

@keyframes wave-flow {
  0% {
    background-position-x: 0px, 0px;
  }
  100% {
    background-position-x: 400px, -400px;
  }
}
```

The video also visibly shows `background-position-y: 0px, 0px` and the `wave-flow` keyframes. The rest of the original stylesheet is not legible enough to claim exact transcription. The project completes the effect with two layered gradients, text clipping, responsive sizing, and touch/keyboard interaction.

## Run
1. Extract the ZIP.
2. Open `index.html` in any modern browser, or run the folder with VS Code Live Server.
3. Hover the word **LIQUID**. On touchscreens, tap it to toggle the fill.

No packages, npm install, or build tools are required.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
