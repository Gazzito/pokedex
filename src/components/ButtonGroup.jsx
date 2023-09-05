import { Button, Typography } from "@material-tailwind/react"

const ButtonGroup = () => {
    return <>

    <div className="pt-10 px-10">
    <div className="flex bg-white p-5">
        <Button className="w-6/12 bg-yellow rounded-none hover:bg-primary "><Typography variant="h3">All Pokemons</Typography></Button>
        <Button className="w-6/12 bg-yellow rounded-none hover:bg-primary "><Typography variant="h3">My Favourites</Typography></Button>
    </div>
    </div>
    
    </>

}

export default ButtonGroup;