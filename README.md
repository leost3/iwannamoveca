# Express TypeScript API

A Node.js Express API with TypeScript and Jest support.

## Features

- TypeScript for type safety
- Express server with modular routing
- Jest testing with TypeScript support
- Hot reloading during development
- Clean project architecture
- Environment configuration
- Error handling middleware

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy the environment example file and adjust as needed:

```bash
cp .env.example .env
```

### Development

Start the development server with hot reloading:

```bash
npm run dev
```

### Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

### Production Build

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
.
├── src/
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Express middleware
│   ├── routes/          # API routes
│   ├── services/        # Business logic
│   ├── types/           # TypeScript interfaces
│   ├── utils/           # Utility functions
│   ├── __tests__/       # Test files
│   └── index.ts         # Application entry point
├── .env.example         # Environment variables example
├── .gitignore           # Git ignore file
├── jest.config.js       # Jest configuration
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## License

This project is licensed under the MIT License.