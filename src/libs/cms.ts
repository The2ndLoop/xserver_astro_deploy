import { createClient } from 'microcms-js-sdk'

const client = createClient({
  serviceDomain: import.meta.env.MICRO_CMS_DOMAIN,
  apiKey: import.meta.env.MICRO_CMS_KEY,
})

interface BaseRes {
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

interface ListRes<T> {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}

interface Youtube extends BaseRes {
  title: string
  content: string
  url: string
}

export const getAllYoutube = async (): Promise<ListRes<Youtube>> => {
  return await client
    .get({
      endpoint: 'youtube',
    })
    .then((res) => res)
}
