#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

const SOURCE_DIR = 'public/images';
const DEST_DIR = 'public/images/optimized';

// Verifica que los directorios existan
async function ensureDirectories() {
  try {
    await fs.mkdir(DEST_DIR, { recursive: true });
    console.log('✅ Directorios verificados');
  } catch (error) {
    console.error('Error al crear directorios:', error);
    process.exit(1);
  }
}

// Encuentra todas las imágenes en un directorio recursivamente
async function findImages(dir) {
  let images = [];
  
  async function scanDir(currentDir) {
    const entries = await fs.readdir(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory() && entry.name !== 'optimized') {
        await scanDir(fullPath);
      } else if (
        entry.isFile() && 
        /\.(png|jpe?g)$/i.test(entry.name) &&
        !entry.name.includes('.webp') && 
        !entry.name.includes('.avif')
      ) {
        images.push(fullPath);
      }
    }
  }
  
  await scanDir(dir);
  return images;
}

// Optimiza una imagen
async function optimizeImage(imagePath) {
  try {
    const fileName = path.basename(imagePath);
    const fileNameWithoutExt = fileName.substring(0, fileName.lastIndexOf('.'));
    const relativePath = path.relative(SOURCE_DIR, path.dirname(imagePath));
    const outputDir = path.join(DEST_DIR, relativePath);
    
    // Asegurarse de que el directorio de salida existe
    await fs.mkdir(outputDir, { recursive: true });
    
    const outputPathWebP = path.join(outputDir, `${fileNameWithoutExt}.webp`);
    const outputPathAVIF = path.join(outputDir, `${fileNameWithoutExt}.avif`);
    
    // También copiamos la versión optimizada a la ubicación original para la compatibilidad
    const originalDirWebP = path.join(path.dirname(imagePath), `${fileNameWithoutExt}.webp`);
    
    console.log(`Procesando: ${imagePath}`);
    
    const image = sharp(imagePath);
    const metadata = await image.metadata();
    
    // Optimización básica manteniendo calidad
    const optimizedImage = image
      .resize({
        width: metadata.width,
        height: metadata.height,
        fit: 'inside',
        withoutEnlargement: true
      });
    
    // Generar versión WebP (mejor soporte)
    await optimizedImage
      .webp({ quality: 80 })
      .toFile(outputPathWebP);
    
    // Copiar WebP al directorio original para mejor compatibilidad
    await optimizedImage
      .webp({ quality: 80 })
      .toFile(originalDirWebP);
    
    // Generar versión AVIF (mejor compresión pero menor soporte)
    await optimizedImage
      .avif({ quality: 70 })
      .toFile(outputPathAVIF);
    
    console.log(`✅ Optimizado: ${path.basename(imagePath)}`);
    
    return {
      original: imagePath,
      webp: outputPathWebP,
      avif: outputPathAVIF,
      size: {
        original: metadata.size,
        webp: (await fs.stat(outputPathWebP)).size,
        avif: (await fs.stat(outputPathAVIF)).size
      }
    };
  } catch (error) {
    console.error(`❌ Error al optimizar ${imagePath}:`, error);
    return null;
  }
}

// Función principal
async function main() {
  console.log('🚀 Iniciando optimización de imágenes...');
  
  try {
    await ensureDirectories();
    
    const images = await findImages(SOURCE_DIR);
    console.log(`Encontradas ${images.length} imágenes para optimizar`);
    
    const results = [];
    for (const image of images) {
      const result = await optimizeImage(image);
      if (result) results.push(result);
    }
    
    // Mostrar estadísticas
    let totalOriginal = 0;
    let totalWebP = 0;
    let totalAVIF = 0;
    
    results.forEach(result => {
      totalOriginal += result.size.original || 0;
      totalWebP += result.size.webp || 0;
      totalAVIF += result.size.avif || 0;
    });
    
    console.log('\n📊 Estadísticas de optimización:');
    console.log(`Imágenes procesadas: ${results.length}`);
    console.log(`Tamaño original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Tamaño WebP: ${(totalWebP / 1024 / 1024).toFixed(2)} MB (${(totalWebP / totalOriginal * 100).toFixed(1)}%)`);
    console.log(`Tamaño AVIF: ${(totalAVIF / 1024 / 1024).toFixed(2)} MB (${(totalAVIF / totalOriginal * 100).toFixed(1)}%)`);
    console.log(`Ahorro WebP: ${((totalOriginal - totalWebP) / 1024 / 1024).toFixed(2)} MB (${(100 - totalWebP / totalOriginal * 100).toFixed(1)}%)`);
    console.log(`Ahorro AVIF: ${((totalOriginal - totalAVIF) / 1024 / 1024).toFixed(2)} MB (${(100 - totalAVIF / totalOriginal * 100).toFixed(1)}%)`);
    
    console.log('\n✅ Optimización completada exitosamente');
  } catch (error) {
    console.error('❌ Error durante la optimización:', error);
    process.exit(1);
  }
}

main(); 