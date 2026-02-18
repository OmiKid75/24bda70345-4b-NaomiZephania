# 24bda70345-4b-NaomiZephania
# Experiment 4B - This is a small Express API for a card collection. It uses an in-memory array as a mock database, follows a simple controller/service/model structure, and exposes CRUD routes with pagination.

## Name
Naomi Zephania

## UID
24bda70345

## Objective
- Create a backend server using Node.js
- Implement API routes for managing cards
- Enable adding new cards using POST request
- Retrieve card data using GET request
- Remove cards using DELETE request
- Test API endpoints using Postman

## Technologies Used
- Software: Node.js 18+, Express.js, VS Code, Postman
- Package Manager: pnpm / npm
- Hardware: i5+ CPU, 8GB RAM

## Features
- Create new cards with required details (e.g., title, description)
- Retrieve all created cards
- Delete existing cards
- JSON-based request and response handling
- RESTful API structure
- Lightweight backend server running on localhost:3000

## Folder Structure
24bda70345-4b-Naomi/
├─ index.js
├─ package.json
├─ controllers/
│  └─ card.controller.js
├─ models/
│  └─ card.model.js
├─ routes/
│  └─ card.routes.js
└─ services/
   └─ card.service.js



## How to Run Locally
1. Clone the repository:
2. Navigate into the project folder:
3. Install dependencies:
4. Start the server:
     run pnpm start
5. Open Postman and test:
## API Endpoint
### GET Request
- Method: GET  
- URL: http://localhost:3000/  
- Description: Retrieves available card data

### POST Request
- Method: POST  
- URL: http://localhost:3000/cards  
- Body: JSON  
Example: "title": "Sample Card",
"description": "This is a test card"



## Deployment
This project runs locally on Node.js server and can be deployed using platforms like Render or Railway if required.


## Screenshots
<img width="471" height="293" alt="Library System Screenshot" src="<img width="519" height="224" alt="image" src="https://github.com/user-attachments/assets/477ef9ea-802a-42d5-90c5-d951d05257db" />
" />
<img width="344" height="388" alt="image" src="https://github.com/user-attachments/assets/f192d62f-4df1-48b0-841b-a0c91ebe54d6" />
<img width="550" height="408" alt="image" src="https://github.com/user-attachments/assets/e51175ec-9d7e-4513-9619-723650726470" />

