const perfilRouter = require('./perfil.route');  // Asegúrate de importar la ruta correctamente

module.exports = [
  {
    path: perfilRouter.path,  // Asegúrate de que el path esté definido correctamente en perfil.router
    router: perfilRouter.router
  }
];