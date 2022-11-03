const book = require("../models");

const add = (req, res) => {
    const data = req.params;
    const bookData = new book({
        bookName: data.name,
        
    })
}

const isApiWorking = (req, res) => {
    res.json({success: true});
}



module.exports = {isApiWorking};