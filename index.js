const Sengo1 = formatMessage => ({
    name: formatMessage({
        id: 'Sengo1.name',
        default: 'Sengo1',
        description: 'name of Sengo1 vision sensor extension'
    }),
    extensionId: 'Sengo1',
    version: '0.0.8',
    supportDevice: ['arduinoUno','arduinoUnoR4Wifi','arduinoUnoR4Minima', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 
        'arduinoEsp32', 'arduinoEsp8266','arduinoEsp32S3',
        'arduinoK210','arduinoK210MaixDock','arduinoK210Maixduino','arduinoLeonardo',
        'arduinoRaspberryPiPico','arduinoRaspberryPiPicoW','arduinoRaspberryPiPico2','arduinoRaspberryPiPico2W'],
    author: 'AiToose',
    iconURL: `assets/sengo1.png`,
    description: formatMessage({
        id: 'Sengo1.description',
        default: 'Sengo1 vision sensor extension for OpenBlock.',
        description: 'Description of Sengo1 vision sensor'
    }),
    featured: true,
    blocks: 'blocks.js',
    generator: 'generator.js',
    toolbox: 'toolbox.js',
    translations: 'translations.js',
    library: 'lib',
    tags: ['sensor', 'AI'],
    helpLink: 'https://tosee.readthedocs.io/zh/latest/'
});

module.exports = Sengo1; 