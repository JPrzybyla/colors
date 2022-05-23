export const getColor = () : string[] => {
    const colors: string[] = []

    for(let x=0; x<= localStorage.length; x++){
        const key : string | null = localStorage.key(x)
        let value: string | null

        if (key!==null){
            // @ts-ignore
            value = JSON.parse(localStorage.getItem(key))
            // @ts-ignore
            colors.push(value)
        }
    }
    return colors
}