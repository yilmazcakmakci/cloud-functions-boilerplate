import { name, interests } from './constants'

export const hello = (req, res) => {
    res.json({
        name,
        interests: [...interests, 'Web Components']
    })
}