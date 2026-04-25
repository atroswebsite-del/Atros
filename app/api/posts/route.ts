import { readFileSync } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

/** 博客列表数据：与线上 https://www.atros.co/api/posts 同步，见 `data/posts.json` */
export async function GET() {
  const filePath = join(process.cwd(), 'data', 'posts.json')
  const raw = readFileSync(filePath, 'utf8')
  return NextResponse.json(JSON.parse(raw))
}
