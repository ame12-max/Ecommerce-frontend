

const checkRole = (allowedRolles) =>{

    return (req,res,next) => {
        if ( !req.user ) return res.status(403).json({message : "un Authorized user"})
    
            const userRole = req.user.role;
            const hasRole = allowedRolles.includes(userRole)
            if(!hasRole) return res.status(403).json({message : 'your role is not sufficient to access this data'})
                next();
    }


}

module.exports = checkRole;