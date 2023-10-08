export function sanitizeString(str: string | null): string{
    if(!str) {
        return '';
    }

    const map: Record<string, string> = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    
    return str.replace(reg, (match): string=>(map[match]));
}