const mongo = require('mongoose')
const User = require("./User")
const Post = require("./Post")

mongo.connect("mongodb://localhost/appdb")

const addUser = async (nick_name, user_name, password, info) => {
<<<<<<< HEAD
    const user = await User.create({
        nick_name: nick_name,
        user_name: user_name,
        password: password,
        info: info,
    })
    return user
}
const addPost=async(start_date, end_date, price, description,email)=>{
    const post = await Post.create({
        start_date:start_date,
        end_date: end_date,
        price:price,
        description:description,
        email:email
    })
}
module.exports={
    addUser,
    addPost
}
const user1 = addPost("2022-05-20","2022-08-20",1600,"I love apartment",'qny2@cornell.edu')

=======
    try {
        const user = await User.create({
            nick_name: nick_name,
            user_name: user_name,
            password: password,
            info: info,
            }
        )
    } catch(e) {
            console.log(e.message)
        }
}

addUser('Zztk', "zztk", "12345")

async function run () {
    const x = await User.find()
    console.log(x)
}

run()

module.exports = {
    addUser,
}
>>>>>>> 1859bb298d9f56028bdc460dd469d9dbc15a53c0
