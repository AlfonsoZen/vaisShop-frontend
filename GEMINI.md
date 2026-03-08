# Project Context: vaisShop

## 1. Visión General del Proyecto
"vaisShop" es una plataforma de e-commerce con arquitectura Headless. Su diferenciador principal es el "Comercio Experiencial", utilizando modelos 3D interactivos (`.glb`/`.gltf`) de los "Hero Products" para elevar la conversión. 
El MVP (Minimum Viable Product) es una tienda para audífonos OEM.

## 2. Stack Tecnológico Definitivo
* **Entorno de Ejecución Base:** Node.js
* **Frontend Framework:** React Router v7 (anteriormente Remix v2). Utilizamos Server-Side Rendering (SSR) y Loaders/Actions.
* **Estilos:** Tailwind CSS.
* **Experiencia 3D:** Three.js + React Three Fiber (R3F) + @react-three/drei.
* **Backend / Headless CMS:** Shopify Storefront API (vía peticiones GraphQL estándar).
* **Despliegue (Hosting):** Vercel (Serverless Functions para SSR y CDN para estáticos).

## 3. Arquitectura y Reglas Críticas de Desarrollo
Para evitar colisiones entre el ecosistema web y el renderizado 3D, el asistente de desarrollo debe seguir estas reglas estrictas:

### A. Aislamiento del Ecosistema 3D (Anti-SSR)
* **Regla de Oro:** El motor de Node.js en el servidor (Vercel) NO tiene acceso a la API de WebGL. Cualquier componente que importe `three` o `@react-three/fiber` (incluyendo el `<Canvas>`) provocará un error 500 si intenta renderizarse en el servidor.
* **Solución:** Todo componente relacionado con 3D debe estar envuelto en un componente `<ClientOnly>` (Hydration Fallback) o utilizar convenciones de carga diferida (Lazy Loading) para asegurar que su ejecución ocurra **estrictamente en el navegador del cliente** (Client-Side Rendering).
* **Assets Estáticos:** Los modelos `.glb` o `.gltf` deben colocarse en la carpeta `/public` y llamarse mediante rutas absolutas (ej. `useGLTF('/modelo.glb')`). Nunca deben ser importados directamente en el bundle de JavaScript para evitar problemas de peso en Vercel.

### B. Integración con Shopify (Sin Hydrogen CLI)
* **Importante:** Este proyecto NO utiliza el entorno de Oxygen ni el empaquetador de Hydrogen. Es un proyecto de React Router estándar desplegado en Vercel.
* **Obtención de datos:** La comunicación con Shopify se hará mediante la función `loader` de React Router utilizando peticiones `fetch` nativas de Node.js apuntando al endpoint GraphQL de la Storefront API de Shopify.
* Las variables de entorno necesarias son: `PUBLIC_STORE_DOMAIN`, `PUBLIC_STOREFRONT_API_VERSION`, y `PUBLIC_STOREFRONT_API_TOKEN`.

## 4. Hitos Iniciales para gemini-cli
1. Crear la estructura base de rutas en React Router v7.
2. Implementar un wrapper `<ClientOnly>` funcional.
3. Crear un componente 3D seguro que cargue el modelo del audífono sin romper el SSR.
4. Redactar el `loader` principal para hacer un query a la Storefront API de Shopify y extraer los detalles del producto de prueba.
