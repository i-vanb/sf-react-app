const fs = require('fs').promises
const yargs = require('yargs')
const path = require('path')


const argv = yargs
    .option('function', { alias: 'f', bool: true })
    .command(['create <filename>', 'c'], 'create file', {}, (argv) => {
    const filepath = path.resolve(__dirname, 'src', 'components', `${argv.filename}.js`)
    fs.writeFile(filepath, argv.f
        ? createFunctionComponent(`${argv.filename}`)
        : createClassComponent(`${argv.filename}`))
        .then(()=>console.log('The component successfully created'))
        .catch(e => console.error(e))
    })
    .argv


function createFunctionComponent(name) {
    return(`import React from 'react';
        
        
export const ${name} = (props) => {
    return (
        <div>component is made by cli-react</div>
    );
}`
    )
}


function createClassComponent(name) {
    return(`import React from 'react';
        
        
export class ${name} extends React.Component {
    render() {
        return (
            <div>component is made by cli-react</div>
        );
    }
}`
    )
}
