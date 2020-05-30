const convert = (fxrate, quantity) => fxrate * quantity

const toMoney = (value, decimals) => {
    if(decimals)
        return parseFloat(value).toFixed(decimals)
    return parseFloat(value).toFixed(2) 
}
module.exports = {
    convert,
    toMoney
}