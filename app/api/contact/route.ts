// app/api/contact/route.ts
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { nom, prenom, dateNaissance, email, telephone, message } = await req.json()

  if (!nom || !prenom || !dateNaissance || !email || !telephone || !message) {
    return NextResponse.json({ message: 'Champs requis manquants' }, { status: 400 })
  }

  const htmlContent = `
    <div style="font-family: sans-serif; padding: 20px;">
      <h2>📬 Nouveau message reçu</h2>
      <p><strong>Nom :</strong> ${nom}</p>
      <p><strong>Prénom :</strong> ${prenom}</p>
      <p><strong>Date de naissance :</strong> ${dateNaissance}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${telephone}</p>
      <p><strong>Message :</strong></p>
      <p style="border-left: 3px solid #ccc; padding-left: 10px;">${message.replace(/\n/g, '<br>')}</p>
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
