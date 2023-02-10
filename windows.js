var Service = require('node-windows').Service
var dir = require('path').join(process.cwd(), 'server/index.js')

// Create a new service object
var svc = new Service({
  name: 'Wiki ',
  description: 'Server wiki for Smart team',
  script: dir
})

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install', function() {
  svc.start()
})

// Just in case this file is run twice.
svc.on('alreadyinstalled', function() {
  console.log('This service is already installed.')
})

// Listen for the "start" event and let us know when the
// process has actually started working.
svc.on('start', function() {
  console.log(svc.name + ' started!\nVisit http://127.0.0.1:8010 to see it in action.')
})

// Install the script as a service.
console.log('Installing to', dir)

// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall', function() {
  console.log('Uninstall complete.')
  console.log('The service exists: ', svc.exists)
})

// Uninstall the service.
svc.uninstall()
svc.install()
