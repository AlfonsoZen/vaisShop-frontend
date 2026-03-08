# VAIS Shop - Frontend 🎧

VAIS es una plataforma de e-commerce de próxima generación con arquitectura **Headless**, diseñada para ofrecer una experiencia de "Comercio Experiencial". El núcleo de la interfaz es un visor 3D interactivo que permite a los usuarios explorar los "Hero Products" con una fidelidad visual y táctil superior.

## 🚀 Visión General
Este proyecto es la implementación en **React Router v7** (SSR) del frontend de VAIS, optimizado para el despliegue en **Vercel** y la integración con la **Shopify Storefront API**.

## 🛠️ Stack Tecnológico
- **Framework:** React Router v7 (con SSR habilitado).
- **Core:** React 18.3.1 (Downgrade estratégico para estabilidad de R3F/PresentationControls).
- **3D Engine:** Three.js + React Three Fiber (R3F) + @react-three/drei.
- **Estilos:** Tailwind CSS v4.
- **Iconos:** Lucide React.
- **Despliegue:** Vercel (Serverless Functions + Edge CDN).

## ✨ Características Principales
- **Aislamiento 3D (Anti-SSR):** Implementación de un componente `<ClientOnly>` que garantiza que el motor WebGL solo se ejecute en el navegador, evitando errores 500 en el servidor.
- **Experiencia Elástica:** Modelo 3D con comportamiento de "Snap Back" y controles elásticos mediante `PresentationControls` calibrados para máxima fluidez.
- **Calibración Visual OEM:** Configuración de iluminación física, mapeo de tonos y sombras de contacto para una representación fiel de materiales metálicos y glossy.
- **Shopify Ready:** Estructura de `loaders` preparada para consumir la Storefront API vía GraphQL.

## 📦 Instalación y Desarrollo

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Configurar variables de entorno:**
   Copia el archivo `.env.example` a `.env` y añade tus credenciales de Shopify:
   ```bash
   cp .env.example .env
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Construir para producción:**
   ```bash
   npm run build
   ```

## 🌍 Despliegue en Vercel
El proyecto está configurado para ser detectado automáticamente por Vercel como un proyecto de Remix/React Router. Asegúrate de que los `overrides` de React 18 se respeten durante la instalación en el pipeline de CI/CD.

---
Diseñado con ❤️ por **Alfonso Zendejas** para **VAIS**.
