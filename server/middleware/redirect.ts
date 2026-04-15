export default defineEventHandler((event) => {
    const url = getRequestURL(event)
    if (url.pathname === '/news/') {
        return sendRedirect(event, '/news', 301)
    }
})