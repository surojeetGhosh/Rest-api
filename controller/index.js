const isApiWorking = (req, res) => {
    res.json({success: true});
}

module.exports = {isApiWorking};