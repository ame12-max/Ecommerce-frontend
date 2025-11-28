const insertOrder = "INSERT INTO orders (user_id, total_price, status) values (?,?,'Pending')"
const selectOrder = "select * from orders where user_id	= ?";
const selectOrderById = "select * from orders where id	= ?";
const updateOrder = "update orders set status = ? where id	= ?";

module.exports = {selectOrder,insertOrder,selectOrderById,updateOrder}