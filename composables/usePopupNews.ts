import type {Tag} from '~/types/newsTypes'
import {CurrentNews, NewNews} from '~/utils/baseNews.ts'


export const usePopupNews = () => {
    const currentNewsSrc = useState<string>('currentNewsSrc', () => '')
    const currentNewsTitle = useState<string>('currentNewsTitle', () => '')
    const currentNewsDate = useState<string>('currentNewsDate', () => '')
    const currentNewsTags = useState<Tag[] | null>('currentNewsTags', () => null)

    const newNewsCode = useState<string | null>('newNewsCode', () => '')
    const newNewsSrc = useState<string>('newNewsSrc', () => '')
    const newNewsTitle = useState<string>('newNewsTitle', () => '')
    const newNewsDate = useState<string>('newNewsDate', () => '')
    const newNewsTags = useState<Tag[] | null>('newNewsTags', () => null)

    async function getNews(code) {
        const data: any = await useFetch(`https://bsk-admin-test.testers-site.ru/api/news/${code}`)

        const currentNews = new CurrentNews(data.data.value.data.result)
        currentNewsSrc.value = currentNews.src;
        currentNewsTags.value = currentNews.tags;
        currentNewsTitle.value = currentNews.title;
        currentNewsDate.value = currentNews.getFormattedDate();

        if (data.data.value.data.result.next !== null) {
            const newNews = new NewNews(data.data.value.data.result)

            newNewsCode.value = newNews.code;
            newNewsSrc.value = newNews.src;
            newNewsTags.value = newNews.tags;
            newNewsTitle.value = newNews.title;
            newNewsDate.value = newNews.getFormattedDate();
        } else {
            newNewsCode.value = null
        }

    }


    return {
        src: currentNewsSrc,
        title: currentNewsTitle,
        date: currentNewsDate,
        tags: currentNewsTags,

        newCode: newNewsCode,
        newTitle: newNewsTitle,
        newDate: newNewsDate,
        newSrc: newNewsSrc,
        newTags: newNewsTags,

        getNews
    }

}