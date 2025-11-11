# 🛒 SNAPBUY - E-Commerce Full Stack Project

<div align="center">


<img width="960" height="476" alt="Screenshot 2025-11-11 224827" src="https://github.com/user-attachments/assets/94f64d51-f1cc-4afc-b1b5-67249507cc48" />

### A Modern, Feature-Rich E-Commerce Platform

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Java](https://img.shields.io/badge/Java-17-orange.svg)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-green.svg)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.x-blue.svg)](https://www.mysql.com/)
[![Test Coverage](https://img.shields.io/badge/coverage-85%25-brightgreen.svg)](/)

[Live Demo](#) • [Documentation](#) • [Report Bug](https://github.com/Mahesh7034/SNAPBUY-E-Commerce-Full-Stack-Project/issues) • [Request Feature](https://github.com/Mahesh7034/SNAPBUY-E-Commerce-Full-Stack-Project/issues)

</div>

---

## 📋 Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
  - [Key Features](#key-features)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
- [Usage Guide](#usage-guide)
  - [Running the Application](#running-the-application)
  - [User Workflows](#user-workflows)
- [API Documentation](#api-documentation)
- [Database Schema](#database-schema)
- [Frontend Architecture](#frontend-architecture)
- [Backend Architecture](#backend-architecture)
- [Testing](#testing)
- [Deployment](#deployment)
- [Performance Optimization](#performance-optimization)
- [Security Features](#security-features)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Changelog](#changelog)
- [License](#license)
- [Contact & Support](#contact--support)
- [Acknowledgments](#acknowledgments)

---

## 📖 About The Project

SNAPBUY is a comprehensive, production-ready e-commerce platform designed to provide businesses with a complete online retail solution. Built using modern web technologies, it offers a seamless shopping experience for customers while providing powerful management tools for administrators.

### 🎯 Project Goals

- **Scalability**: Built to handle growing business needs
- **Performance**: Optimized for fast load times and smooth user experience
- **Maintainability**: Clean code architecture with comprehensive documentation
- **Reliability**: High test coverage ensuring stable operations
- **User Experience**: Intuitive interface designed with customers in mind

### 💡 Why SNAPBUY?

Unlike traditional e-commerce platforms, SNAPBUY focuses on:
- **Simplicity**: Easy to set up and deploy
- **Flexibility**: Highly customizable to fit various business models
- **Modern Stack**: Built with latest technologies and best practices
- **Open Source**: Free to use, modify, and distribute

### 🎬 Demo Video

[Watch the demo video here](#) *(Add your YouTube/Vimeo link)*

---

## 🏗️ Built With

### Frontend Technologies

<table>
<tr>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
<br>React.js
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="48" height="48" alt="JavaScript" />
<br>JavaScript
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" width="48" height="48" alt="Bootstrap" />
<br>Bootstrap
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="48" height="48" alt="HTML5" />
<br>HTML5
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="48" height="48" alt="CSS3" />
<br>CSS3
</td>
</tr>
</table>

**Key Frontend Libraries:**
- **React Router DOM** (v6.x) - Client-side routing and navigation
- **Axios** (v1.x) - Promise-based HTTP client for API calls
- **React Hooks** - State and lifecycle management
- **Bootstrap** (v5.x) - Responsive UI components
- **React Icons** - Comprehensive icon library
- **Formik** - Form handling and validation
- **Yup** - Schema validation

### Backend Technologies

<table>
<tr>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" width="48" height="48" alt="Java" />
<br>Java 17
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" width="48" height="48" alt="Spring" />
<br>Spring Boot
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="48" height="48" alt="MySQL" />
<br>MySQL
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" width="48" height="48" alt="Maven" />
<br>Maven
</td>
</tr>
</table>

**Key Backend Dependencies:**
- **Spring Boot** (v3.x) - Application framework
- **Spring MVC** - Web framework for REST APIs
- **Spring Data JPA** - Database access layer
- **Hibernate** - ORM framework
- **MySQL Connector** - Database driver
- **Lombok** - Reduce boilerplate code
- **Jackson** - JSON serialization/deserialization
- **Spring Validation** - Input validation

### Development & Testing Tools

- **Git** - Version control
- **Maven** - Build automation
- **npm** - Package management
- **JUnit 5** - Unit testing
- **Mockito** - Mocking framework
- **Jest** - JavaScript testing
- **React Testing Library** - Component testing
- **Postman** - API testing
- **MySQL Workbench** - Database management

---

## ✨ Key Features

### 🛍️ Product Management

#### For Customers
- **Browse Products**: View all available products with images and details
- **Advanced Search**: Multi-field search across product name, brand, category, and description
- **Filter & Sort**: Filter by category, brand, price range; sort by price, name, date
- **Product Details**: Comprehensive product information including:
  - High-quality product images
  - Detailed descriptions
  - Price and availability
  - Brand and category information
  - Stock status
  - Product specifications

#### For Administrators
- **CRUD Operations**: Complete product lifecycle management
  - **Create**: Add new products with all details
  - **Read**: View product listings and details
  - **Update**: Modify product information
  - **Delete**: Remove discontinued products
- **Image Management**:
  - Upload multiple images per product
  - Automatic image optimization
  - Image preview before upload
  - Support for JPEG, PNG formats
  - Binary storage in database (BLOB)
- **Bulk Operations**: Import/export products via CSV
- **Category Management**: Organize products into hierarchical categories
- **Inventory Tracking**: Real-time stock level monitoring

### 📦 Order Management

#### Order Placement
- **Easy Checkout**: Streamlined order placement process
- **Multiple Items**: Add multiple products to a single order
- **Order Summary**: Review order details before confirmation
- **Customer Information**: Capture shipping and billing details
  - Name, email, phone number
  - Shipping address
  - Billing address
  - Special instructions

#### Order Tracking
- **Order History**: View all past and current orders
- **Order Status**: Real-time order status updates
  - Pending
  - Processing
  - Shipped
  - Delivered
  - Cancelled
- **Order Details**: Complete breakdown of each order
  - Item list with quantities
  - Individual item prices
  - Subtotal calculations
  - Tax and shipping costs
  - Total amount
  - Order date and time
  - Tracking information

#### For Administrators
- **Order Management Dashboard**: Centralized order overview
- **Status Updates**: Change order status
- **Order Fulfillment**: Process and ship orders
- **Customer Communication**: Contact customers regarding orders
- **Analytics**: Order statistics and reports

### 👤 Customer Management

- **Customer Profiles**: Store customer information securely
- **Order History**: Track customer purchase history
- **Address Book**: Save multiple shipping/billing addresses
- **Contact Management**: Email and phone verification
- **Customer Analytics**: Purchase patterns and preferences

### 🖼️ Image Handling

#### Advanced Image Features
- **Multi-format Support**: JPEG, PNG, WebP
- **Size Validation**: Maximum file size limits
- **Dimension Requirements**: Recommended image dimensions
- **Automatic Compression**: Reduce file size without quality loss
- **Preview Functionality**: See images before upload
- **Binary Storage**: Secure BLOB storage in MySQL
- **Lazy Loading**: Optimize page load times
- **Responsive Images**: Adaptive sizing for different devices

### 🎨 User Interface Features

#### Design & Usability
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI/UX**: Clean, intuitive interface
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages
- **Form Validation**: Real-time input validation
- **Toast Notifications**: Success/error notifications
- **Breadcrumb Navigation**: Easy site navigation
- **Search Autocomplete**: Intelligent search suggestions
- **Pagination**: Efficient data loading
- **Sorting Options**: Multiple sorting criteria

#### Accessibility
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Compatible**: ARIA labels and roles
- **Color Contrast**: WCAG 2.1 AA compliant
- **Focus Indicators**: Clear focus states
- **Alt Text**: Image descriptions for screen readers

### ⚡ Performance Features

- **Code Splitting**: Lazy load components
- **Image Optimization**: Compressed and optimized images
- **Caching**: Browser and server-side caching
- **Database Indexing**: Optimized queries
- **Connection Pooling**: Efficient database connections
- **Minification**: Compressed CSS and JavaScript
- **CDN Ready**: Static asset delivery optimization

### 🔐 Security Features

- **Input Validation**: Server and client-side validation
- **SQL Injection Prevention**: Parameterized queries
- **XSS Protection**: Content sanitization
- **CORS Configuration**: Controlled cross-origin requests
- **File Upload Security**: Type and size validation
- **Error Handling**: Secure error messages
- **HTTPS Ready**: SSL/TLS support

---

## 🏛️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Browser    │  │    Mobile    │  │    Tablet    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────┬───────────────────────────────────┘
                          │ HTTP/HTTPS
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                    Frontend Layer (React)                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │  Components  │  │    Pages     │  │   Services   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │    Router    │  │     State    │  │     Utils    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────┬───────────────────────────────────┘
                          │ REST API (JSON)
                          ▼
┌─────────────────────────────────────────────────────────────┐
│              Backend Layer (Spring Boot)                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Controllers  │  │   Services   │  │ Repositories │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Security   │  │  Validation  │  │   Exception  │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────┬───────────────────────────────────┘
                          │ JDBC/JPA
                          ▼
┌─────────────────────────────────────────────────────────────┐
│                    Database Layer (MySQL)                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Products   │  │    Orders    │  │  Customers   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Order Items  │  │   Categories │  │    Images    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
```

### Application Flow

```
User Action → Frontend Component → API Call (Axios) → 
Backend Controller → Service Layer → Repository Layer → 
Database → Response Back Through Layers → UI Update
```

### Design Patterns Used

1. **MVC Pattern**: Model-View-Controller separation
2. **Repository Pattern**: Data access abstraction
3. **Service Layer Pattern**: Business logic encapsulation
4. **DTO Pattern**: Data transfer objects
5. **Singleton Pattern**: Spring bean management
6. **Factory Pattern**: Object creation
7. **Observer Pattern**: React component updates

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed on your system:

#### Required Software

1. **Java Development Kit (JDK) 17 or higher**
   ```bash
   # Check Java version
   java -version
   
   # Should output: java version "17.x.x" or higher
   ```
   - Download: [Oracle JDK](https://www.oracle.com/java/technologies/downloads/) or [OpenJDK](https://adoptium.net/)
   - Set `JAVA_HOME` environment variable

2. **Node.js (v16 or higher) and npm**
   ```bash
   # Check Node version
   node -v
   
   # Check npm version
   npm -v
   ```
   - Download: [Node.js Official Website](https://nodejs.org/)
   - npm comes bundled with Node.js

3. **MySQL Server (v8.0 or higher)**
   ```bash
   # Check MySQL version
   mysql --version
   ```
   - Download: [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
   - Remember your root password during installation

4. **Maven (v3.6 or higher)**
   ```bash
   # Check Maven version
   mvn -v
   ```
   - Download: [Apache Maven](https://maven.apache.org/download.cgi)
   - Add Maven to PATH

5. **Git**
   ```bash
   # Check Git version
   git --version
   ```
   - Download: [Git Official Website](https://git-scm.com/)

#### Recommended Tools

- **IDE**: IntelliJ IDEA, Eclipse, or VS Code
- **API Testing**: Postman or Insomnia
- **Database Client**: MySQL Workbench, DBeaver, or TablePlus
- **Terminal**: Git Bash (Windows), iTerm2 (Mac), or native terminal

#### System Requirements

- **Operating System**: Windows 10/11, macOS 10.15+, or Linux
- **RAM**: Minimum 8GB (16GB recommended)
- **Storage**: At least 2GB free space
- **Processor**: Dual-core processor or better

---

### Installation

#### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/Mahesh7034/SNAPBUY-E-Commerce-Full-Stack-Project.git

# Navigate to project directory
cd SNAPBUY-E-Commerce-Full-Stack-Project

# Verify the contents
ls -la
# You should see: frontend/, backend/, README.md, etc.
```

#### Step 2: Database Setup

**2.1 Start MySQL Server**

```bash
# Windows (if installed as service)
net start MySQL80

# macOS
sudo mysql.server start

# Linux
sudo systemctl start mysql
```

**2.2 Login to MySQL**

```bash
mysql -u root -p
# Enter your root password when prompted
```

**2.3 Create Database**

```sql
-- Create the database
CREATE DATABASE snapbuy_db;

-- Verify database creation
SHOW DATABASES;

-- Use the database
USE snapbuy_db;

-- Create a dedicated user (optional but recommended)
CREATE USER 'snapbuy_user'@'localhost' IDENTIFIED BY 'your_secure_password';

-- Grant privileges
GRANT ALL PRIVILEGES ON snapbuy_db.* TO 'snapbuy_user'@'localhost';

-- Apply changes
FLUSH PRIVILEGES;

-- Exit MySQL
EXIT;
```

**2.4 Verify Database**

```bash
mysql -u snapbuy_user -p snapbuy_db
# Enter password
# If successful, you're connected to the database
```

#### Step 3: Backend Setup

**3.1 Navigate to Backend Directory**

```bash
cd backend
```

**3.2 Configure Database Connection**

Open `src/main/resources/application.properties`:

```properties
# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/snapbuy_db
spring.datasource.username=snapbuy_user
spring.datasource.password=your_secure_password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA/Hibernate Configuration
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
spring.jpa.properties.hibernate.format_sql=true

# Server Configuration
server.port=8080
server.servlet.context-path=/api

# File Upload Configuration
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB

# Logging Configuration
logging.level.com.snapbuy=DEBUG
logging.level.org.hibernate.SQL=DEBUG
logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE

# Application Configuration
app.name=SNAPBUY
app.version=1.0.0
```

**3.3 Install Backend Dependencies**

```bash
# Clean and install dependencies
mvn clean install

# Skip tests if you want faster installation
mvn clean install -DskipTests
```

**3.4 Build the Project**

```bash
mvn clean package
```

#### Step 4: Frontend Setup

**4.1 Navigate to Frontend Directory**

```bash
cd ../frontend
```

**4.2 Install Dependencies**

```bash
# Install all npm packages
npm install

# If you encounter errors, try:
npm install --legacy-peer-deps
```

**4.3 Configure API Base URL**

Create a `.env` file in the `frontend` directory:

```env
# API Configuration
REACT_APP_API_BASE_URL=http://localhost:8080/api

# Environment
REACT_APP_ENV=development

# Application Configuration
REACT_APP_NAME=SNAPBUY
REACT_APP_VERSION=1.0.0
```

**4.4 Verify Installation**

```bash
# Check if all dependencies are installed
npm list --depth=0
```

---

### Environment Configuration

#### Backend Configuration Files

**application.properties** (Development)
```properties
# Development Configuration
spring.profiles.active=dev

# Hot Reload
spring.devtools.restart.enabled=true
spring.devtools.livereload.enabled=true

# Debug Mode
debug=false
```

**application-dev.properties** (Optional)
```properties
# Development specific settings
spring.jpa.hibernate.ddl-auto=create-drop
logging.level.root=INFO
```

**application-prod.properties** (Optional)
```properties
# Production specific settings
spring.jpa.hibernate.ddl-auto=validate
logging.level.root=WARN
spring.jpa.show-sql=false
```

#### Frontend Configuration

**package.json** - Verify scripts:
```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

---

## 📘 Usage Guide

### Running the Application

#### Method 1: Using Command Line

**Terminal 1 - Start Backend:**
```bash
cd backend
mvn spring-boot:run
```

Expected output:
```
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::                (v3.x.x)

...
2024-01-01 10:00:00.000  INFO 12345 --- [main] com.snapbuy.Application  : Started Application in 5.234 seconds
```

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm start
```

Expected output:
```
Compiled successfully!

You can now view snapbuy-frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.100:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

#### Method 2: Using IDE

**IntelliJ IDEA / Eclipse:**
1. Import backend as Maven project
2. Run `Application.java` main method
3. Open integrated terminal
4. Navigate to frontend folder
5. Run `npm start`

**VS Code:**
1. Open project folder
2. Open integrated terminal
3. Split terminal
4. Run backend in first terminal: `cd backend && mvn spring-boot:run`
5. Run frontend in second terminal: `cd frontend && npm start`

### User Workflows

#### Workflow 1: Admin Adding a Product

```
1. Access Admin Panel
   → Navigate to http://localhost:3000/admin

2. Click "Add Product"
   → Fill in product details:
     - Name: "Premium Wireless Headphones"
     - Brand: "AudioTech"
     - Category: "Electronics"
     - Price: $199.99
     - Description: "High-quality wireless headphones..."
     - Stock: 50

3. Upload Product Image
   → Click "Choose File"
   → Select image (max 10MB)
   → Preview image
   → Confirm upload

4. Validate Form
   → System checks all required fields
   → Validates price format
   → Validates stock quantity

5. Submit Product
   → Click "Save Product"
   → System creates product in database
   → Success notification displayed
   → Redirected to product list

6. Verify Product
   → Product appears in product list
   → Image displays correctly
   → All details are accurate
```

#### Workflow 2: Customer Browsing and Searching

```
1. Access Homepage
   → Navigate to http://localhost:3000

2. Browse Products
   → View featured products
   → See product grid with images
   → Check prices and ratings

3. Search for Product
   → Enter "headphones" in search bar
   → System searches:
     - Product names
     - Descriptions
     - Brands
     - Categories
   → Results display in real-time

4. Filter Results
   → Select category: "Electronics"
   → Choose price range: $100-$300
   → Pick brand: "AudioTech"
   → Results update automatically

5. Sort Products
   → Sort by: "Price: Low to High"
   → Products reorder accordingly

6. View Product Details
   → Click on product card
   → See full product information
   → View larger images
   → Read complete description
   → Check stock availability
```

#### Workflow 3: Placing an Order

```
1. Select Product
   → Click "Add to Cart" or "Buy Now"

2. Review Order
   → Verify product details
   → Check quantity
   → See subtotal

3. Enter Customer Information
   → Fill in personal details:
     - Full Name: "John Doe"
     - Email: "john@example.com"
     - Phone: "+1-234-567-8900"

4. Enter Shipping Address
   → Street Address: "123 Main Street"
   → City: "New York"
   → State: "NY"
   → ZIP Code: "10001"
   → Country: "USA"

5. Enter Billing Information
   → Same as shipping or different
   → Fill in billing address if different

6. Add Special Instructions (Optional)
   → "Please leave at front door"

7. Review Order Summary
   → Product list with prices
   → Subtotal: $199.99
   → Shipping: $9.99
   → Tax: $18.00
   → Total: $227.98

8. Place Order
   → Click "Place Order"
   → System validates all information
   → Creates order in database
   → Generates order number

9. Order Confirmation
   → Order Number: #ORD-2024-0001
   → Status: "Pending"
   → Estimated Delivery: 3-5 business days
   → Confirmation email sent
```

#### Workflow 4: Tracking an Order

```
1. Access Order History
   → Click "My Orders" in navigation

2. View All Orders
   → See list of all orders
   → Each showing:
     - Order number
     - Date placed
     - Total amount
     - Current status

3. Select Specific Order
   → Click on order number
   → View complete order details

4. See Order Status
   → Current status: "Shipped"
   → Status history:
     - Pending (Jan 1, 2024 10:00 AM)
     - Processing (Jan 1, 2024 2:00 PM)
     - Shipped (Jan 2, 2024 9:00 AM)

5. View Order Items
   → Product name and image
   → Quantity ordered
   → Price per item
   → Subtotal

6. See Shipping Information
   → Shipping address
   → Tracking number (if available)
   → Carrier information
   → Expected delivery date

7. Download Invoice (if available)
   → Click "Download Invoice"
   → PDF generated with order details
```

---

## 🔌 API Documentation

### Base URL
```
http://localhost:8080/api
```

### Authentication
*Note: Current version doesn't include authentication. This will be added in future releases.*

### Product Endpoints

#### 1. Get All Products

**GET** `/products`

Retrieves a list of all products.

**Request:**
```http
GET /api/products HTTP/1.1
Host: localhost:8080
```

**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "name": "Premium Wireless Headphones",
      "brand": "AudioTech",
      "category": "Electronics",
      "price": 199.99,
      "description": "High-quality wireless headphones with noise cancellation",
      "stock": 50,
      "imageUrl": "/api/products/1/image",
      "createdAt": "2024-01-01T10:00:00",
      "updatedAt": "2024-01-01T10:00:00"
    }
  ],
  "count": 1
}
```

**Status Codes:**
- `200 OK` - Success
- `500 Internal Server Error` - Server error

---

#### 2. Get Product by ID

**GET** `/products/{id}`

Retrieves a specific product by its ID.

**Request:**
```http
GET /api/products/1 HTTP/1.1
Host: localhost:8080
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": 1,
    "name": "Premium Wireless Headphones",
    "brand": "AudioTech",
    "category": "Electronics",
    "price": 199.99,
    "description": "High-quality wireless headphones with noise cancellation",
    "stock": 50,
    "imageUrl": "/api/products/1/image",
    "createdAt": "2024-01-01T10:00:00",
    "updatedAt": "2024-01-01T10:00:00"
  }
}
```

**Status Codes:**
- `200 OK` - Success
- `404 Not Found` - Product not found
- `500 Internal Server Error` - Server error

---

#### 3. Create Product

**POST** `/products`

Creates a new product.

**Request:**
```http
POST /api/products HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
  "name": "Smart Watch Pro",
  "brand": "TechWear",
  "category": "Wearables",
  "price": 299.99,
  "description": "Advanced smartwatch with health tracking features",
  "stock": 100
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Product created successfully",
  "data": {
    "id": 2,
    "name": "Smart Watch Pro",
    "brand": "TechWear",
    "category": "Wearables",
    "price": 299.99,
    "description": "Advanced smartwatch with health tracking features",
    "stock": 100,
    "createdAt": "2024-01-02T10:00:00"
  }
}
```

**Validation Rules:**
- `name`: Required, 3-100 characters
- `brand`: Required, 2-50 characters
- `category`: Required, 2-50 characters
- `price`: Required, must be positive
- `description`: Optional, max 5000 characters
- `stock`: Required, must be non-negative

**Status Codes:**
- `201 Created` - Success
- `400 Bad Request` - Validation error
- `500 Internal Server Error`
