# 🍕 Pizza Shop Web

**Partner application to manage food orders**

---

## About the Project

Pizza Shop Web is a web application designed for restaurant partners to manage incoming food orders efficiently. The platform focuses on providing an intuitive UI and seamless interactions to optimize restaurant operations.

---

## Features

- 📋 Order Management Dashboard
- 🍕 Detailed View of Incoming Orders
- ⚡ Fast Frontend Performance (powered by Vite)
- 🎨 Fully Responsive UI with TailwindCSS
- 🛠️ TypeScript for safer and scalable development
- 🧪 End-to-End Testing with Playwright
- 🧹 Code linting and formatting (ESLint + Prettier)

---

## Tech Stack

| Category        | Technologies           |
|-----------------|-------------------------|
| Frontend        | TypeScript, Vite, React, TailwindCSS |
| Testing         | Playwright              |
| Configuration   | ESLint, Prettier, PostCSS |
| Build Tools     | Vite                    |
| Mocking         | MSW                     |

---

## Getting Started

### Prerequisites

- Node.js (>= 18)
- npm / yarn / pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AugustoMarcelo/pizza.shop-web.git
   ```
2. Navigate to the project directory:
   ```bash
   cd pizza.shop-web
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Mock version

Run a no-api version of the application:
```bash
pnpm run dev:mock
```

## Testing

Run end-to-end tests with Playwright:

```bash
npx playwright test --ui
```

Playwright configuration is available in `playwright.config.ts`.

---

## Folder Structure

```
pizza.shop-web/
├── public/               # Static assets
├── src/                  # Application source code
├── test/                 # End-to-end tests
├── .eslintrc.json        # Linting configuration
├── tailwind.config.js    # TailwindCSS setup
├── vite.config.ts        # Vite build configuration
└── ...
```

---

## Contributing

Feel free to open issues or submit pull requests.

---

## Contact

Created and maintained by **[Augusto Marcelo](https://github.com/AugustoMarcelo)**.  
Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/augustomarcelo/).