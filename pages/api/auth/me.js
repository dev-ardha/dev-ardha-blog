import dbConnect from '../../../services/dbConnect'
import User from '../../../models/User'
import jwt from 'jsonwebtoken'

dbConnect();

export default async (req, res)=>{

    const {method} = req;

    switch(method){
        case 'GET':
            try {
                var token = req.headers['x-access-token'];
                if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

                jwt.verify(token, process.env.SECRET, function(err, decoded) {
                    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
                    
                    User.findById(decoded.id,
                        { password: 0 },
                        function (err, user) {
                        if (err) return res.status(500).send("There was a problem finding the user.");
                        if (!user) return res.status(404).send("No user found.");
                        
                        res.status(200).send(user);
                    });
                });

            } catch (error) {
                
            }
            break;
        default:
            res.status(400).json({success: false});
    }

}