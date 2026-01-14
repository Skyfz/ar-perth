import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || ''
  
  // Strict check for localhost
  // We allow localhost using IPv4, IPv6, or the name 'localhost'
  const isLocalhost = 
    host.startsWith('localhost') || 
    host.startsWith('127.0.0.1') || 
    host.startsWith('[::1]')

  if (!isLocalhost) {
    // If not localhost, redirect to home page immediately
    return NextResponse.redirect(new URL('/', request.url))
  }

  // Allow the request to proceed
  return NextResponse.next()
}

export const config = {
  // Only run this proxy on specific paths
  matcher: [
    '/venture-plans/:path*',
    '/house/:path*'
  ],
}
