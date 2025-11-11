package com.telusko.SpringEcom;

import com.telusko.SpringEcom.controller.ProductController;
import com.telusko.SpringEcom.model.Product;
import com.telusko.SpringEcom.service.ProductService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockMultipartFile;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class ProductControllerTest {

    @Mock
    private ProductService productService;

    @InjectMocks
    private ProductController productController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testGetProducts_ReturnsProductList() {
        Product p1 = new Product();
        Product p2 = new Product();
        List<Product> products = Arrays.asList(p1, p2);

        when(productService.getAllProducts()).thenReturn(products);

        ResponseEntity<List<Product>> response = productController.getProducts();

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(products, response.getBody());
    }

    @Test
    void testGetProductById_Found() {
        Product product = new Product();
        product.setId(1);

        when(productService.getProductById(1)).thenReturn(product);

        ResponseEntity<Product> response = productController.getProductById(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(product, response.getBody());
    }

    @Test
    void testGetProductById_NotFound() {
        Product product = new Product(); // id defaults to 0

        when(productService.getProductById(99)).thenReturn(product);

        ResponseEntity<Product> response = productController.getProductById(99);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void testSearchProducts_ReturnsMatchingProducts() {
        List<Product> results = Arrays.asList(new Product(), new Product());

        when(productService.searchProducts("phone")).thenReturn(results);

        ResponseEntity<List<Product>> response = productController.searchProducts("phone");

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(results, response.getBody());
    }

    @Test
    void testDeleteProduct_Found() {
        Product product = new Product();
        product.setId(1);

        when(productService.getProductById(1)).thenReturn(product);

        ResponseEntity<?> response = productController.deleteProduct(1);

        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Deleted", response.getBody());
        verify(productService).deleteProduct(1);
    }

    @Test
    void testDeleteProduct_NotFound() {
        when(productService.getProductById(99)).thenReturn(null);

        ResponseEntity<?> response = productController.deleteProduct(99);

        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void testAddProduct_Success() throws IOException {
        Product product = new Product();
        MockMultipartFile imageFile = new MockMultipartFile("image", "test.jpg", "image/jpeg", "dummy".getBytes());

        when(productService.addorUpdateProduct(product, imageFile)).thenReturn(product);

        ResponseEntity<?> response = productController.addProduct(product, imageFile);

        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals(product, response.getBody());
    }

    @Test
    void testAddProduct_IOException() throws IOException {
        Product product = new Product();
        MockMultipartFile imageFile = new MockMultipartFile("image", "test.jpg", "image/jpeg", "dummy".getBytes());

        when(productService.addorUpdateProduct(product, imageFile)).thenThrow(new IOException("Failed"));

        ResponseEntity<?> response = productController.addProduct(product, imageFile);

        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals("Failed", response.getBody());
    }
}