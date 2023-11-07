const logOriginalUrl = (req, res, next) => {
    console.log("Original URL: ", req.originalUrl)
    next()
}

module.exports = logOriginalUrl
