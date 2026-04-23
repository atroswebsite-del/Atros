import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

type Author = {
  name: string
  picture: string
  position: string
  company: string
}


export type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  content: string
  size: 'large' | 'small'
  lang: 'en' | 'zh_cn'
}


const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: (keyof PostType)[] = []): PostType {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  // type Items = {
  //   [key: string]: string
  // }

  // const items: Items = {}

  const items: Partial<PostType> = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items as PostType
}

export function getAllPosts(fields: (keyof PostType)[] = []): PostType[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (new Date(post2.date).getTime() - new Date(post1.date).getTime()))
  return posts as PostType[]
}

// export function getMorePosts(currentSlug: string, fields: string[] = []) {
//   const posts = getAllPosts(fields)
//   return posts.filter(item => item.slug !== currentSlug).slice(0, 4)
// }
