import SVermelho from "./img/salto.jpg";
import SVerde from "./img/sapatoVerde.webp";
import SBranco from "./img/sapatoBranco.webp";

import { useEffect, useState } from "react";
import './products.css'
function Products() {
    const [loading, setLoading] = useState(true); // esse é o estado de pendente_
        const [products, setProducts] = useState([]); // esse é o estado de resolvido_
        const [error, setError] = useState(null); // esse é o estado de falha_
        useEffect(() => {
            const fetchProducts = async () => {
                try {
                const temErro = Math.random() < 0.5;
                    if (temErro) {
                        throw new Error ('Falha ao buscar os produtos');
                    }
                    const productsPromisse = new Promise((resolve) => {
                        setTimeout(() => {
                            resolve([
                                { id: '1', name: 'Scarpin ', foto:{SVermelho}, description: 'Scarpin Marrom Salto Bloco Couro Básico', stock:10},
                                { id: '2', name: 'Scarpin Verde',foto:{SVerde}, description: 'Scarpin Verde Salto Bloco Couro Básico', stock: 5},
                                { id: '3', name: 'Scarpin Metalizado',foto:{SBranco}, description: 'Scarpin Metalizado Prata Salto Bloco Couro Básico', stock: 10},
                            ]);
                        }, 1000);
                    });
                    const productData = await productsPromisse;
                    setProducts(productData);
                    setLoading(false);
                } catch (error) {
                    setError('Houve um erro na busca dos dados dos produtos.');
                    setLoading(false);
                }
            }
            fetchProducts();
        }, []);

    return (
        <>
        {console.log(loading)}
    {loading&&<p>Carregando, aguarde um momento...</p>}
    {error&&<p>{error}</p>}
    {!loading&&!error&&(
        <div className="con">
                {products.map(product=>(
                <div className="data">
                <div  key={product.id}>              
                    <p>{product.name}</p>
                    <img src={product.foto} alt="sapato" />
                    <p>{product.description}</p>
                    <button className="btnP">Veja detalhes</button>
                    <p> {product.stock} unidades</p>
                </div>
                </div>
                ))}
        </div>
    )}
    </>
    )

}
export default Products;