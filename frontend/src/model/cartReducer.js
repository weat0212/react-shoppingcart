function cartReducer(cakes, action) {

    console.log(cakes, action);

    switch (action.type) {
        case "setQuantity":
            return cakes.map(cake => {
                return {...cake, quantity: action.quantity};
            });
        case "increase":
            return cakes.map((cake, i) => {
                if (i === action.index) {
                    cake.quantity += action.quantity;
                    return cake;
                } else {
                    return cake;
                }
            });
        case "decrease":
            return cakes.map((cake, i) => {
                if (i === action.index) {
                    cake.quantity -= action.quantity;
                    if (cake.quantity < 0) cake.quantity = 0;
                    return cake;
                } else {
                    return cake;
                }
            });
        case "change":
            return cakes.map((cake, i) => {
                if (i === action.index) {
                    cake.quantity = Number(action.quantity);
                    return cake;
                } else {
                    return cake;
                }
            });
    }
}

export default cartReducer;