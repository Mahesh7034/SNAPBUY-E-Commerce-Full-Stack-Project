import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updateProduct, setUpdateProduct] = useState({
    id: null,
    name: "",
    description: "",
    brand: "",
    price: "",
    category: "",
    releaseDate: "",
    productAvailable: false,
    stockQuantity: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:9089/api/product/${id}`);
        const productData = response.data;
        setProduct(productData);

        // Format date from backend (dd-MM-yyyy) to input format (yyyy-MM-dd)
        let formattedDate = "";
        if (productData.releaseDate) {
          try {
            console.log("Original date from backend:", productData.releaseDate);
            
            // Backend sends dd-MM-yyyy format (e.g., "11-05-2025")
            if (typeof productData.releaseDate === 'string' && productData.releaseDate.includes('-')) {
              const parts = productData.releaseDate.split('-');
              if (parts.length === 3) {
                const [day, month, year] = parts;
                // Convert to yyyy-MM-dd for input field
                formattedDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
              }
            }
            // Fallback: try to parse as Date object
            else {
              const dateObj = new Date(productData.releaseDate);
              if (!isNaN(dateObj.getTime())) {
                const year = dateObj.getFullYear();
                const month = String(dateObj.getMonth() + 1).padStart(2, '0');
                const day = String(dateObj.getDate()).padStart(2, '0');
                formattedDate = `${year}-${month}-${day}`;
              }
            }
            
            console.log("Formatted date for input:", formattedDate);
          } catch (dateError) {
            console.error("Error formatting date:", dateError);
          }
        }

        // Set all product data including ID
        setUpdateProduct({
          id: productData.id || null,
          name: productData.name || "",
          description: productData.description || "",
          brand: productData.brand || "",
          price: productData.price || "",
          category: productData.category || "",
          releaseDate: formattedDate,
          productAvailable: productData.productAvailable || false,
          stockQuantity: productData.stockQuantity || "",
        });

        // Fetch image
        if (productData.imageName) {
          try {
            const responseImage = await axios.get(
              `http://localhost:9089/api/product/${id}/imageFile`,
              { responseType: "blob" }
            );
            const imageFile = new File(
              [responseImage.data], 
              productData.imageName, 
              { type: responseImage.data.type }
            );
            setImage(imageFile);
            setImagePreview(URL.createObjectURL(imageFile));
          } catch (imgError) {
            console.error("Error fetching image:", imgError);
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        alert("Failed to fetch product details. Please check the console.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }

    // Cleanup function
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!updateProduct.name || !updateProduct.price) {
      alert("Please fill in name and price");
      return;
    }

    try {
      // Prepare the product data with proper date format
      const productToSubmit = { ...updateProduct };
      
      // Convert date from yyyy-MM-dd (input format) to dd-MM-yyyy (backend format)
      if (productToSubmit.releaseDate) {
        const [year, month, day] = productToSubmit.releaseDate.split('-');
        productToSubmit.releaseDate = `${day}-${month}-${year}`;
        console.log("Date converted for backend:", productToSubmit.releaseDate);
      }

      console.log("Submitting product:", productToSubmit);

      const formData = new FormData();
      
      // Append image if present
      if (image) {
        formData.append("imageFile", image);
      }
      
      // Append product data as JSON blob
      const productBlob = new Blob([JSON.stringify(productToSubmit)], { type: "application/json" });
      formData.append("product", productBlob);
      
      // Debug: Log what's being sent
      console.log("Product JSON being sent:", JSON.stringify(productToSubmit, null, 2));

      const response = await axios.put(
        `http://localhost:9089/api/product/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Product updated successfully:", response.data);
      alert("Product updated successfully!");
    } catch (error) {
      console.error("Error during product update:", error);
      console.error("Error response:", error.response?.data);
      alert(`Failed to update product: ${error.response?.data?.message || error.message}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }
      
      // Revoke old preview URL
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
      
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  if (loading) {
    return (
      <div className="update-product-container">
        <div className="center-container" style={{ marginTop: "7rem" }}>
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="update-product-container">
      <div className="center-container" style={{ marginTop: "7rem" }}>
        <h1>Update Product</h1>
        <form className="row g-3 pt-1" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">
              <h6>Name</h6>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={product.name || "Enter product name"}
              value={updateProduct.name}
              onChange={handleChange}
              name="name"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              <h6>Brand</h6>
            </label>
            <input
              type="text"
              name="brand"
              className="form-control"
              placeholder={product.brand || "Enter brand"}
              value={updateProduct.brand}
              onChange={handleChange}
              id="brand"
            />
          </div>
          <div className="col-12">
            <label className="form-label">
              <h6>Description</h6>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder={product.description || "Enter description"}
              name="description"
              onChange={handleChange}
              value={updateProduct.description}
              id="description"
            />
          </div>
          <div className="col-5">
            <label className="form-label">
              <h6>Price</h6>
            </label>
            <input
              type="number"
              className="form-control"
              onChange={handleChange}
              value={updateProduct.price}
              placeholder={product.price || "0.00"}
              name="price"
              id="price"
              step="0.01"
              min="0"
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">
              <h6>Category</h6>
            </label>
            <select
              className="form-select"
              value={updateProduct.category}
              onChange={handleChange}
              name="category"
              id="category"
            >
              <option value="">Select category</option>
              <option value="laptop">Laptop</option>
              <option value="headphone">Headphone</option>
              <option value="mobile">Mobile</option>
              <option value="electronics">Electronics</option>
              <option value="toys">Toys</option>
              <option value="fashion">Fashion</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label">
              <h6>Release Date</h6>
            </label>
            <input
              type="date"
              className="form-control"
              value={updateProduct.releaseDate}
              name="releaseDate"
              onChange={handleChange}
              id="releaseDate"
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">
              <h6>Stock Quantity</h6>
            </label>
            <input
              type="number"
              className="form-control"
              onChange={handleChange}
              placeholder={product.stockQuantity || "0"}
              value={updateProduct.stockQuantity}
              name="stockQuantity"
              id="stockQuantity"
              min="0"
            />
          </div>

          <div className="col-md-8">
            <label className="form-label">
              <h6>Image</h6>
            </label>
            {imagePreview && (
              <img
                src={imagePreview}
                alt={product.imageName || "Product"}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  padding: "5px",
                  margin: "0",
                  display: "block",
                }}
              />
            )}
            <input
              className="form-control"
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              name="imageUrl"
              id="imageUrl"
            />
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="productAvailable"
                id="gridCheck"
                checked={updateProduct.productAvailable}
                onChange={(e) =>
                  setUpdateProduct((prev) => ({ 
                    ...prev, 
                    productAvailable: e.target.checked 
                  }))
                }
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Product Available
              </label>
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;