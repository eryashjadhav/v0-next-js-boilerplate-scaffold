# Next.js 15.5 Production Boilerplate

A comprehensive, production-ready Next.js boilerplate with TypeScript, designed for scalability and developer productivity. Perfect for multi-project reuse with a clean, modular architecture.

## 🚀 Features

### Core Stack
- **Next.js 15.5** with App Router and `src/` directory
- **TypeScript** with strict mode enabled
- **Tailwind CSS** with Shadcn/ui components
- **Redux Toolkit** + RTK Query for state management
- **React Hook Form** + Zod validation
- **Sonner** toast notifications
- **Lucide React** icons

### Developer Experience
- **ESLint** + **Prettier** + **Husky** + **lint-staged**
- Absolute imports via `@/` alias
- Comprehensive TypeScript configuration
- Pre-commit hooks for code quality
- Error boundaries and loading states

### Architecture
- Modular folder structure
- Standalone theme system with dark/light mode
- Type-safe API integration
- Reusable form components
- Global error handling

## 📁 Project Structure

\`\`\`
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── globals.css        # Global styles with design tokens
│   ├── blog/              # Blog feature module
│   └── auth/              # Authentication module
├── components/
│   ├── ui/                # Shadcn/ui components
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── common/            # Shared components (Loader, ErrorBoundary)
│   ├── blog/              # Blog-specific components
│   └── forms/             # Form components
├── store/
│   ├── index.ts           # Store configuration
│   ├── rootReducer.ts     # Root reducer
│   ├── api/               # RTK Query API slices
│   └── slices/            # Redux slices
├── hooks/                 # Custom React hooks
├── utils/                 # Utility functions
├── config/
│   ├── theme/             # Standalone theme module
│   ├── env.config.ts      # Environment configuration
│   └── constants.ts       # App constants
├── lib/                   # Third-party library configurations
└── types/                 # TypeScript type definitions
\`\`\`

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd nextjs-boilerplate
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   Edit `.env.local` with your configuration.

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Theme System

The boilerplate includes a comprehensive theme system located in `src/config/theme/`:

- **ThemeProvider**: React context for theme management
- **useTheme**: Hook for theme state and actions
- **Theme configuration**: Centralized design tokens
- **CSS variables**: Automatic dark/light mode switching

### Usage
\`\`\`tsx
import { useTheme } from '@/config/theme'

function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme('dark')}>
      Current theme: {resolvedTheme}
    </button>
  )
}
\`\`\`

## 📝 Forms & Validation

Forms are built with React Hook Form and Zod validation:

\`\`\`tsx
import { useForm } from '@/hooks/useForm'
import { contactFormSchema } from '@/lib/form-schemas'

function ContactForm() {
  const form = useForm(contactFormSchema, {
    defaultValues: { name: '', email: '', message: '' }
  })
  
  const handleSubmit = async (data) => {
    // Form submission logic
  }
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        {/* Form fields */}
      </form>
    </Form>
  )
}
\`\`\`

## 🔄 State Management

Redux Toolkit with RTK Query for API communication:

\`\`\`tsx
import { useGetBlogPostsQuery } from '@/store/api/blog.api'

function BlogList() {
  const { data, isLoading, error } = useGetBlogPostsQuery({
    page: 1,
    limit: 10
  })
  
  if (isLoading) return <LoadingSpinner />
  if (error) return <ErrorMessage />
  
  return (
    <div>
      {data?.data.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}
\`\`\`

## 🔐 Authentication

Built-in authentication system with protected routes:

\`\`\`tsx
import { useAuth } from '@/hooks/useAuth'

function ProtectedComponent() {
  const { user, isAuthenticated, login, logout } = useAuth()
  
  if (!isAuthenticated) {
    return <LoginForm />
  }
  
  return <UserDashboard user={user} />
}
\`\`\`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

\`\`\`env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=your_database_url
\`\`\`

### Customization

1. **Theme Colors**: Edit `src/config/theme/theme.config.ts`
2. **App Constants**: Update `src/config/constants.ts`
3. **API Endpoints**: Modify files in `src/store/api/`
4. **Form Schemas**: Update `src/lib/form-schemas.ts`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The boilerplate works with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation

---

**Happy coding!** 🎉
