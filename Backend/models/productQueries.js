const selectAllProduct = "select * from products"
const selectAOneProduct = "select * from products where id = ?"
const insertProduct = "INSERT INTO products (name, description, price, stock,category_id) VALUES (?, ?, ?, ?, ?)"
const updateProduct = "update products set name = ?, description = ?, price = ? ,stock = ? where id = ?";
const deleteProduct = "delete from products where id = ?"

module.exports = {selectAllProduct, selectAOneProduct,insertProduct,updateProduct,deleteProduct}