# Belajar Rest JS

This is a simple REST API built with JavaScript. The project is named "belajar_rest_js", which means "learn rest js" in English.

## Description

This project is a simple CRUD (Create, Read, Update, Delete) API for managing student data ("mahasiswa" in Indonesian). It uses MariaDB as the database and Express.js as the web server.

## Getting Started

### Prerequisites

- Node.js (v18)
- MariaDB (v10.2)

### Installation

1. Clone the repository
2. Install the dependencies with `npm install`
3. Copy `.env.example` to `.env` and fill in your database credentials
4. Start the server with `npm start`

## Usage

The main entry point of the application is [index.js](index.js). The routes for the CRUD operations on the student data are defined in [routes/crud_mahasiswa/v1/biodata/index.js](routes/crud_mahasiswa/v1/biodata/index.js).

## Testing

Currently, there are no tests for this project. The `npm test` command will output `Error: Ga ada tes`, which means "Error: No tests" in English.

## Contributing

Please feel free to submit issues and pull requests.

## License

This project is unlicensed.