import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Servicios from './sections/Servicios';
import Proyectos from './sections/Proyectos';
import Proceso from './sections/Proceso';
import SobreNosotros from './sections/SobreNosotros';
import Contacto from './sections/Contacto';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Agencia de Desarrollo Web y Consultoría | KuhmDev',
  description: 'Expertos en desarrollo web, programación y consultoría digital. Creamos soluciones a medida que impulsan el crecimiento de tu negocio.',
};

/**
 * Las imágenes webp y avif se cargan automáticamente gracias al 
 * componente OptimizedImage que detecta y usa los formatos modernos
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Proyectos />
        <Proceso />
        <SobreNosotros />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
