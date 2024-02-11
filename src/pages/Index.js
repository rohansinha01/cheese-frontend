import { Link, useLoaderData, Form } from "react-router-dom"

const Index = () => {
    const cheese = useLoaderData()
    console.log(cheese)
    return (
        <div>
            <h3>Add a Cheese</h3>
            <Form action='/create' method='post'>
            <input type='input' name='name' placeholder="cheese's name" />
            <input type='input' name='image' placeholder="cheese's picture" />
            <input type='input' name='country' placeholder="cheese's country" />
            <input type='submit' value={`Create cheese`}/>
            </Form>
            <h3>Cheese</h3>
            {cheese.map(slice => {
                return(
                    <div key={slice._id} className="slice">
                        <Link to={`/${slice._id}`}> 
                        <h1>{slice.name}</h1>
                        </Link>
                       
                        <img src={slice.image} alt={slice.name}/>
                        <h3>{slice.countryOfOrigin}</h3>

                    </div>
                )
            })}
        </div>
    )
        
    }

    export default Index