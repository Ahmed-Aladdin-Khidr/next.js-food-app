# 🍽️ NextLevel Food - Next.js Learning Project

> **A comprehensive food sharing platform built with Next.js 15, featuring modern React patterns, server actions, and database integration.**

![Next.js](https://img.shields.io/badge/Next.js-15.0.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![SQLite](https://img.shields.io/badge/SQLite-3-green?style=for-the-badge&logo=sqlite)

## 📖 Project Overview

**NextLevel Food** is a full-stack web application that serves as a comprehensive learning project for modern Next.js development. This project demonstrates key concepts including App Router, Server Components, Server Actions, database integration, and modern React patterns.

### 🎯 Learning Objectives

This project was designed to master:

- **Next.js 15 App Router** - Understanding the new routing system and file-based routing
- **Server Components vs Client Components** - When and how to use each effectively
- **Server Actions** - Handling form submissions and server-side logic
- **Database Integration** - Working with SQLite and better-sqlite3
- **Image Handling** - File uploads, processing, and optimization
- **Security Best Practices** - XSS protection, input validation, and sanitization
- **Modern React Patterns** - Suspense, error boundaries, and loading states
- **CSS Modules** - Component-scoped styling
- **SEO Optimization** - Metadata API and dynamic meta tags

## ✨ Features

### 🏠 Homepage
- **Hero Section** with image slideshow
- **Call-to-Action** buttons for community and meals
- **Feature explanations** with modern UI design

### 🍽️ Meals Section
- **Browse all meals** with grid layout
- **Individual meal pages** with detailed recipes
- **Share new meals** with comprehensive form
- **Image upload** and processing
- **Loading states** and error handling

### 👥 Community Section
- **Community perks** showcase
- **Feature highlights** with icons and descriptions

### 🔧 Technical Features
- **Server-side rendering** for optimal performance
- **Database operations** with SQLite
- **File upload handling** with image processing
- **Form validation** and error handling
- **Responsive design** with CSS Modules
- **SEO optimization** with dynamic metadata

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features and patterns
- **CSS Modules** - Component-scoped styling
- **Next.js Image** - Optimized image handling

### Backend
- **Server Actions** - Server-side form handling
- **SQLite** - Lightweight database
- **better-sqlite3** - High-performance SQLite driver
- **Node.js File System** - File upload processing

### Security & Utilities
- **XSS Protection** - Input sanitization with xss library
- **Slugify** - URL-friendly string generation
- **Form Validation** - Client and server-side validation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd next.js-food-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Initialize the database**
   ```bash
   node initdb.js
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
next.js-food-app/
├── app/                          # Next.js App Router
│   ├── globals.css              # Global styles
│   ├── layout.js                # Root layout component
│   ├── page.js                  # Homepage
│   ├── not-found.js             # 404 page
│   ├── meals/                   # Meals section
│   │   ├── page.js              # Meals listing
│   │   ├── [mealSlug]/          # Dynamic meal pages
│   │   ├── share/               # Share meal form
│   │   ├── loading-out.js       # Loading component
│   │   ├── error.js             # Error boundary
│   │   └── not-found.js         # Meals 404
│   └── community/               # Community section
│       └── page.js              # Community page
├── components/                   # Reusable components
│   ├── main-header/             # Header components
│   ├── meals/                   # Meal-related components
│   └── images/                  # Image components
├── lib/                         # Utility functions
│   ├── meals.js                 # Database operations
│   └── actions.js               # Server actions
├── assets/                      # Static assets
├── public/                      # Public files
│   └── images/                  # Uploaded images
├── meals.db                     # SQLite database
├── initdb.js                    # Database initialization
└── package.json                 # Dependencies
```

## 🎓 Key Learning Concepts

### 1. App Router Architecture
```javascript
// app/layout.js - Root layout with metadata
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};
```

### 2. Server Components
```javascript
// app/meals/page.js - Server component with data fetching
async function Meals() {
  const meals = await getMeals(); // Server-side data fetching
  return <MealsGrid meals={meals} />;
}
```

### 3. Server Actions
```javascript
// lib/actions.js - Server action for form handling
export async function shareMeal(prevState, formData) {
  // Server-side form processing
  const meal = {
    title: formData.get("title"),
    // ... other fields
  };
  
  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
```

### 4. Database Integration
```javascript
// lib/meals.js - Database operations
export async function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}

export async function saveMeal(meal) {
  // Image processing and database insertion
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions); // XSS protection
  // ... save to database
}
```

### 5. Dynamic Routing
```javascript
// app/meals/[mealSlug]/page.js - Dynamic route
export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.mealSlug);
  // ... render meal details
}
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Database Schema

The application uses SQLite with the following schema:

```sql
CREATE TABLE meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
);
```

## 🎨 UI/UX Features

- **Responsive Design** - Works on all device sizes
- **Loading States** - Smooth user experience with Suspense
- **Error Handling** - Graceful error boundaries
- **Image Optimization** - Next.js Image component for performance
- **Modern Styling** - CSS Modules for component isolation

## 🚀 Deployment

This project can be deployed to any platform that supports Node.js:

- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**
- **Heroku**

## 🤝 Contributing

This is a learning project, but contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Share your learning experience

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [CSS Modules](https://github.com/css-modules/css-modules)

## 📝 License

This project is for educational purposes. Feel free to use it for learning and experimentation.

---

**Happy Learning! 🎉**

*Built with ❤️ for the Next.js learning community*