import {stat} from "fs";


export const sendColor = (color:string) :boolean => {

    const regex: RegExp = /[a-f]|[0-9]/
    let letters : string[]
    let state: boolean = true


    //checking the length of string sended into a function
    switch (color.length){
        case 6:
            letters = color.split('')

            //checking if the char is validate hex value
            letters.forEach(letter => {
                if(!regex.test(letter)){
                    console.log(letter + regex.test(letter))
                    state = false
                }
            })
            return state
        case 7:
            letters = color.slice(1).split('')

            //checking if the first char is #
            if(color.charAt(0)==='#'){
                //checking if the char is validate hex value
                letters.forEach(letter => {
                    if(!regex.test(letter)){
                        state = false
                    }
                })
                return state
            }
            else
                return false
        default:
            return false
    }
}