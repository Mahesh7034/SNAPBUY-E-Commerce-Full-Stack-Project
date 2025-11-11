package com.telusko.SpringEcom;

import com.telusko.SpringEcom.controller.OrderController;
import com.telusko.SpringEcom.model.dto.OrderRequest;
import com.telusko.SpringEcom.model.dto.OrderResponse;
import com.telusko.SpringEcom.model.dto.OrderItemRequest;
import com.telusko.SpringEcom.model.dto.OrderItemResponse;
import com.telusko.SpringEcom.service.OrderService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class OrderControllerTest {

    @Mock
    private OrderService orderService;

    @InjectMocks
    private OrderController orderController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testPlaceOrder() {
        // Prepare test OrderRequest with productId and quantity
        OrderItemRequest itemRequest = new OrderItemRequest(101, 2);
        OrderRequest orderRequest = new OrderRequest("John Doe", "john@example.com", List.of(itemRequest));

        // Prepare expected OrderResponse with productName, quantity, and BigDecimal subTotal
        OrderItemResponse itemResponse = new OrderItemResponse("Product A", 2, new BigDecimal("199.99"));
        OrderResponse expectedResponse = new OrderResponse(
                "order123",
                "John Doe",
                "john@example.com",
                "CONFIRMED",
                LocalDate.now(),
                List.of(itemResponse)
        );

        // Mock service behavior
        when(orderService.placeOrder(orderRequest)).thenReturn(expectedResponse);

        // Call controller method
        ResponseEntity<OrderResponse> response = orderController.placeOrder(orderRequest);

        // Verify results
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedResponse, response.getBody());
    }

    @Test
    void testGetAllOrders() {
        // Prepare mock data with correct types
        OrderItemResponse itemResponse1 = new OrderItemResponse("Product A", 1, new BigDecimal("99.99"));
        OrderItemResponse itemResponse2 = new OrderItemResponse("Product B", 3, new BigDecimal("299.97"));

        OrderResponse order1 = new OrderResponse("order1", "Alice", "alice@example.com", "SHIPPED", LocalDate.now().minusDays(1), List.of(itemResponse1));
        OrderResponse order2 = new OrderResponse("order2", "Bob", "bob@example.com", "DELIVERED", LocalDate.now().minusDays(3), List.of(itemResponse2));

        List<OrderResponse> expectedList = List.of(order1, order2);

        // Mock service behavior
        when(orderService.getAllOrderResponses()).thenReturn(expectedList);

        // Call controller method
        ResponseEntity<List<OrderResponse>> response = orderController.getAllOrders();

        // Verify results
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expectedList, response.getBody());
    }
}
