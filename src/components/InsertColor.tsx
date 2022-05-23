import React from "react";
import {sendColor} from "../scripts/sendColor";
import {hexToRgb} from "../scripts/hexToRgb";
import {rgbToHSL} from "../scripts/rgbToHsl";


type MyState = { text: string, regex: RegExp, errorMessage : string, count : number };

class InsertColor extends React.Component<{}, MyState> {

    state = {
        text: '',
        regex: /[a-f]|[0-9]/,
        inputElement: React.createRef<HTMLInputElement>(),
        errorMessage: '',
        count : 0
    }

    render() {
        return (
            <form onSubmit={(e)=> this.onSubmit(e)}>

                <label>
                    Color:
                    <input type={'text'} onChange={e => this.onChange(e)} ref={this.state.inputElement}/>
                    {this.state.errorMessage}
                </label>
                <input type={'submit'} value={'Send'}/>

            </form>
        );
    }


     onChange = async (event:  React.ChangeEvent<HTMLInputElement>) => {

        const letter : string = event.target.value.slice(-1)
        const inputElement : React.RefObject<HTMLInputElement> = this.state.inputElement

        //check for available length (if the first char is # or not)
        //using async await because of event loop doing first rest of event and then updating the state of count
        //so the easiest way for me for fixing this not knowing much about class components was using async await
        if (this.state.text.length === 0 && letter === '#'){
            await this.setState({count: 7})
        }
        else if (this.state.text.length === 0 && letter !== '#'){
            await this.setState({count: 6})
        }


        //check if we deleted some values
        if(this.state.text<event.target.value){

            //check for length of inserted value if okay it's doing next thing
            if(this.state.count>0){
                //check for chars what represent hex values, or if it's an initial value check if it's a "#" char
                if(this.state.regex.test(letter) || (this.state.text.length === 0 && letter === '#')){
                    this.setState({text: this.state.text + letter})
                    this.setState({count: this.state.count - 1})
                }
                else{
                    if(inputElement.current)
                        inputElement.current.value = this.state.text
                }
            }
            else //if length is >6 input is blocked by replacing into input value a stored text
                if(inputElement.current)
                    inputElement.current.value = this.state.text
        }
        else
            this.setState({count: this.state.count + 1})
            if(inputElement.current)
                this.setState({text: inputElement.current.value})
     }

    onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(sendColor(this.state.text)){
            //calculating different color forms
            const rgb : { r: number, g: number, b: number} = hexToRgb(this.state.text)
            const hsl : {h: number, s:number, l:number} = rgbToHSL(rgb.r,rgb.g,rgb.b)

            //fixing the name so every color has # at front
            const colorName: string = this.state.text.charAt(0)==='#' ? this.state.text : `#${this.state.text}`

            const newColor: {color: {colorHex: string, R:number, G: number, B:number, H: number, S:number, L:number}} = {
                color: {
                    colorHex: colorName,
                    R: rgb.r,
                    G: rgb.g,
                    B: rgb.b,
                    H: hsl.h,
                    S: hsl.s,
                    L: hsl.l
                }
            }
            //send new color into local storage and clears input
            localStorage.setItem(colorName, JSON.stringify(newColor))
            if(this.state.inputElement.current)
                this.state.inputElement.current.value = ''
        }
        else{
            console.log('bad')
        }
    }
}
export default InsertColor