import { useEffect, useState } from "react";
import { db } from "./firebase";

function App() {

  const collection = 'products';

  const [ products, setProducts ] = useState([]);

  const getExample = () => {
    db.collection(collection).onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setProducts(docs);
    });
  };
  const postExample = async () => {
    await db.collection(collection).doc().set({
      name: "caja",
      quantity: 10
    })
  };
  const updateExampleById = async(id) => {
    await db.collection(collection).doc(id).update({
      name: "caja modificada",
      quantity: 10
    })
  };
  const deleteExampleById = async (id) => {
    await db.collection(collection).doc(id).delete()
  };

  useEffect(() => {
    getExample();
  }, [])

  return (
    <>
    <button onClick={postExample}>Crear Producto</button>
    <div>
      {
        products.length > 0 &&
        products.map((product)=>{
          return (
            <span key={product.id} style={{display: 'flex'}}>
              <div>{product.id} - {product.name}</div>
              <button onClick={() => updateExampleById(product.id)}>Actualizar</button>
              <button onClick={() => deleteExampleById(product.id)}>Borrar</button>
            </span>
          )
        })
      }
    </div>
    </>
  );
}

export default App;
