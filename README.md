# E-commerce Backend

## Description

This project is the backend for an e-commerce site. It uses Express.js API with Sequelize to interact with a MySQL database. The backend supports all CRUD operations for managing products, categories, and tags.

## Installation

To get started, clone this repository and install the dependencies:

```bash
git clone <https://github.com/StgoWF/ecommerce-backend-express-sequelize>
cd <project_directory>
npm install
```

## Usage

To start the server, run:

```bash
npm start
```

To seed the database with initial data, run:

```bash
npm run seed
```

## API Routes

The API supports the following routes:

### Products

- **GET /api/products**: Fetch all products
- **GET /api/products/:id**: Fetch a single product by ID
- **POST /api/products**: Add a new product
- **PUT /api/products/:id**: Update a product by ID
- **DELETE /api/products/:id**: Delete a product by ID

### Categories

- **GET /api/categories**: Fetch all categories
- **GET /api/categories/:id**: Fetch a single category by ID
- **POST /api/categories**: Add a new category
- **PUT /api/categories/:id**: Update a category by ID
- **DELETE /api/categories/:id**: Delete a category by ID

### Tags

- **GET /api/tags**: Fetch all tags
- **GET /api/tags/:id**: Fetch a single tag by ID
- **POST /api/tags**: Add a new tag
- **PUT /api/tags/:id**: Update a tag by ID
- **DELETE /api/tags/:id**: Delete a tag by ID
### Product Tags

- **GET /api/product-tags**: Fetch all product-tag associations
- **GET /api/product-tags/:id**: Fetch a single product-tag association by ID
- **POST /api/product-tags**: Add a new product-tag association
- **PUT /api/product-tags/:id**: Update a product-tag association by ID
- **DELETE /api/product-tags/:id**: Delete a product-tag association by ID

## Models

The database includes the following models:

- **Product**: Represents products for sale.
- **Category**: Represents categories of products.
- **Tag**: Represents tags that can be associated with products.
- **ProductTag**: This is a join table that establishes a many-to-many relationship between products and tags. Each entry in this table links a product to a tag, allowing products to have multiple tags and tags to be associated with multiple products.



## Repository Link

You can find the repository for this project at [GitHub Repository](https://github.com/yourusername/your-repo-name).

## Video Walkthrough

A video walkthrough demonstrating the functionality of the backend can be found at [this link](https://drive.google.com/file/d/1qcX8DdugZzkWMtdybJxw0fK1mXMdqBvc/view). The video covers all the CRUD operations for products, categories, and tags, including testing with  Insomnia.

## Contributions

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See `LICENSE` for more information.



