const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDirectory = path.join(process.cwd(), 'public', 'images');
const optimizedDirectory = path.join(process.cwd(), 'public', 'images', 'optimized');

// Crear directorio optimizado si no existe
if (!fs.existsSync(optimizedDirectory)) {
  fs.mkdirSync(optimizedDirectory, { recursive: true });
}

// Configuraciones de optimización para diferentes tamaños
const sizes = [
  { width: 1280, suffix: 'large' },  // Reducido de 1920px a 1280px
  { width: 768, suffix: 'medium' },  // Reducido de 1280px a 768px 
  { width: 400, suffix: 'small' }    // Reducido de 640px a 400px
];

async function optimizeImage(file) {
  const filePath = path.join(imageDirectory, file);
  const fileInfo = path.parse(file);
  
  // Saltear directorios y la carpeta optimized
  if (fs.statSync(filePath).isDirectory() || fileInfo.name === 'optimized') {
    return;
  }
  
  // Saltear archivos que no son imágenes
  if (!['.jpg', '.jpeg', '.png', '.webp', '.avif'].includes(fileInfo.ext.toLowerCase())) {
    return;
  }

  console.log(`Optimizando ${file}...`);
  
  // Original comprimido con el mismo tamaño
  try {
    const outputPath = path.join(optimizedDirectory, file);
    
    // Usar AVIF para mejor compresión
    if (file.endsWith('.avif')) {
      await sharp(filePath)
        .avif({ quality: 60, effort: 9 })  // Calidad reducida, esfuerzo máximo
        .toFile(outputPath);
    } else if (file.endsWith('.png')) {
      await sharp(filePath)
        .png({ quality: 70, compressionLevel: 9 })  // Calidad reducida, compresión máxima
        .toFile(outputPath);
    } else {
      await sharp(filePath)
        .webp({ quality: 65, effort: 6 })  // Calidad reducida, esfuerzo alto
        .toFile(outputPath.replace(fileInfo.ext, '.webp'));
    }
    
    // Crear versiones redimensionadas
    for (const size of sizes) {
      const resizedFilename = `${fileInfo.name}-${size.suffix}${fileInfo.ext}`;
      const resizedPath = path.join(optimizedDirectory, resizedFilename);
      
      await sharp(filePath)
        .resize({ width: size.width, withoutEnlargement: true })
        .avif({ 
          quality: 60,  // Calidad reducida
          effort: 9     // Esfuerzo máximo de compresión
        })
        .toFile(resizedPath.replace(fileInfo.ext, '.avif'));
      
      // También crear versiones WebP para navegadores sin soporte AVIF
      await sharp(filePath)
        .resize({ width: size.width, withoutEnlargement: true })
        .webp({ 
          quality: 65,  // Calidad reducida
          effort: 6,    // Esfuerzo alto de compresión
          nearLossless: true  // Mejor compresión
        })
        .toFile(resizedPath.replace(fileInfo.ext, '.webp'));
    }
    
    console.log(`✓ ${file} optimizado y redimensionado correctamente`);
  } catch (error) {
    console.error(`Error al procesar ${file}:`, error);
  }
}

async function processImages() {
  const files = fs.readdirSync(imageDirectory);
  
  // Procesar cada archivo
  for (const file of files) {
    await optimizeImage(file);
  }
  
  console.log('¡Optimización completada!');
}

processImages(); 