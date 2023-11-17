const compareImages = require('resemblejs/compareImages');
const fs = require('fs');

async function getDiff () {
    const options = {
        output: {
            errorColor: {
                red: 255,
                green: 0,
                blue: 255,
            },
            errorType: 'movement',
            transparency: 0.3,
            largeImageThreshold: 1200,
            useCrossOrigin: false,
            outputDiff: true,
        },
        scaleToSameSize: true,
        ignore: 'antialiasing',
    };

    const data = await compareImages(
        fs.readFileSync('./main.png'),
        fs.readFileSync('./feature.png'),
        options,
    );

    if (data.rawMisMatchPercentage > 0) {
        console.error('Difference detected!', `${data.rawMisMatchPercentage}%`);
    } else {
        console.info('No diff detected!');
    }

    fs.writeFileSync('./diff.png', data.getBuffer());
}

getDiff();
