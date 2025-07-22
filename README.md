# Scalable Chat App

A modern, scalable real-time chat application built with Next.js, WebSocket, and a microservices architecture. This project features a responsive frontend, robust backend APIs, and real-time messaging capabilities using WebSocket connections.

## 🏗️ Architecture

This is a monorepo built with **Turborepo** and **PNPM workspaces**, featuring:

- **Frontend**: Next.js 15 with React 19, TypeScript, and Tailwind CSS
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Real-time Communication**: WebSocket servers for scalable messaging
- **Authentication**: OAuth integration (Google)
- **UI Components**: Radix UI and custom component library

## 📁 Project Structure

```
scalable-chat-app/
├── apps/
│   ├── frontend/           # Next.js
server
│   └── user-ws/           # User WebSocket connection handler
├── packages/
│   ├── eslint-config/     # Shared ESLint configurations
│   ├── typescript-config/ # Shared TypeScript configurations
│   └── ui/                # Shared UI component library
└── prisma/                # Database schema and migrations
```

## ✨ Features

- 🔐 **Authentication**: OAuth login with Google
- 💬 **Real-time Chat**: Instant messaging with WebSocket
- 🏠 **Chat Groups**: Create and join chat rooms with passcodes
- 📁 **File Sharing**: Support for file uploads in chat
- 📱 **Responsive Design**: Mobile-first responsive UI
- ⚡ **High Performance**: Optimized with Next.js 15 and Turbopack
- 🔒 **Secure**: JWT authentication and secure data handling
- 🎨 **Modern UI**: Beautiful interface with Tailwind CSS and Radix UI

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- PNPM 9.0.0 or higher
- PostgreSQL database

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/bappirahman/scalable-chat-app.git
   cd scalable-chat-app
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   Configure the following variables:
   - `DATABASE_URL`: PostgreSQL connection string
   - `JWT_SECRET`: Secret key for JWT tokens
   - `GOOGLE_CLIENT_ID`: Google OAuth client ID
   - `GOOGLE_CLIENT_SECRET`: Google OAuth client secret

4. **Set up the database**

   ```bash
   cd apps/reference/server
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development servers**

   ```bash
   # Start all services in development mode
   pnpm dev
   ```

   Or start services individually:

   ```bash
   # Frontend (http://localhost:3000)
   cd apps/frontend && pnpm dev

   # Backend API
   cd apps/reference/server && pnpm dev

   # WebSocket servers
   cd apps/user-ws && node index.js
   cd apps/relayer-ws && node index.js
   ```

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all applications for production
- `pnpm lint` - Run ESLint across all packages
- `pnpm format` - Format code with Prettier
- `pnpm check-types` - Run TypeScript type checking

### Database Management

```bash
# Generate Prisma client
npx prisma generate

# Push schema changes to database
npx prisma db push

# Create and apply migrations
npx prisma migrate dev

# Open Prisma Studio
npx prisma studio
```

## 🏗️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Backend

- **Express.js** - Web application framework
- **TypeScript** - Type-safe server development
- **Prisma** - Modern database toolkit
- **PostgreSQL** - Robust relational database
- **JWT** - Secure authentication
- **Socket.IO** - Real-time communication
- **Redis** - Caching and session management

### Development Tools

- **Turborepo** - High-performance build system
- **PNPM** - Fast, disk space efficient package manager
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting

## 📊 Database Schema

The application uses the following main entities:

- **Users**: User accounts with OAuth authentication
- **ChatGroup**: Chat rooms with passcode protection
- **GroupUsers**: Members of chat groups
- **Chats**: Individual messages with file support

## 🔌 API Endpoints

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/user` - Get current user

### Chat Groups

- `GET /api/chat-groups` - List user's chat groups
- `POST /api/chat-groups` - Create new chat group
- `POST /api/chat-groups/join` - Join chat group with passcode

### Messages

- `GET /api/chats/:groupId` - Get chat history
- `POST /api/chats` - Send message
- WebSocket events for real-time messaging

## 🚀 Deployment

### Production Build

```bash
# Build all applications
pnpm build

# Start production servers
pnpm start
```

### Environment Variables for Production

Make sure to set the following environment variables in your production environment:

- `DATABASE_URL`
- `JWT_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

If you have any questions or need help with setup, please open an issue or contact the maintainers.

---

Built with ❤️ using modern web technologies
