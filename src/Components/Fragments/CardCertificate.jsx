import Image from "next/image"

const CardCertificate = ({item}) => {
    return(
        <div className="">
            <Image src={item.image} className="object-contain max-w-[270px] h-[200px] p-2 rounded-lg bg-yellow-600" alt=""/>
        </div>
    )
}

export default CardCertificate