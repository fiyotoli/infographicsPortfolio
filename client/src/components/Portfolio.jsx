import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { AdminContext } from '../context/AdminContext';
import { Link } from 'react-router-dom';

function Portfolio() {
  const { products, loading, fetchProducts } = useContext(AdminContext);  // Access context values

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();  // Fetch products when the component mounts
  }, [fetchProducts]);

  useEffect(() => {
    // Filter only "infographic" products
    setFilteredProducts(products.filter(product => product.category === 'infographic'));
  }, [products]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return <div>Loading...</div>;  // Display loading message while fetching
  }

  return (
    <div className="container  pt-2" id="portfolio">
        

      {/* Product List */}
      <div className="row">
        {filteredProducts.length === 0 ? (
          <p>No infographic products available</p>  // Display message if no products found
        ) : (
          filteredProducts.map((product, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: 'auto', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h6 className="card-title text-success">{product.name}</h6>
                  <span className="card-text text-muted">
                    {product.date} 
                  </span>
                 
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Portfolio;
