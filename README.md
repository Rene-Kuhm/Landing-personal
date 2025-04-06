# Agencia Web - KuhmDev

Sitio web para una agencia de desarrollo web y consultoría digital, optimizado para rendimiento y SEO.

![Rendimiento en Mobile](./public/images/performance-mobile.png)
![Rendimiento en Desktop](./public/images/performance-desktop.png)

## Características Clave

- Diseño responsive para móviles y escritorio
- Optimización de imágenes automática (WebP/AVIF)
- Puntuación perfecta en SEO
- Excelente puntuación en Accesibilidad
- Carga rápida (100/100 en Rendimiento)
- Servidor de contacto integrado
- Páginas legales (Términos y Condiciones, Política de Privacidad)
- Animaciones suaves con Framer Motion
- Modo oscuro/claro

## Configuración de Variables de Entorno

Para que el formulario de contacto funcione correctamente, necesitas configurar las siguientes variables de entorno:

1. Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion
EMAIL_RECIPIENT=correo_destinatario@gmail.com
```

### Cómo obtener una contraseña de aplicación para Gmail:

1. Ve a tu cuenta de Google > Gestionar tu Cuenta de Google
2. Ve a "Seguridad"
3. Habilita la verificación en dos pasos si no la tienes habilitada
4. Ve a "Contraseñas de aplicaciones"
5. Selecciona "Otra" como tipo de aplicación y dale un nombre (por ejemplo, "Mi Sitio Web")
6. Google generará una contraseña de aplicación de 16 caracteres. Cópiala y úsala en tu variable `EMAIL_PASS`

## Mejoras Implementadas

### Optimización de Imágenes
- Conversión automática de imágenes a formatos modernos (WebP/AVIF)
- Carga diferida de imágenes no críticas
- Priorización de imágenes LCP (Largest Contentful Paint)
- Script de optimización automática de imágenes durante la compilación

### Rendimiento
- Reducción del JavaScript no utilizado
- Optimización de la carga de la página (CSS crítico)
- Componentes del lado del cliente solo cuando es necesario
- Estrategias de pre-carga para recursos críticos

### Accesibilidad
- Etiquetas semánticas adecuadas
- Contrastes de color adecuados
- Navegación por teclado mejorada
- Textos alternativos para todas las imágenes

### SEO
- Metadatos optimizados
- Estructura de encabezados correcta
- URLs amigables
- Sitemap y robots.txt

## Desarrollo

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## Producción

```bash
npm run build
npm start
```

## Tecnologías utilizadas

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Nodemailer
- Sharp (para optimización de imágenes)

## Estructura del Proyecto

- `/app`: Estructura principal de la aplicación
  - `/components`: Componentes reutilizables
  - `/sections`: Secciones de la página principal
  - `/api`: Endpoints de la API (formulario de contacto)
  - `/privacidad`: Página de política de privacidad
  - `/terminos`: Página de términos y condiciones
- `/public`: Archivos estáticos
- `/scripts`: Scripts de utilidad (optimización de imágenes)

## Próximas Mejoras

- Implementación de PWA (Progressive Web App)
- Análisis con Google Analytics
- Sistema de blog integrado
- Internacionalización (i18n)

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
