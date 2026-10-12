import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const analyticsDevPlugin = () => {
  const adminPageVisits = [
    { _id: '/dashboard', pageTitle: 'Dashboard', totalVisits: 18, lastVisited: new Date().toISOString() },
    { _id: '/products', pageTitle: 'Products', totalVisits: 12, lastVisited: new Date(Date.now() - 1800000).toISOString() },
    { _id: '/services', pageTitle: 'Services', totalVisits: 9, lastVisited: new Date(Date.now() - 3600000).toISOString() },
    { _id: '/contacts', pageTitle: 'Contacts', totalVisits: 14, lastVisited: new Date(Date.now() - 5400000).toISOString() },
    { _id: '/staff', pageTitle: 'Staff & access', totalVisits: 6, lastVisited: new Date(Date.now() - 7200000).toISOString() },
    { _id: '/activity-log', pageTitle: 'Activity log', totalVisits: 8, lastVisited: new Date(Date.now() - 9000000).toISOString() },
  ]

  const recentAdminVisits = [
    { _id: 'a1', adminName: 'Admin', pageTitle: 'Dashboard', pagePath: '/dashboard', createdAt: new Date().toISOString() },
    { _id: 'a2', adminName: 'Admin', pageTitle: 'Products', pagePath: '/products', createdAt: new Date(Date.now() - 1800000).toISOString() },
    { _id: 'a3', adminName: 'Admin', pageTitle: 'Contacts', pagePath: '/contacts', createdAt: new Date(Date.now() - 3600000).toISOString() },
    { _id: 'a4', adminName: 'Admin', pageTitle: 'Services', pagePath: '/services', createdAt: new Date(Date.now() - 5400000).toISOString() },
    { _id: 'a5', adminName: 'Admin', pageTitle: 'Staff & access', pagePath: '/staff', createdAt: new Date(Date.now() - 7200000).toISOString() },
  ]

  const websitePages = [
    { _id: '/', pageTitle: 'Make My Works - Home', totalViews: 142, lastVisited: new Date().toISOString() },
    { _id: '/services', pageTitle: 'Services Overview', totalViews: 86, lastVisited: new Date(Date.now() - 1200000).toISOString() },
    { _id: '/contact', pageTitle: 'Contact Us', totalViews: 54, lastVisited: new Date(Date.now() - 2400000).toISOString() },
    { _id: '/about', pageTitle: 'About & Story', totalViews: 38, lastVisited: new Date(Date.now() - 4800000).toISOString() },
  ]

  const recentWebsiteVisits = [
    { _id: 'w1', eventType: 'page_view', pagePath: '/', pageTitle: 'Make My Works - Home', elementLabel: '', createdAt: new Date().toISOString() },
    { _id: 'w2', eventType: 'button_click', pagePath: '/services', pageTitle: 'Services Overview', elementLabel: 'Request Quote', createdAt: new Date(Date.now() - 900000).toISOString() },
    { _id: 'w3', eventType: 'page_view', pagePath: '/contact', pageTitle: 'Contact Us', elementLabel: '', createdAt: new Date(Date.now() - 1800000).toISOString() },
    { _id: 'w4', eventType: 'button_click', pagePath: '/', pageTitle: 'Make My Works - Home', elementLabel: 'Explore Services', createdAt: new Date(Date.now() - 2700000).toISOString() },
    { _id: 'w5', eventType: 'page_view', pagePath: '/services', pageTitle: 'Services Overview', elementLabel: '', createdAt: new Date(Date.now() - 3600000).toISOString() },
  ]

  return {
    name: 'analytics-dev-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0]

        if (url.endsWith('/website-analytics/summary')) {
          res.setHeader('Content-Type', 'application/json')
          res.statusCode = 200
          res.end(JSON.stringify({
            status: true,
            message: 'Request successful',
            data: {
              totalPageViews: websitePages.reduce((acc, p) => acc + p.totalViews, 0),
              totalClicks: 42,
              uniqueVisitors: 98,
              pageViews: websitePages,
              recentVisits: recentWebsiteVisits,
            }
          }))
          return
        }

        if (url.endsWith('/admin/page-analytics')) {
          res.setHeader('Content-Type', 'application/json')
          res.statusCode = 200
          res.end(JSON.stringify({
            status: true,
            message: 'Request successful',
            data: {
              totalVisits: adminPageVisits.reduce((acc, p) => acc + p.totalVisits, 0),
              pageViews: adminPageVisits,
              recentVisits: recentAdminVisits,
            }
          }))
          return
        }

        next()
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  const apiOrigin = new URL(
    env.VITE_API_URL || 'https://alphazetaworld.onrender.com/api'
  ).origin

  return {
    base: '/mmw_control-pannel/',
    plugins: [react(), analyticsDevPlugin()],

    server: {
      proxy: {
        '/api': {
          target: apiOrigin,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})
