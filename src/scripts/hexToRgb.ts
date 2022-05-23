export const hexToRgb = (hex: string) : { r: number, g: number, b: number} => {
    if(hex.length>6)
        hex = hex.slice(1)

    let r = parseInt(`${hex[0]}${hex[1]}`, 16);
    let g = parseInt(`${hex[2]}${hex[3]}`, 16);
    let b = parseInt(`${hex[4]}${hex[5]}`, 16);

    return {r: r, g: g, b: b};
}