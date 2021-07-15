export const getParam = (paramKey: string): string | null => {
    const query = window.location.search.substring(1) // remove '?' at start
    const paramPairs = query.split('&')
    paramPairs.forEach((pair) => {
        const keyValue = pair.split('=')
        if (keyValue[0].toLowerCase() === paramKey.toLowerCase())
            return keyValue[1]
    })

    return null
}