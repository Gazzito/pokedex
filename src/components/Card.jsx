import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";

const CardPokemon = () => {
    return <>
     <Card className="mt-2 w-60 max-w-60 h-64 max-h-64 flex justify-center items-center">
      <CardHeader className="bg-primary w-52 flex justify-center items-center">
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
          alt="card-image"
          className="w-44"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray">
          Spearow
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 px-0 w-52">
        <Button className="bg-gray-dark w-full">More Details</Button>
      </CardFooter>
    </Card>
    </>

}

export default CardPokemon;