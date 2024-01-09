import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
}

interface TableProps {
  data: Product[];
}

const MyComponent: React.FC<TableProps> = ({ data: initialData }) => {
  const [data, setData] = useState<Product[]>(initialData);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const jsonData: Product[] = await response.json();
        setData(jsonData);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);

      }
    };

    fetchData();
  }, []); 
  if (loading===true) {
    return (<React.Fragment> <div className="loader-container" id="loader">
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  </div></React.Fragment>
  )

  }

  return (
    <React.Fragment>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
      />

      <div className="container" id="myContainer">
     
    
        <h1>TABLE</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody id="table-content">
            {data.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default MyComponent;
