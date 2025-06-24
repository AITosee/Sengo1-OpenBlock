const Sengo1 = formatMessage => ({
    name: formatMessage({
        id: 'Sengo1.name',
        default: 'Sengo1'
    }),
    extensionId: 'Sengo1',
    version: '0.1.2',
    supportDevice: ['arduinoUno','arduinoUnoR4Wifi','arduinoUnoR4Minima', 'arduinoNano', 'arduinoLeonardo', 'arduinoMega2560', 
        'arduinoEsp32', 'arduinoEsp8266','arduinoEsp32S3',
        'arduinoK210','arduinoK210MaixDock','arduinoK210Maixduino','arduinoLeonardo',
        'arduinoRaspberryPiPico','arduinoRaspberryPiPicoW','arduinoRaspberryPiPico2','arduinoRaspberryPiPico2W'],
    author: 'AIToose',
    iconURL: `assets/sengo1.png`,
    description: formatMessage({
        id: 'Sengo1.description',
        default: 'Entry-level AI vision module, supports QR code and face recognition, with block shell'
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