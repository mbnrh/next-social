import Image from "next/image"

const  Stories = () => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide">
            <div className="flex gap-8 w-max">
                {/*STORY*/}
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/19915666/pexels-photo-19915666/free-photo-of-back-view-of-man-walking-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/14664613/pexels-photo-14664613.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/19915666/pexels-photo-19915666/free-photo-of-back-view-of-man-walking-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/20888052/pexels-photo-20888052/free-photo-of-sunset-in-zurich.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                    <span className="font-medium">Ricky</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer">
                    <Image src="https://images.pexels.com/photos/19915666/pexels-photo-19915666/free-photo-of-back-view-of-man-walking-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" width={80} height={80} className="w-20 h-20 rounded-full ring-2"/>
                    <span className="font-medium">Ricky</span>
                </div>
            </div>
        </div>
    )
}

export default Stories