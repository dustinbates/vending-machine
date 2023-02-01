import { appState } from "../AppState.js";


class SnacksService{
    increaseMoney(){
        appState.money += .25
        console.log(appState.money)
    }

    dispenseSnack(price){
        let foundCost = appState.snacks.find(i => i.price == price)
        console.log('Decreasing money by', foundCost);
        // @ts-ignore
        appState.money -= foundCost.price
    }
}

export const snacksService = new SnacksService()