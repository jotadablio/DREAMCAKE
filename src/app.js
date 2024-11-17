import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [produtos, setProdutos] = useState([]);

    // Buscar produtos da API
    useEffect(() => {
        axios.get('http://localhost:5000/produtos')
            .then(response => setProdutos(response.data))
            .catch(error => console.error('Erro ao buscar produtos:', error));
    }, []);

    return (
        <div>
            <h1>Loja de Cupcakes</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        {produto.nome} - R$ {produto.preco.toFixed(2)} (Estoque: {produto.estoque})
                    </li>
                ))}
            </ul>
        </div>
    );  
}

export default App;
