import Image from "next/image"
import Link from "next/link"

const UserMediaCard = ({userId}:{userId:string}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
            {/*TOP*/}
            <div className="flex justify-between items-center font-medium">
                <span className="text-gray-500">User Media</span>
                <Link href="/" className="text-blue-500 text-xs">See all</Link>
            </div>
            {/*BOTTOM*/}
            <div className="flex gap-4 justify-between flex-wrap">
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/15818869/pexels-photo-15818869/free-photo-of-person-riding-extremely-packed-bike.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/26312401/pexels-photo-26312401/free-photo-of-city.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/6778719/pexels-photo-6778719.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/26246120/pexels-photo-26246120/free-photo-of-a-woman-in-a-wedding-dress-is-running-through-a-field.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/26223115/pexels-photo-26223115/free-photo-of-venice-italy.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/24801747/pexels-photo-24801747/free-photo-of-a-building-with-a-yellow-roof-and-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/15818869/pexels-photo-15818869/free-photo-of-person-riding-extremely-packed-bike.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
                <div className="relative w-1/5 h-24">
                    <Image src="https://images.pexels.com/photos/15818869/pexels-photo-15818869/free-photo-of-person-riding-extremely-packed-bike.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" alt="" fill className="object-cover rounded-md"/>
                </div>
            </div>
        </div>
    )
}

export default UserMediaCard