const products1 = ["bmw","mercedes","audi"];

// productRouter.get("/", async (req, res) => {
//     res.status(200).json(products1);
// });

const getProduct = (req, res) => {
    res.status(200).json(products1);
}

const addProduct = (req, res) => {
    const addedProduct = req.body;
    products1.push(addedProduct);
    res.status(200).json(products1);
};

export { addProduct, getProduct }


