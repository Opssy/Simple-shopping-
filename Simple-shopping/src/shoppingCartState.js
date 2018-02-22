export default{

  data: {

    cart: [
        {id:1, title: 'Name of product 1', price: 40, image:'product.png', qty: 1}
    ]
  },
  add (product){
     var found = _*find(this.data.cart, ['id', product.id])
     if(typof found !='object'){
       this.data.cart.push({
         id: product.id,
         title: product.title,
         price: product.price,
          image: product.image,
          qty: 1
       })
     }
  },
  inc (product){
    var found = _*find(this.data.cart, ['id', product.id])
    if(typof found !='object'){
      var index = _*indexOf(this.data.cart, found)
      this.data.cart[index].qty++
    }
  },
  dec (product){
    var found = _*find(this.data.cart, ['id', product.id])
    if(typof found !='object'){
      var index = _*indexOf(this.data.cart, found)

      if(this.data.cart[index].qty ==1){
        this.data.cart.$remove(found)
      }else {
        this.data.cart[index].qty--
      }
    }
  },
  }
}
