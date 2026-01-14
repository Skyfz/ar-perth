import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'
import mime from 'mime'

export async function GET(
    request: NextRequest,
    { params }: { params: { path: string[] } }
) {
    const host = request.headers.get('host') || ''
    const isLocalhost =
        host.startsWith('localhost') ||
        host.startsWith('127.0.0.1') ||
        host.startsWith('[::1]')

    console.log('[Private Image Debug] Request:', {
        url: request.url,
        host,
        isLocalhost,
        headers: Object.fromEntries(request.headers.entries())
    })

    // 1. Security Check: Host must be localhost
    if (!isLocalhost) {
        console.log('[Private Image Debug] Blocked by host check')
        return new NextResponse('Forbidden', { status: 403 })
    }

    // 2. Resolve File Path
    const filePathParams = (await params).path
    const relativePath = filePathParams.join('/')

    // Resolve absolute path to the 'private' directory in the project root
    const privateDir = path.join(process.cwd(), 'private')
    const filePath = path.join(privateDir, relativePath)

    console.log('[Private Image Debug] Path Resolution:', {
        relativePath,
        privateDir,
        filePath,
        exists: fs.existsSync(filePath)
    })

    // 3. Security Check: Prevent Directory Traversal
    if (!filePath.startsWith(privateDir)) {
        console.log('[Private Image Debug] Blocked by path traversal check')
        return new NextResponse('Forbidden', { status: 403 })
    }

    // 4. Check if file exists
    if (!fs.existsSync(filePath)) {
        console.log('[Private Image Debug] File not found')
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
        console.error('[Private Image Debug] Error serving private file:', error)
        return new NextResponse('Internal Server Error', { status: 500 })
    }
}
