import { useLoaderData, Form } from "react-router-dom"



const Show = () => {
    const slice = useLoaderData()
    console.log(slice)
    return(
       <div className="slice">
        <h1>{slice.name}</h1>
        <h2>{slice.countryOfOrigin}</h2>
        <img src={slice.image} alt={slice.name} />

        <h2>Update {slice.name}</h2>
        <Form action={`/update/${slice._id}`} method='post'>
            <input type='input' name='name' placeholder="cheese's name" defaultValue={slice.name}/>
            <input type='input' name='image' placeholder="cheese's picture" defaultValue={slice.image}/>
            <input type='input' name='country' placeholder="cheese's country" defaultValue={slice.countryOfOrigin}/>
            <input type='submit' value={`update ${slice.name}`}/>
        </Form>

        <h2>Delete Cheese</h2>
        <Form action={`/delete/${slice._id}`} method='post'>
            <input type='submit' value={`Delete ${slice.name}`}/>
        </Form>
       </div>
       
    )
}

export default Show