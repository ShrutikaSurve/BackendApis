const userModel = require("../Models/userModel")
const createUserController = async(req, res) => {
    try {
        const {name , lastName , mobile, email,password} = req.body;

        //Validation
        if (!name || !lastName || !mobile || !password || !password) {
            return res.status(400).send({
                message : "This are required field"
            })
        }

        // check existing user
        const existingUser = await userModel.findOne({email})
        if(existingUser) {
            return res.status(400).send({
                success: false,
                message: "User is already exists"
            })
        }
 
        const createUser = await userModel.create({
            name,lastName,mobile,email,password
        }) 
        res.status(200).send({
            success: true,
            message : "User create successfully",
            flag : "Y",
            createUser,
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error for creating user",
            flag : "N",
        })
    }
}

module.exports = createUserController;