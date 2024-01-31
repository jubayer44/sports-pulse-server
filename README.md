# Sports Pulse Dashboard
## Server

### Client Live Url: https://sports-pulse.vercel.app/
### Server Side Url: https://sports-management-server.vercel.app/

- ### Application Summary
- ##### Sports Pulse Server built with Node.js Express application with TypeScript as the programming language and MongoDB with Mongoose. It utilizes MongoDB through Mongoose for data storage. use incorporates jsonwebtoken for user authentication.

- ### Local Setup Instructions
- Clone the repository
  `https://github.com/Porgramming-Hero-web-course/l2b2-full-stack-a5-server-side-jubayer44.git`
- Navigate to the project directory
  `cd your-folder`
- Install dependencies
  `npm install`
- Create a`.env` file in the root of the project and set the following environment variables

```
PORT = 5000
JWT_SECRET = your secret
JWT_EXPIRES_IN = 1d
DB_URL = your mongodb_url
```

##### Running the application

- Development Mode
  `npm run dev`
- Production Mode

```
npm run build
npm start
```

##### Testing Application

- To run linting and prettier checks

```
npm run lint:check
npm run prettier:check
```

- To automatically fix linting and prettier issues

```
npm run lint:fix
npm run prettier:fix
```

#### **Models**

This Application has 3 models.

1. Product Model
2. Sales Model
3. User Model

### API Endpoints

This application has 15 endpoints

#### 1. User Registration

- **Route:** `/api/register`
- **Method:** POST

#### 2. User Login

- **Route:** `/api/login`
- **Method:** POST

#### 3. Add a Product

- **Route:** `/api/product`
- **Method:** POST

#### 4. Get Products

- **Route:** `/api/products`
- **Method:** GET

#### 5. Get a Product

- **Route:** `/api/product/:id`
- **Method:** GET

#### 6. Get a Product

- **Route:** `/api/product/:id`
- **Method:** GET

#### 7. Update a Product

- **Route:** `/api/product/:id`
- **Method:** PATCH

#### 8. Update a Product

- **Route:** `/api/product/:id`
- **Method:** PATCH

#### 9. Delete a Product

- **Route:** `/api/product/:id`
- **Method:** DELETE

#### 10. Delete Multiple Products

- **Route:** `/api/products`
- **Method:** DELETE

#### 11. Get Products Values

- **Route:** `/api/products/values`
- **Method:** GET

#### 12. Get Products And Users Count

- **Route:** `/api/products-users`
- **Method:** GET

#### 13. Get All Sales

- **Route:** `/api/sales`
- **Method:** GET

#### 14. Add a Sale

- **Route:** `/api/sale`
- **Method:** GET

#### 15. Delete a Sale

- **Route:** `/api/sale/:id`
- **Method:** DELETE

## Thank You
