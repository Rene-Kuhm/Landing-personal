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
  { width: 1920, suffix: 'large' },
  { width: 1280, suffix: 'medium' },
  { width: 640, suffix: 'small' }
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
        .avif({ quality: 70 })
        .toFile(outputPath);
    } else if (file.endsWith('.png')) {
      await sharp(filePath)
        .png({ quality: 80 })
        .toFile(outputPath);
    } else {
      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(outputPath.replace(fileInfo.ext, '.webp'));
    }
    
    // Crear versiones redimensionadas
    for (const size of sizes) {
      const resizedFilename = `${fileInfo.name}-${size.suffix}${fileInfo.ext}`;
      const resizedPath = path.join(optimizedDirectory, resizedFilename);
      
      await sharp(filePath)
        .resize({ width: size.width, withoutEnlargement: true })
        .avif({ quality: 70 })
        .toFile(resizedPath.replace(fileInfo.ext, '.avif'));
      
      // También crear versiones WebP para navegadores sin soporte AVIF
      await sharp(filePath)
        .resize({ width: size.width, withoutEnlargement: true })
        .webp({ quality: 80 })
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