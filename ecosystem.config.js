module.exports = {
  apps: [
    {
      name: 'eclinic',
      exec_mode: 'cluster',
      instances: '1',
      port: '3002',
      script: './.output/server/index.mjs'
    }
  ]
}
