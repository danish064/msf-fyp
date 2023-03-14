module.exports = {
  apps: [
    {
      name: 'eclinic',
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs'
    }
  ]
}
