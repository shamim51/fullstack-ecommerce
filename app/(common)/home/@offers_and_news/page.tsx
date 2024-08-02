import Image from "next/image";


export default async function Offers_and_News() {


    return(
        <div className="flex flex-col items-center mx-5 my-4">
            <h1 className="text-2xl text-center font-black my-7">News & Offers</h1>
            <Image
                alt="Card background"
                className="object-cover"
                src="/cover.avif"
                width={600}
                height={200}
            />
</div>

    )
}

