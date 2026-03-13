# 🐕 Seguimiento de Pacientes - Veterinaria

## 📋 Vista General

**Seguimiento Pacientes Veterinaria** es una aplicación web diseñada para gestionar el registro y seguimiento de pacientes en una clínica veterinaria. Su objetivo es digitalizar y centralizar la información, reemplazando métodos tradicionales poco eficientes como libretas u hojas de cálculo, agilizando el trabajo administrativo diario.

**🌐 Sitio en Vivo:** https://seguimiento-pacientes-veterinaria.netlify.app 

## ✨ Características Principales (Features)

- Gestión completa de pacientes: Operaciones CRUD (Crear, Leer, Editar, Eliminar).

- Interfaz intuitiva: Diseño limpio y enfocado en la usabilidad para el personal de la clínica.

- Persistencia de datos inmediata: Los datos se guardan automáticamente en el navegador (LocalStorage).

- Diseño responsive: Accesible desde cualquier dispositivo (escritorio, tablet, móvil).

- Sin necesidad de backend: Funciona completamente en el frontend, simplificando el despliegue y uso.

## 🧩 Stack Tecnológico

El proyecto está construido con tecnologías modernas que garantizan un desarrollo ágil y una experiencia de usuario fluida:

- Vite: Como herramienta de construcción y servidor de desarrollo, ofreciendo una velocidad excepcional.
- React: Para construir una interfaz de usuario interactiva y basada en componentes reutilizables.
- Tailwind CSS: Para diseñar una interfaz sencilla y agradable de manera rápida y consistente, utilizando su enfoque de utilidades.
- LocalStorage del Navegador: Para la persistencia de datos. Toda la información de los pacientes se guarda directamente en el navegador del usuario, lo que evita la pérdida de datos entre sesiones sin necesidad de un backend complejo.

## 📁 Estructura del Proyecto
```bash
seguimiento-pacientes-veterinaria/
├── src/                    # Código fuente principal
│   ├── components/         # Componentes React reutilizables
│   │   ├── Error.jsx       # Componente para mostrar mensajes de error
│   │   ├── Formulario.jsx  # Formulario para crear/editar pacientes
│   │   ├── Header.jsx      # Cabecera de la aplicación
│   │   ├── ListadoPacientes.jsx # Lista principal de pacientes
│   │   └── Paciente.jsx    # Componente individual para cada paciente
│   ├── App.jsx             # Componente raíz de la aplicación
│   ├── index.css           # Estilos globales (Tailwind CSS)
│   └── main.jsx            # Punto de entrada que renderiza la app
├── eslint.config.js        # Configuración de ESLint para calidad de código
├── index.html              # Plantilla HTML principal
├── package.json            # Dependencias y scripts del proyecto
└── package-lock.json       # Versiones exactas de dependencias
```


## Usarlo de manera local
1. Clonar El Repositorio

```bash
# Clonar usando HTTPS
git clone https://github.com/yasdiel/seguimiento-pacientes-veterinaria.git  

# Navegar al directorio del proyecto
cd seguimiento-pacientes-veterinaria
```

2. Instalar Dependencias
```bash
# Instalar todas las dependencias del package.json
npm install
```

3. Verificar la Instalación
```bash
# Verificar que las dependencias se instalaron correctamente
npm list --depth=0

# Deberías ver algo como:
# seguimiento-pacientes-veterinaria@1.0.0
# ├── react@18.x.x
# ├── react-dom@18.x.x
# ├── vite@5.x.x
# └── tailwindcss@3.x.x
```

4. Desarrollo
```bash
# Iniciar servidor de desarrollo en modo hot-reload
npm run dev

# La aplicación estará disponible en:
# - Local:   http://localhost:5173
```

5. Produccion
```bash
# Construir la aplicación para producción
npm run build

# Los archivos optimizados se generarán en la carpeta /dist
# Puedes servir esta carpeta con cualquier servidor estático

# Previsualizar la build de producción localmente
npm run preview

# Esto sirve la carpeta /dist en http://localhost:4173
```

## 🎯 Objetivo

Digitalizar y centralizar la gestión de pacientes de una veterinaria, proporcionando una herramienta intuitiva que:

· Mejore la organización de los registros médicos.

· Ahorre tiempo en tareas administrativas diarias.

· Reduzca errores asociados a métodos manuales.

· Sea de acceso inmediato sin configuración compleja.

### ⚠️ Nota sobre Persistencia: 
Los datos se guardan exclusivamente en el navegador donde se usa la aplicación. Esto significa:

✅ No se requiere servidor ni base de datos externa.

✅ Los datos persisten al recargar la página.

⚠️ Los datos no se sincronizan entre diferentes navegadores o dispositivos.

⚠️ Si se borran los datos del navegador (caché), se perderá la información.