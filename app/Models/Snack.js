

export class Snack {
    constructor(data){
        this.name = data.name
        this.price = data.price
        this.imgUrl = data.imgUrl
    }

    get SnacksTemplate(){
    return `
    <div class="col-3">
        <div class="card text-center">
            <img class="card-img-top img-fluid" src="${this.imgUrl}" alt="Title">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p>$ ${this.price}</p>
                <button class="btn btn-primary" onclick="app.snacksController.dispenseSnack('${this.price}')">Purchase: $${this.price}</button>
            </div>
        </div>
    </div>
    `
    }


}