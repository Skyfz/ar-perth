import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'content/news')

export type Post = {
    slug: string
    title: string
    date: string
    category: string
    image: string
    author: string
    content: string
}

export function getAllPosts(): Post[] {
    // specific order for now to match the UI
    const slugs = [
        'understanding-the-60bn-opportunity',
        'why-renting-in-perth-is-about-to-change',
        '3d-printing-construction',
        'the-missing-middle'
    ]

    return slugs.map(slug => getPostBySlug(slug))
}

export function getPostBySlug(slug: string): Post {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Simple frontmatter parser
    const frontmatterRegex = /---\s*[\r\n]+([\s\S]*?)[\r\n]+---/
    const match = fileContents.match(frontmatterRegex)

    let metadata: any = {}
    let content = fileContents

    if (match) {
        const frontmatter = match[1]
        content = fileContents.replace(match[0], '').trim()

        frontmatter.split('\n').forEach(line => {
            const [key, ...value] = line.split(':')
            if (key && value) {
                const cleanKey = key.trim()
                const cleanValue = value.join(':').trim().replace(/^"|"$/g, '')
                metadata[cleanKey] = cleanValue
            }
        })
    }

    return {
        slug,
        title: metadata.title || '',
        date: metadata.date || '',
        category: metadata.category || '',
        image: metadata.image || '',
        author: metadata.author || '',
        content
    }
}
