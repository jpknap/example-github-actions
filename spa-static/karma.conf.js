// karma.conf.js
module.exports = function (config) {
  config.set({
    basePath: '', // Base path that will be used to resolve files and exclude
    frameworks: ['jasmine'], // Frameworks to use
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    files: [
      { pattern: './src/**/*.spec.ts', type: 'module' }, // Especifica el tipo como 'module'
      { pattern: './src/**/*.ts', included: false }, // Agrega todos los archivos .ts excepto los de pruebas
    ],
    reporters: ['progress', 'karma-typescript'], // Reporteros para mostrar el progreso y la cobertura
    port: 9876, // El puerto donde se ejecuta el servidor de Karma
    colors: true, // Usa colores en la salida
    logLevel: config.LOG_INFO, // Nivel de log
    autoWatch: true, // Observa cambios en los archivos y vuelve a ejecutar las pruebas
    browsers: ['chrome'], // Navegador a usar
    singleRun: false, // Si se debe ejecutar una sola vez o mantener el proceso en ejecución
    concurrency: Infinity, // Número de conexiones simultáneas
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json", // Asegúrate de que la ruta sea correcta
      reports: {
        "html": "coverage",
        "text-summary": ""
      }
    }
  });
};
