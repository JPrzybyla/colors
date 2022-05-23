import React, {useEffect, useState} from "react";
import {getColor} from "../scripts/getColor";
import {SingleColor} from "./SingleColor";

const ShowColor: React.FC = () => {

    const [red, setRed] = useState<boolean>(false)
    const [green, setGreen] = useState<boolean>(false)
    const [blue, setBlue] = useState<boolean>(false)
    const [saturation, setSaturation] = useState<boolean>(false)

    const [colors, setColors] = useState<string[]>(getColor())

    useEffect(()=>{
        setColors(getColor())
    }, [red, green, blue, saturation])


    return(
        <>
            <form>
                Filter Colors:
                <p>
                    <label>
                        Red{">"}50%
                        <input type={'checkbox'} onChange={()=>setRed(prevState => !prevState)}/>
                    </label>
                </p>
                <p>
                    <label>
                        Green{">"}50%
                        <input type={'checkbox'} onChange={()=>setGreen(prevState => !prevState)}/>
                    </label>
                </p>
                <p>
                    <label>
                        Blue{">"}50%
                        <input type={'checkbox'} onChange={()=>setBlue(prevState => !prevState)}/>
                    </label>
                </p>
                <p>
                    <label>
                        Saturation{">"}50%
                        <input type={'checkbox'} onChange={()=>setSaturation(prevState => !prevState)}/>
                    </label>
                </p>
            </form>
            {
                colors.map(color=><SingleColor
                    //@ts-ignore
                    color={color}
                    red={red}
                    green={green}
                    blue={blue}
                    saturation={saturation}
                />)
            }
        </>
    )
}
export default ShowColor