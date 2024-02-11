import { redirect } from "react-router-dom";

const URL = process.env.REACT_APP_URL

export const updateAction = async ({request, params}) => {
    const formData = await request.formData()
    const updatedSlice = {
        name: formData.get('name'),
        image: formData.get('image'),
        countryOfOrigin: formData.get('country'),
    }


await fetch(`${URL}/cheese/${params.id}`, {
    method: 'put',
    headers:{
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(updatedSlice)
})

return redirect('/')
}

export const createAction = async ({ request}) => {
    const formData = await request.formData()
    const createdSlice = {
        name: formData.get('name'),
        image: formData.get('image'),
        countryOfOrigin: formData.get('title'),
    }

    await fetch(`${URL}/cheese`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdSlice)
    })
    return redirect('/')
}

export const deleteAction = async ({params}) => {
    await fetch(`${URL}/cheese/${params.id}`, {
        method: 'delete'
    })


    return redirect('/')
}