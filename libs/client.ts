import { createClient } from 'microcms-js-sdk'

// Schema情報
// Blogsテーブル
//   title:       string
//   content:     string
//   slug:        string
//   publishDate: string
//   eyeCatch?:   EyeCatchTypes
//   description: string
//   categories:  reference

// Categoriesテーブル
//   name:        string
//   slug:        string

// microCMSの基本設定（ドメイン、APIKey）
export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN || '',
  apiKey: process.env.API_KEY || '',
})

// ブログのSlug検索
export async function getPostBySlug(slug: string) {
  try {
    const post = await client.get({
      endpoint: 'blogs',
      queries: { filters: `slug[equals]${slug}` },
    })
    return post.contents[0]
  } catch (err) {
    console.log('~~ getPostSlug ~~')
    console.log(err)
  }
}

// Slug全件取得
export async function getAllSlugs(limit = 100) {
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug', orders: '-publishDate', limit: limit },
    })
    return slugs.contents
  } catch (err) {
    console.log('~~ getAllSlugs ~~')
    console.log(err)
  }
}

// ブログ全件取得
export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug,eyeCatch',
        orders: '-publishDate',
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPosts ~~')
    console.log(err)
  }
}

// カテゴリー全件取得
export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: 'categories',
      queries: {
        fields: 'id,name,slug',
        limit: limit,
      },
    })
    return categories.contents
  } catch (err) {
    console.log('~~ getAllCategories ~~')
    console.log(err)
  }
}

// カテゴリー検索
export async function getAllPostsByCategory(categoryID: string, limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        filters: `categories[contains]${categoryID}`,
        fields: 'title,slug,eyeCatch',
        orders: '-publishDate',
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getAllPostsByCategory ~~')
    console.log(err)
  }
}
