const randomNumGenerator = (length) => { 
    let pin = '';
    for (let i = 0; i < length; i++) { 
       pin = Math.floor(Math.random() *10) + pin 
    }
    return pin
}
module.exports = randomNumGenerator