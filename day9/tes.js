var cart = ['Jeruk','Kiwi']
var qtyCart = [1 , 3]
var a = 'Kiwi'
var b = 4
var ada = false
var index = 0
for(var i = 0 ; i < cart.length ; i++){
    if(cart[i] == a){
       ada = true
       index = i
    }
}
if(ada == true){
    qtyCart[index] += b
}else{
    cart.push(a)
    qtyCart.push(b)
}
console.log(cart)
console.log(qtyCart);
