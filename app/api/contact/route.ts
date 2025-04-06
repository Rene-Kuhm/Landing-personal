import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Obtener las variables de entorno
const EMAIL_USER = process.env.EMAIL_USER || '';
const EMAIL_PASS = process.env.EMAIL_PASS || '';
const EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT || '';

// Verificar que las variables de entorno están configuradas
if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_RECIPIENT) {
  console.error('Error: Variables de entorno para el correo no configuradas correctamente.');
}

// Configurar el transporte de correo con Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER, // Tu correo Gmail desde variables de entorno
    pass: EMAIL_PASS, // Contraseña desde variables de entorno
  },
});

export async function POST(req: Request) {
  try {
    // Verificar que las credenciales están configuradas
    if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_RECIPIENT) {
      return NextResponse.json(
        { error: 'Configuración del servidor de correo incompleta' },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { nombre, email, asunto, mensaje } = body;

    // Validar que todos los campos estén presentes
    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }
    
    // Configurar el correo
    const mailOptions = {
      from: `"Formulario Web" <${EMAIL_USER}>`,
      to: EMAIL_RECIPIENT, // Dirección del destinatario desde variables de entorno
      replyTo: email, // El cliente puede responder directamente al remitente
      subject: `Nuevo mensaje web: ${asunto}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color: #4A6CF7;">Nuevo mensaje desde el formulario de contacto</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${asunto}</p>
          <h3>Mensaje:</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">${mensaje}</p>
          <hr style="border: 1px solid #eee;" />
          <p style="font-size: 12px; color: #777;">Este mensaje fue enviado desde el formulario de contacto de tu sitio web.</p>
        </div>
      `
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    // Registrar los datos en la consola (solo para monitoreo)
    console.log('Mensaje enviado exitosamente a', EMAIL_RECIPIENT);
    console.log('Datos del formulario recibidos:', { nombre, email, asunto });

    return NextResponse.json({ 
      success: true
    });
  } catch (error) {
    console.error('Error al procesar la solicitud:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud de contacto' },
      { status: 500 }
    );
  }
} 