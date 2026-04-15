export type Element = {
    contentType: string;
    description: string;
    originalName: string;
    src: string;
    title: string;
    type: string;
}

export type ImageMetaElement = {
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

export interface Content {
    type: string;
    content: string;
}

export interface ImageContent {
    type: string;
    title: string;
    element: Element[];
    description: string;
}

export type Meta = {
    elementMetaDescription: string;
    elementMetaKeywords: string;
    elementMetaTitle: string;
    elementPageTitle: string;
    elementOgImage: ImageMetaElement[];
}

export type Values = {
    code: string;
    color: string;
    name: string;
    src: string;
}

export type Tag = {
    code: string;
    name: string;
    values: Values[];
}

export type Next = {
    code: string;
    date: string;
    id: number;
    picture: string;
    tags: Tag[]
    title: string;
}

export type resData = {
    advantage_slider_complex: null | boolean;
    advantage_slider_elements: null | boolean;
    code: string;
    content: Array<Content> | Array<ImageContent>;
    date: string;
    id: number;
    is_hide_list: boolean;
    meta: Meta;
    next: Next;
    tags: Tag[];
    title: string;
}