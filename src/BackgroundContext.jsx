import { createContext } from 'react'

const BackgroundContext = createContext({
    current: '',
    options: []
});

BackgroundContext.defaultValue = {
    current: 'red',
    options: Object.freeze(['red', 'green', 'blue'])
}

export default BackgroundContext
