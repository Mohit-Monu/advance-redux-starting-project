import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const DUMMY_PRODUCTS=[
    {
      id:"p1",
      price:6,
      title:" Book",
      description:"HELLO THIS IS THE FIRST BOOK"
    },
    {
      id:"p2",
      price:6,
      title:"MY ",
      description:"HELLO THIS IS THE FIRST BOOK"
    },
    {
      id:"p3",
      price:6,
      title:"MY Book",
      description:"HELLO THIS IS THE FIRST BOOK"
    }
  ]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((item)=>(
          <ProductItem key={item.id} title={item.title} price={item.price} description={item.description} id={item.id}/>
        ))}
      </ul>
    </section>
  );
};

export default Products;
