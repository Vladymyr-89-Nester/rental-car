# 🚗 RentalCar

A modern and user-friendly car rental application built with cutting-edge web technologies. Browse, search, and book your perfect rental vehicle with ease.

## 📋 Table of Contents

- [🚗 RentalCar](#-rentalcar)
  - [📋 Table of Contents](#-table-of-contents)
  - [✨ Features](#-features)
  - [🛠 Tech Stack](#-tech-stack)
  - [📦 Installation](#-installation)
    - [Prerequisites](#prerequisites)
    - [Setup Steps](#setup-steps)
  - [🚀 Usage](#-usage)
    - [Available Scripts](#available-scripts)
    - [Key Features Walkthrough](#key-features-walkthrough)
  - [📁 Project Structure](#-project-structure)
  - [👨‍💻 Author](#-author)

## ✨ Features

- **Car Catalog**: Browse a comprehensive list of available rental vehicles
- **Advanced Search & Filtering**: Find cars by brand, price, type, and other specifications
- **Detailed Car Information**: View complete details including specs, features, and pricing
- **Booking System**: Check availability and reserve your preferred vehicle
- **Interactive Calendar**: Select rental dates with an intuitive date picker
- **Favorites Management**: Save your preferred cars for quick access
- **Real-time Notifications**: Get instant feedback on your actions via toast notifications
- **State Management**: Efficient data handling with Zustand and TanStack Query

## 🛠 Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) 16.1.6
- **React**: 19.2.3
- **Type Safety**: TypeScript
- **State Management**: [Zustand](https://github.com/pmndrs/zustand), [TanStack Query](https://tanstack.com/query)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **UI Components**: React Select, React Day Picker
- **Notifications**: React Hot Toast
- **Loading States**: React Loader Spinner
- **Styling**: CSS Modules
- **Linting**: ESLint

## 📦 Installation

### Prerequisites

Make sure you have the following installed:
- Node.js 18+ or higher
- npm or yarn package manager

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vladymyr-89-Nester/rental-car.git
   cd rental-car
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local  # Create your own .env.local if needed
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## 🚀 Usage

### Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

### Key Features Walkthrough

1. **Browse the Catalog**: Users can navigate to the catalog page to view all available rental vehicles
2. **Use Search & Filters**: Narrow down car selections by brand, price range, and specifications
3. **Book a Car**: Click on a vehicle to view details, select dates, and complete the booking
4. **Manage Favorites**: Add cars to your favorites list for quick reference
5. **Check Availability**: The calendar shows real-time availability for selected dates

## 📁 Project Structure

```
rental-car/
├── app/
│   ├── api/                    # API routes for backend functionality
│   │   ├── brands/            # Brand listings API
│   │   └── cars/              # Cars data API with detail routes
│   ├── catalog/               # Catalog pages and car details
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Home page
├── components/                # Reusable React components
│   ├── BookingForm/           # Booking reservation form
│   ├── Calendar/              # Date picker calendar
│   ├── CarsList/              # Cars grid display
│   ├── Header/                # Navigation header
│   ├── SearchBox/             # Search functionality
│   ├── ViewDetails/           # Car detail modal
│   └── ...
├── lib/
│   ├── api/                   # API client utilities
│   │   ├── clientApi.ts       # Client-side API calls
│   │   └── serverApi.ts       # Server-side API calls
│   └── store/                 # Zustand store definitions
│       ├── carsStore.ts       # Cars state management
│       ├── favoritesStore.ts  # Favorites state management
│       └── filtersStore.ts    # Filters state management
├── types/                     # TypeScript type definitions
├── public/                    # Static assets
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 👨‍💻 Author

**Vladymyr Nesterenko**

Feel free to reach out or contribute to the project!
- GitHub: [@Vladymyr-89-Nester](https://github.com/Vladymyr-89-Nester)

---

Made with ❤️ for car rental enthusiasts
