import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function _drawMoney(){
    let money = appState.money
    let template = `<div> $ ${money.toFixed(2)} </div>`
    setHTML('money', template)
}

function _drawSnacks(){
    let snacks = appState.snacks
    let template = ``
    snacks.forEach(snack => template += snack.SnacksTemplate)
    setHTML('snacks', template)
}

export class SnacksController{
    constructor() {
        _drawSnacks()
        appState.on('money', _drawMoney)
    }

    increaseMoney(){
        snacksService.increaseMoney()
    }

    dispenseSnack(price){
        // console.log('You clicked dispense, and the price is ' + price);
        if(appState.money < price){
            Pop.toast('You do not have enough money', 'warning', 'center', 1500, true)
        } else{
            snacksService.dispenseSnack(price)
        }
    }
}