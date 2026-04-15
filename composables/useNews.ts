import type {Tag} from '~/types/newsTypes.ts'

export const useNews = () => {
    const src = useState('src', () => '')
    const title = useState('title', () => '')
    const date = useState('date', () => '')
    const tags = useState<Tag[] | null>('tags', () => null)
    const code = useState<string | null>('code', () => null)

    return {
        src,
        title,
        date,
        tags,
        code
    }

}