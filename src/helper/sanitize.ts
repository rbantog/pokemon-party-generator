export function sanitizeString(str: string | null): string{
    if(!str) {
        return '';
    }

    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");

    return str.trim();
}