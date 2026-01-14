import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import mime from 'mime'

export async function GET(
    request: NextRequest,
    { params }: { params: { path: string[] } }
) {
    // 1. Security Check: Host must be localhost
    const host = request.headers.get('host') || ''
    const isLocalhost =
        host.startsWith('localhost') ||
        host.startsWith('127.0.0.1') ||
        host.startsWith('[::1]')

    if (!isLocalhost) {
        return new NextResponse('Forbidden', { status: 403 })
    }

    // 2. Resolve File Path
    // 'params.path' is an array of path segments (e.g. ['venture-plans', 'house1.jpg'])
    const filePathParams = (await params).path
    const relativePath = filePathParams.join('/')

    // Resolve absolute path to the 'private' directory in the project root
    const privateDir = path.join(process.cwd(), 'private')
    const filePath = path.join(privateDir, relativePath)

    // 3. Security Check: Prevent Directory Traversal
    if (!filePath.startsWith(privateDir)) {
        return new NextResponse('Forbidden', { status: 403 })
    }

    // 4. Check if file exists
    if (!fs.existsSync(filePath)) {
        return new NextResponse('File not found', { status: 404 })
    }

    // 5. Serve File
    try {
        const fileBuffer = fs.readFileSync(filePath)
        const contentType = mime.getType(filePath) || 'application/octet-stream'

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': contentType,
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        })
    } catch (error) {
        console.error('Error serving private file:', error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}
