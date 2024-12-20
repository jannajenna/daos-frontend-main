// src/routes/landingPageRoute.tsx
import { createFileRoute } from '@tanstack/react-router'
import LandingPage from '../pages/LandingPage/LandingPage'

export const Route = createFileRoute('/')({
  component: LandingPage,
})
