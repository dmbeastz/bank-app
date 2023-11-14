# React Transactions App
## Description 
This is a simple React application for managing transactions. It includes a table to display transactions, a form to add new transactions, and a search bar for filtering transactions based on description. 

## Getting Started
### Installation

1. Clone the repository:
   git clone git@github.com:dmbeastz/bank-of-flatiron.git

   cd bank

### Install dependencies:
Copy code
npm install
Start the React development server:

Copy code 
json-server --watch db.json

Copy code
npm start

## Features
View a table of all transactions.
Add new transactions using the provided form.
Filter transactions by typing into the search bar.
Sort transactions alphabetically by category or description.

## Folder Structure
src/: Contains the source code for the React application.
components/: React components used in the application.
App.js: Main component integrating other components and handles the fetching .
Transaction Form : Handles the adding of new transactions based on the id,Description and Amount given
Transaction Table : Handles the displaying of transactions with the use of a template
index.js: Entry point for the React application.

Author
Dave Mutisya