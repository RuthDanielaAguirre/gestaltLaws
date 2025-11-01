# ✨ Gestalt Laws - Interactive 3D Learning Platform

An elegant educational project about the **8 Gestalt Laws** with stunning real-time 3D visualizations built with React, Three.js, and modern web technologies.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.180.0-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.10-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-1.93.2-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📸 Screenshots

### Dark Mode
![Dark Mode](./assets/images/blackMode.png)

### Light Mode
![Light Mode](./assets/images/lightMode.png)

---

## 🎯 Features

- 🎨 **8 Interactive Gestalt Laws** with unique 3D animations
- 🌓 **Dark/Light Theme** with persistent localStorage
- ⭐ **Animated Star Field** - 6000 particles in space
- 🎭 **Dynamic 3D Materials** - Theme-aware metallic effects
- 📱 **Fully Responsive** - Mobile-first design
- 🐳 **Docker Ready** - Consistent dev environment
- ⚡ **Lightning Fast** - Vite with HMR

---

## 📚 The 8 Gestalt Laws

| Law | Animation | Description |
|-----|-----------|-------------|
| **Proximity** | Breathing | Elements close together form groups |
| **Similarity** | Color Change | Similar things are grouped mentally |
| **Continuity** | Wave | We follow lines and curves naturally |
| **Closure** | Opacity | We complete incomplete shapes |
| **Figure-Ground** | Mirror | We separate objects from background |
| **Prägnanz** | Scale | We prefer simple forms |
| **Common Region** | Rotation | Boundaries create groups |
| **Common Fate** | Orbit | Synchronized movement groups elements |

---

## 🚀 Quick Start

### **🐳 With Docker (Recommended)**
```bash
# Clone repository
git clone https://github.com/RuthDanielaAguirre/gestaltLaws.git
cd gestaltLaws

# Start development
docker-compose up dev

# Access at http://localhost:5173
```

### **💻 Without Docker**
```bash
# Requirements: Node.js 22+ and pnpm
npm install -g pnpm
pnpm install
pnpm run dev
```

---

## 🛠️ Tech Stack

- ⚛️ **React 19.1.1** - UI Library
- 🎭 **Three.js 0.180.0** - 3D Graphics
- 🔮 **React Three Fiber 9.4.0** - React renderer for Three.js
- 🌟 **@react-three/drei 10.7.6** - 3D helpers
- 🎨 **Bootstrap 5.3.8** - CSS Framework
- 💅 **SASS 1.93.2** - CSS Preprocessor
- 🛣️ **React Router DOM 7.9.4** - Navigation
- ⚡ **Vite 7.1.10** - Build tool
- 📦 **pnpm 10.18.3** - Package manager
- 🐳 **Docker** - Containerization

---

## 📁 Project Structure
```
gestalt-laws/
├── src/
│   ├── components/
│   │   ├── atoms/          # ButtonGlass, ColorBar
│   │   ├── organisms/      # Navbar, Footer
│   │   ├── layouts/        # Layout with Outlet
│   │   └── 3d/             # Scene3D, CubeGroup
│   ├── contexts/           # ThemeContext
│   ├── data/               # gestaltLaws.js
│   ├── features/gestalt/   # Pages
│   ├── routes/             # Route definitions
│   ├── styles/             # SASS (7-1 pattern)
│   └── utils/              # colors.js
├── Dockerfile              # Production
├── Dockerfile.dev          # Development
└── docker-compose.yml      # Orchestration
```

---

## 🎨 Design System

### **Metallic Candy Colors**
```scss
$candy-pink: #FF6F91      // Metallic rose
$candy-purple: #A569FF    // Chrome purple
$candy-blue: #4A90E2      // Steel blue
$candy-cyan: #2DD4E9      // Titanium cyan

$dark: #050812            // Space dark
$light: #f9fafc           // Light text
```

### **Glass Morphism**
- Backdrop blur: 20-40px
- Semi-transparent backgrounds
- Subtle borders and layered shadows

---

## 🎭 3D Animations

Each Gestalt law has a unique animation:

- **proximity** - Breathing effect
- **colorChange** - HSL color cycling
- **wave** - Sine wave motion
- **opacity** - Fade in/out
- **rotation** - Continuous rotation
- **mirror** - Symmetric movement
- **scale** - Pulsing scale
- **orbit** - Circular orbit

---

## 🐳 Docker Commands
```bash
# Development
docker-compose up dev
docker-compose logs -f dev

# Production
docker-compose up prod --build

# Clean
docker-compose down -v --rmi all
```

---

## 🎓 Learning Outcomes

- ✅ React Router v7 with nested routes
- ✅ Context API for state management
- ✅ Three.js with React Three Fiber
- ✅ Real-time 3D animations (60 FPS)
- ✅ SASS architecture (7-1 pattern)
- ✅ Docker multi-stage builds
- ✅ Modern glass morphism design
- ✅ Responsive mobile-first design

---

## 🐛 Troubleshooting

### Hot reload not working (Windows)
```yaml
environment:
  - CHOKIDAR_USEPOLLING=true
```

### Stars not visible
```scss
.scene3d-container {
  overflow: visible;
}
```

### Vite cache issues
```bash
docker-compose down -v
docker-compose up dev --build
```

---

## 🤝 Contributing

Contributions welcome! 

1. Fork the project
2. Create feature branch (`git checkout -b feature/Amazing`)
3. Commit changes (`git commit -m 'Add Amazing'`)
4. Push to branch (`git push origin feature/Amazing`)
5. Open Pull Request

---

## 📄 License

MIT © 2025 Ruth Daniela Aguirre

---

## 👩‍💻 Author

**Ruth Daniela Aguirre**

- 🐙 GitHub: [@RuthDanielaAguirre](https://github.com/RuthDanielaAguirre)
- 💼 LinkedIn: [Ruth Daniela Aguirre](https://www.linkedin.com/in/ruth-daniela-aguirre)

---

## 🙏 Acknowledgments

- Three.js Community
- Poimandres (React Three Fiber)
- Bootstrap Team
- Gestalt Psychology Pioneers