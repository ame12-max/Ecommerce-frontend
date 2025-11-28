 const userRegister = "insert into users (name,email,password,role) values (?,?,?,?)"
 const selectEmail = "select email from users where email = ?"
 const userLogin = "select * from users where email = ? ";
 const selectAllUsers = "select * from users";
 const selectOneUser = "select * from users where id = ? "
 const updateOneUser = "update users set name = ?, email = ? where id = ? ";
 const deleteUser = "delete from users where id = ?"
 module.exports = {userRegister , selectEmail,userLogin,selectAllUsers,selectOneUser,updateOneUser,deleteUser};