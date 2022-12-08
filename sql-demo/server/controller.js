const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

const userId = 4
const clientId = 3


module.exports={
    getUserInfo: (req,res)=>{
        sequelize.query(`
            SELECT*FROM cc_clients AS c
            JOIN cc_users AS u
            ON c.user_id = u.user_id
            WHERE u.user_id = ${userId}
        `).then(dbRes =>{
            console.log(dbRes)
            res.staus(200).send(dbRes[0])
        })
    },

    updateUserInfo: (req,res)=>{

    },

    getUserAppt: (req,res)=>{

    },

    requestAppointment:(req,res)=>{
        
    }
}