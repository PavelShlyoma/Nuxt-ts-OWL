type Element = {
    contentType: string;
    description: string;
    originalName: string;
    src: string;
    title: string;
    type: string;
}

type ImageMetaElement = {
    contentType: string;
    description: string;
    externalId: string;
    fileName: string;
    fileSize: string;
    handlerId: number | null;
    height: string;
    id: string;
    moduleId: string;
    originalName: string;
    src: string;
    subdir: string;
    timestampX: string;
    width: string;
}

type Content = {
    type: string;
    content: string;
}

type ImageContent = {
    type: string;
    title: string;
    element: Element;
    description: string;
}

type Meta = {
    elementMetaDescription: string;
    elementMetaKeywords: string;
    elementMetaTitle: string;
    elementPageTitle: string;
    elementOgImage: ImageMetaElement;
}

type Values = {
    code: string;
    color: string;
    name: string;
    src: string;
}

type Tag = {
    code: string;
    name: string;
    values: Values;
}


export const useNews = () => {
    const src = ref<string>('')
    const title = ref<string>('')
    const date = ref<string>('')
    const tags = ref<Array<Tag>>([])

    return {
        src,
        title,
        date,
        tags,
    }

}