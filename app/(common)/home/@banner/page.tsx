import Image from "next/image";

export default function BannerPage(){
    return(
        <div className="bg-green-200 ">
            <Image
                alt="Card background"
                className="object-cover w-full"
                src="/cover.avif"
                width={300}
                height={150}
            />
        </div>
    )
}