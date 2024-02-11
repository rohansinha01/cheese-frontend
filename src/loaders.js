


const URL = process.env.REACT_APP_URL

export const cheeseLoader = async () => {
    const response = await fetch(`${URL}/cheese`)
    const cheese = await response.json()
    return cheese
}

export const sliceLoader = async ({params}) => {
    const response = await fetch(`${URL}/cheese/${params.id}`)
    const slice = await response.json()
    return slice
}