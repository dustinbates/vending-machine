import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawMoney(){
    let money = appState.money
    let template = `<div> ${money} </div>`
    setHTML('money', template)
}

export class MoneyController{
    constructor() {
        appState.on('money', _drawMoney)
    }


    increaseMoney(){
        snacksService.increaseMoney()
    }
}