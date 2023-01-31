import { appState } from "../AppState.js";


class SnacksService{
    increaseMoney(){
        appState.money += .25
        console.log(appState.money)
    }
}

export const snacksService = new SnacksService()