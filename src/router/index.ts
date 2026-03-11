// src/router/index.ts

import { usePageLoader } from '@/composables/usePageLoader'
import { createRouter, createWebHistory } from 'vue-router'
// Lazy loading (best practice for performance)
const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const Contact = () => import('@/views/Contact.vue')
const Careers = () => import('@/views/Careers.vue')
const Teams = () => import('@/views/TeamDetails.vue')
const TeamDetails = () => import('@/views/TeamDetails.vue')
const Projects = () => import('@/views/Projects.vue')
const ProjectDetails = () => import('@/views/ProjectDetails.vue')
const PrivacyAndPolicy = () => import('@/views/PrivacyAndPolicy.vue')
const TermsAndConditions = () => import('@/views/TermsAndConditions.vue')
const History = () => import('@/views/History.vue')
const Locations = () => import('@/views/Locations.vue')
const Partners = () => import('@/views/Partners.vue')
const PartnerDetails = () => import('@/views/PartnerDetails.vue')
const PolicyDetails = () => import('@/views/PolicyDetails.vue')
const PrivacyPolicy = () => import('@/views/PrivacyAndPolicy.vue')
const Services = () => import('@/views/Services.vue')
const ServiceDetails = () => import('@/views/ServiceDetails.vue')
const CompanyProfile = () => import('@/views/CompanyProfile.vue')
const News = () => import('@/views/News.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Home' },
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: { title: 'About' },
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
      meta: { title: 'Contact' },
    },
    {
      path: '/careers',
      name: 'Careers',
      component: Careers,
      meta: { title: 'Careers' },
    },
    {
      path: '/CareerDetails/:id',
      name: 'Career Details',
      component: () => import('@/views/CareerDetails.vue'),
      props: true,
    },
    {
      path: '/team',
      name: 'Team',
      component: Teams,
      meta: { title: 'Teams' },
    },
    {
      path: '/team-details',
      name: 'Team Details',
      component: TeamDetails,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
      meta: { title: 'Projects' },
    },
    {
      path: '/ProjectDetails/:id',
      name: 'Project Details',
      component: () => import('@/views/ProjectDetails.vue'),
      props: true,
    },
    {
      path: '/privacy-policy',
      name: 'Privacy Policy',
      component: PrivacyAndPolicy,
      meta: { title: 'Privacy and Policy' },
    },
    {
      path: '/terms-conditions',
      name: 'Terms & Conditions',
      component: TermsAndConditions,
      meta: { title: 'Terms & Conditions' },
    },
    {
      path: '/history',
      name: 'History',
      component: History,
      meta: { title: 'History' },
    },
    {
      path: '/locations',
      name: 'Locations',
      component: Locations,
      meta: { title: 'Locations' },
    },
    {
      path: '/partners',
      name: 'Partners',
      component: Partners,
      meta: { title: 'Partners' },
    },
    {
      path: '/PartnerDetails/:id',
      name: 'Partner Details',
      component: PartnerDetails,
      props: true,
    },
    {
      path: '/policydetails',
      name: 'Policy Details',
      component: PolicyDetails,
    },
    {
      path: '/privacy',
      name: 'Privacy Policy',
      component: PrivacyPolicy,
      meta: { title: 'Privacy Policy' },
    },
    {
      path: '/Services',
      name: 'Services',
      component: Services,
      meta: { title: 'Services' },
    },
    {
      path: '/ServiceDetails/:id',
      name: 'Service Details',
      component: ServiceDetails,
      props: true,
    },
    {
      path: '/company-profile',
      name: 'Company Profile',
      component: CompanyProfile,
      meta: { title: 'Company Profile' },
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      meta: { title: 'News' },
    },
    {
      path: '/NewsDetails/:id',
      name: 'News Details',
      component: () => import('@/views/NewsDetails.vue'),
      props: true,
    },
  ],
})

const { loading } = usePageLoader()

router.beforeEach((to, from, next) => {
  loading.value = true
  next()
})

router.afterEach(() => {
  setTimeout(() => {
    loading.value = false
  }, 500)
})
export default router
