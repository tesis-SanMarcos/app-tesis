export const typeProducts = ( slug = "") => {
    const DEFAULT_VALUE = 0
    const VALUES = {
        "bebidas" : 1 ,
        "galletas" : 2 ,
    }
    const slugLower = slug.toLowerCase()
    return VALUES[slugLower] || DEFAULT_VALUE;
}