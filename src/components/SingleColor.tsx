import React from "react";
import '../singleColor.scss'

interface props {
    color: object,
    red: boolean,
    green: boolean,
    blue: boolean,
    saturation: boolean
}

export const SingleColor: React.FC<props> = ({color, red, green, saturation, blue}) => {


    return(
        <div className={'singleColor-container'}>
            <div className={'singleColor-preview'} style={
                //@ts-ignore
                {backgroundColor: color.color.colorHex}
            }/>
            <div className={'singleColor-text'}>
                {
                    // @ts-ignore
                    color.color.colorHex.toUpperCase()
                }
            </div>
        </div>
    )
}