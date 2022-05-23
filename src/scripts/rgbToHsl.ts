export const rgbToHSL = (r:number, g:number, b:number):{h:number, s: number, l:number} => {
    r /= 255;
    g /= 255;
    b /= 255;
    const l: number = Math.max(r, g, b);
    const s: number = l - Math.min(r, g, b);
    const h: number = s
        ? l === r
            ? (g - b) / s
            : l === g
                ? 2 + (b - r) / s
                : 4 + (r - g) / s
        : 0;
    const H: number = 60 * h < 0 ? 60 * h + 360 : 60 * h
    const S: number = 100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)
    const L: number = (100 * (2 * l - s)) / 2
    return {h:H, s:S, l:L}

};