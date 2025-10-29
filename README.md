# 🎨 Gestalt Laws - Interactive Learning

Proyecto educativo sobre las **8 Leyes de la Gestalt** aplicadas al diseño visual, desarrollado con React, Bootstrap, SASS y React Router DOM.

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)

---

## 🚀 Tecnologías

- ⚛️ **React 18** - UI Library
- 🎨 **Bootstrap 5** - Framework CSS
- 💅 **SASS** - Preprocesador CSS (arquitectura 7-1)
- 🛣️ **React Router DOM** - Navegación entre páginas
- 🌓 **Context API** - Dark/Light Mode persistente
- 🐳 **Docker** - Multi-stage builds (Dev + Prod)
- 🌐 **Nginx** - Servidor web optimizado para SPA
- 📦 **pnpm** - Package manager rápido

---

## 📦 Quick Start

### **🐳 Con Docker (Recomendado)**
```bash
# Clonar repositorio
git clone https://github.com/ruth-daniela-aguirre/gestalt-laws.git
cd gestalt-laws

# Desarrollo
docker-compose up dev

# Producción
docker-compose up prod --build

# Accesos:
# Dev:  http://localhost:5173
# Prod: http://localhost:8080
```

### **💻 Sin Docker (Local)**
```bash
# Requisitos: Node.js 20+ y pnpm

# Instalar pnpm
npm install -g pnpm

# Instalar dependencias
pnpm install

# Desarrollo
pnpm run dev

# Build para producción
pnpm run build

# Preview del build
pnpm run preview
```

---

## 🐳 Comandos Docker

### **Desarrollo:**
```bash
# Iniciar entorno de desarrollo
docker-compose up dev

# En segundo plano
docker-compose up dev -d

# Ver logs
docker-compose logs -f dev

# Detener
docker-compose down

# Rebuild
docker-compose up dev --build
```

### **Producción:**
```bash
# Build y ejecutar
docker-compose up prod --build

# Detener
docker-compose down

# Limpiar todo
docker-compose down -v --rmi all
```

### **Utilidades:**
```bash
# Entrar al contenedor dev
docker exec -it gestalt-dev sh

# Entrar al contenedor prod
docker exec -it gestalt-prod sh

# Ver todos los contenedores
docker ps -a

# Ver uso de recursos
docker stats
```

---

## 📚 Características

### ✨ **8 Leyes de Gestalt Interactivas**

| Ley | Descripción |
|-----|-------------|
| **Proximidad** | Elementos cercanos se perciben como grupo |
| **Semejanza** | Lo similar se agrupa mentalmente |
| **Continuidad** | Seguimos líneas y curvas naturalmente |
| **Cierre** | Completamos formas incompletas |
| **Figura y Fondo** | Separamos objetos del fondo |
| **Prägnanz** | Preferimos formas simples |
| **Región Común** | Los límites crean grupos |
| **Destino Común** | El movimiento sincronizado agrupa |

### 🎯 **Features Principales:**

- ✅ Navegación fluida con React Router
- ✅ Dark/Light Mode con persistencia
- ✅ Diseño Candy Glass (glassmorphism premium)
- ✅ Arquitectura SASS profesional
- ✅ Responsive design (mobile-first)
- ✅ Docker multi-stage optimizado
- ✅ Nginx con gzip y cache
- ✅ Security headers configurados

---

## 📁 Estructura del Proyecto
```
gestalt-laws/
├── src/
│   ├── components/
│   │   ├── atoms/              # Button, ColorBar
│   │   ├── molecules/          # Componentes medianos
│   │   └── organisms/          # Navbar, Footer
│   ├── contexts/
│   │   └── ThemeContext.jsx    # Dark/Light mode
│   ├── data/
│   │   └── gestaltLaws.js      # Data de las 8 leyes
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── LeyDetail.jsx       # Detalle de cada ley
│   │   └── About.jsx           # About page
│   ├── styles/
│   │   ├── abstracts/
│   │   │   ├── _variables.scss
│   │   │   └── _mixins.scss
│   │   ├── base/
│   │   │   └── _global.scss
│   │   └── main.scss
│   ├── App.jsx
│   └── main.jsx
├── public/
├── Dockerfile                  # Build de producción
├── Dockerfile.dev              # Imagen de desarrollo
├── docker-compose.yml          # Orquestación
├── nginx.conf                  # Config Nginx para SPA
└── package.json
```

---

## 🛠️ Scripts
```bash
pnpm run dev       # Desarrollo con Vite
pnpm run build     # Build optimizado
pnpm run preview   # Preview del build
pnpm run lint      # Linter ESLint
```

---

## 🌐 Arquitectura Docker

### **Desarrollo (Dockerfile.dev):**
- **Base:** Node 22 Alpine
- **Port:** 5173
- **Features:** Hot reload, volume mount
- **Package Manager:** pnpm

### **Producción (Dockerfile):**
- **Stage 1 (Builder):** Node 22 Alpine → Build React app
- **Stage 2 (Runtime):** Nginx Alpine → Servir estáticos
- **Port:** 80 (mapeado a 8080)
- **Optimizations:** 
  - Gzip compression
  - Static asset caching (1 year)
  - Security headers
  - SPA routing support

---

## 🚀 Despliegue

### **Docker Hub:**
```bash
docker build -t ruth-daniela-aguirre/gestalt-laws:latest .
docker push ruth-daniela-aguirre/gestalt-laws:latest
```

### **Vercel/Netlify:**
```bash
pnpm run build
# Subir directorio dist/
```

### **VPS con Docker:**
```bash
# En el servidor
git clone https://github.com/ruth-daniela-aguirre/gestalt-laws.git
cd gestalt-laws
docker-compose up prod -d
```

---

## 🔧 Stack Tecnológico

| Categoría | Tecnología |
|-----------|------------|
| **Frontend** | React 18, React Router DOM 6 |
| **Estilos** | Bootstrap 5, SASS, Custom Theme |
| **Íconos** | Bootstrap Icons |
| **Build Tool** | Vite 5 |
| **Package Manager** | pnpm |
| **Containerización** | Docker, Docker Compose |
| **Web Server** | Nginx Alpine |
| **Linter** | ESLint |

---

## 👩‍💻 Autora

**Ruth Daniela Aguirre**

- 🐙 GitHub: [@ruth-daniela-aguirre](https://github.com/ruth-daniela-aguirre)
- 💼 LinkedIn: [Ruth Daniela Aguirre](https://www.linkedin.com/in/ruth-daniela-aguirre)

---

## 📄 Licencia

MIT © 2024 Ruth Daniela Aguirre

---

## 🎓 Aprendizajes

Este proyecto fue desarrollado para practicar:

- ✅ React Router DOM y navegación SPA
- ✅ Context API para estado global
- ✅ Arquitectura SASS profesional (7-1 pattern)
- ✅ Docker multi-stage builds
- ✅ Nginx optimization para React apps
- ✅ Diseño moderno con glassmorphism
- ✅ Responsive design patterns

---

## 🐛 Troubleshooting

### Hot reload no funciona en Windows:
```yaml
# En docker-compose.yml
environment:
  - CHOKIDAR_USEPOLLING=true
```

### Rutas 404 en producción:

Verifica que `nginx.conf` tenga:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Permisos en Linux:
```bash
sudo chown -R $USER:$USER .
```

---

## 📸 Screenshots

_Próximamente..._