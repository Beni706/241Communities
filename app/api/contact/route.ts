import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import path from 'path'
import fs from 'fs'

export async function POST(req: Request) {
  const { nom, prenom, email, message } = await req.json()

  if (!nom || !prenom || !email || !message) {
    return NextResponse.json({ message: 'Champs requis manquants' }, { status: 400 })
  }

  // Lire le logo et le convertir en base64
  const logoPath = path.join(process.cwd(), 'public', 'logo.png')
  const logoBase64 = fs.existsSync(logoPath)
    ? fs.readFileSync(logoPath).toString('base64')
    : null

  const logoImage = logoBase64
    ? `data:image/png;base64,${logoBase64}`
    : ''

  const htmlContent = `
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px; padding: 20px; font-family: sans-serif; color: #000000;">
      <div style="text-align: center; margin-bottom: 20px;">
        ${logoImage ? `<img src="${logoImage}" alt="Logo" style="height: 60px;">` : ''}
      </div>
      <h2 style="color: #d90429; border-bottom: 2px solid #d90429; padding-bottom: 8px;">📬 Nouveau message reçu</h2>
      <p><strong style="color:#d90429;">Nom :</strong> ${nom}</p>
      <p><strong style="color:#d90429;">Prénom :</strong> ${prenom}</p>
      <p><strong style="color:#d90429;">Email :</strong> ${email}</p>
      <p><strong style="color:#d90429;">Message :</strong></p>
      <div style="border-left: 4px solid #d90429; padding-left: 12px; background-color: #f9f9f9; border-radius: 4px;">
        ${message.replace(/\n/g, '<br>')}
      </div>
      <p style="margin-top: 20px; font-size: 12px; color: #888888;">Cet email a été généré automatiquement depuis le formulaire de contact.</p>
    </div>
  `

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_HOST,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"${prenom} ${nom}" <${email}>`,
      to: process.env.EMAIL_HOST,
      subject: `Nouveau message de ${prenom} ${nom}`,
      html: htmlContent,
    })

    return NextResponse.json({ message: 'Message envoyé avec succès' }, { status: 200 })
  } catch (error) {
    console.error('Erreur envoi email :', error)
    return NextResponse.json({ message: 'Erreur lors de l’envoi du message' }, { status: 500 })
  }
}
