import Image from 'next/image';
import React, { FC } from 'react'

type CarrouselTypes = {
    image: {
        url: string;
        alt?: string;
    }
}


const PetCarrousel: FC<CarrouselTypes> = ({ image }) => {
    return (
        <div>PetCarrousel
            <Image alt={image.alt || "image of a dog"} src={image.url} fill={true} />
        </div>
    )
}

export default PetCarrousel