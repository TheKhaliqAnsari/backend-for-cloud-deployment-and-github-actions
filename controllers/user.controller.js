

const userInformation = async (req, res) => {
    try {
        res.status(200).json({
            message: "Hey there i am khaliq ansari"
        })
    } catch (err) {
        console.log('err: ', err)
    }
}

const sayHello = async (req, res) => {
    try {
        res.status(200).json({
            message: "Hello new user :P"
        })
    } catch (err) {
        console.log('err: ', err)
    }
}

module.exports = { userInformation, sayHello }