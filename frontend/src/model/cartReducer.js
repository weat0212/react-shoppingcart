function cartReducer(cakes, action) {

    console.log(cakes, action);

    const {type, quantity, index} = action;

    switch (type) {
        case "setQuantity":
            return cakes.map(cake => {
                return {...cake, quantity};
            });
        case "increase":
            return cakes.map((cake, i) => {
                if (i === index) {
                    cake.quantity += quantity;
                    return cake;
                } else {
                    return cake;
                }
            });
        case "decrease":
            return cakes.map((cake, i) => {
                if (i === index) {
                    cake.quantity -= quantity;
                    if (cake.quantity < 0) cake.quantity = 0;
                    return cake;
                } else {
                    return cake;
                }
            });
        case "change":
            return cakes.map((cake, i) => {
                if (i === index) {
                    cake.quantity = Number(quantity);
                    return cake;
                } else {
                    return cake;
                }
            });
        default:
            throw new Error(`Unknown action: ${type}`)
    }
}

export default cartReducer;