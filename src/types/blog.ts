import { CategoriesTypes } from './category'
import { EyeCatchTypes } from './eyeCatch'

export type BlogTypes = {
  id: string
  title: string
  slug: string
  content: string
  publishDate: string
  eyeCatch?: EyeCatchTypes
  categories: CategoriesTypes[]
  description: string
}
