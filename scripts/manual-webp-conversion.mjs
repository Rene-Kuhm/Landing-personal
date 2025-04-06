#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

// Directorio de imágenes
const IMAGES_DIR = 'public/images';

// Función para crear la versión WebP de una imagen
async function convertToWebP(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      return null;
    }

    const fileNameWithoutExt = path.basename(filePath, ext);
    const dirName = path.dirname(filePath);
    const webpPath = path.join(dirName, `${fileNameWithoutExt}.webp`);

    console.log(`Procesando: ${filePath}`);

    await sharp(filePath)
      .webp({ quality: 80 })
      .toFile(webpPath);

    console.log(`✅ Creado: ${webpPath}`);
    
    // Obtenemos los tamaños para mostrar las estadísticas
    const originalStat = await fs.stat(filePath);
    const webpStat = await fs.stat(webpPath);
    
    return {
      original: filePath,
      webp: webpPath,
      originalSize: originalStat.size,
      webpSize: webpStat.size
    };
  } catch (error) {
    console.error(`❌ Error al procesar ${filePath}:`, error);
    return null;
  }
}

// Función para encontrar todas las imágenes
async function findImages(dir) {
  try {
    const files = await fs.readdir(dir, { withFileTypes: true });
    const images = [];

    for (const file of files) {
      const fullPath = path.join(dir, file.name);
      
      if (file.isDirectory()) {
        // Si es un directorio, buscar recursivamente
        const subDirImages = await findImages(fullPath);
        images.push(...subDirImages);
      } else if (file.isFile()) {
        // Si es un archivo PNG o JPG
        const ext = path.extname(file.name).toLowerCase();
        if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
          // Verificar si ya existe la versión WebP
          const webpFile = path.join(dir, `${path.basename(file.name, ext)}.webp`);
          const webpExists = fs.access(webpFile).then(() => true).catch(() => false);
          
          // Solo añadir si no existe la versión WebP
          if (!(await webpExists)) {
            images.push(fullPath);
          }
        }
      }
    }

    return images;
  } catch (error) {
    console.error(`Error al leer el directorio ${dir}:`, error);
    return [];
  }
}

// Función principal
async function main() {
  console.log('🚀 Iniciando conversión a WebP...');

  try {
    // Encontrar todas las imágenes
    const images = await findImages(IMAGES_DIR);
    console.log(`Encontradas ${images.length} imágenes para convertir`);

    // Convertir cada imagen a WebP
    const results = [];
    for (const image of images) {
      const result = await convertToWebP(image);
      if (result) results.push(result);
    }

    // Mostrar estadísticas
    if (results.length > 0) {
      let totalOriginalSize = 0;
      let totalWebPSize = 0;

      results.forEach(result => {
        totalOriginalSize += result.originalSize;
        totalWebPSize += result.webpSize;
      });

      const savingsPercent = ((1 - (totalWebPSize / totalOriginalSize)) * 100).toFixed(2);
      const savingsSize = ((totalOriginalSize - totalWebPSize) / 1024).toFixed(2);

      console.log('\n📊 Estadísticas de conversión:');
      console.log(`Imágenes procesadas: ${results.length}`);
      console.log(`Tamaño original: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Tamaño WebP: ${(totalWebPSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`Ahorro: ${savingsSize} KB (${savingsPercent}%)`);
    }

    console.log('\n✅ Conversión a WebP completada con éxito');
  } catch (error) {
    console.error('❌ Error durante la conversión:', error);
    process.exit(1);
  }
}

main(); 