// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  // son las llamadas asincronicas o peticiones que lo maximo que puete tardas es 11 seg. Es lo que viene predeterminado
  allScriptsTimeout: 11000,
  // donde va a buscar los spec. eso quiere decir que busque todos los archivos q esten dentro de src y que terminene en .e2e-spec.ts
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  // es el navegador por defecto a donde correran las pruebas. 
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      // --headless: esto se usa en docker, le decimos que el navegador lo corra en background
      args: [
        '--headless'
      ]
    }
  },
  directConnect: true,
  // donde se va a estar ejecuando el testeo
  baseUrl: 'http://localhost:4200/',
  // aca podemos usar cucumber
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    // jasmine va a esperar un maximo de tiempo de 30 seg por cada testeo it. 
    // de esta forma nos aseguramos que los it terminen
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};