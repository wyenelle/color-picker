import { ref } from "vue"

export function useColors(){
    const colors = ['green','red','blue','purple']
    const message = ref('Pick a color...')

    function matchColor(value){
        const randNumber = Math.floor(Math.random() * 3) + 1
        if(colors[randNumber] === value){
            message.value = `you win: answer is ${colors[randNumber]}` 
            return
        }
        message.value = `you lose : answer is ${colors[randNumber]}`
    }
    return {colors,message,matchColor}
}