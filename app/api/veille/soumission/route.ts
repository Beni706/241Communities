// route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@/generated/prisma'
import { writeFile } from 'fs/promises'
import path from 'path'

const prisma = new PrismaClient()

export async function POST(request: Request) {
    try {
        const formData = await request.formData()
        const file = formData.get('file') as File
        const id_veille = formData.get('id_veille')
        const id_apprenant = formData.get('id_apprenant')

        if (!file || !id_veille || !id_apprenant) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const apprenantId = parseInt(id_apprenant.toString(), 10)
        const veilleId = parseInt(id_veille.toString(), 10)

        if (isNaN(apprenantId) || isNaN(veilleId)) {
            return NextResponse.json({ error: 'Invalid ID provided' }, { status: 400 })
        }

        // Stocker le fichier
        const buffer = Buffer.from(await file.arrayBuffer())
        const filename = `soumission-${Date.now()}-${file.name}`
        const filePath = path.join(process.cwd(), 'public/uploads', filename)
        
        await writeFile(filePath, buffer)
        
        const lien_soumission = `/uploads/${filename}`

        const soumission = await prisma.soumission.create({
            data: {
                id_apprenant: apprenantId,
                id_veille: veilleId,
                lien_soumission,
            }
        })

        return NextResponse.json({ 
            message: 'Soumission enregistrée', 
            soumission 
        }, { status: 201 })
    } catch (error) {
        console.error("Erreur:", error)
        return NextResponse.json({ 
            message: 'Erreur lors de la soumission', 
            error: error instanceof Error ? error.message : String(error) 
        }, { status: 500 })
    }
}