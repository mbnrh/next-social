import Image from "next/image"
import Comments from "./Comments"

const Post = () => {
    return (
        <div className="flex flex-col gap-4">
            {/*USER*/}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image src="https://images.pexels.com/photos/25643174/pexels-photo-25643174/free-photo-of-back-view-of-couple-of-graduates-crossing-street.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
                    <span className="font-medium">Jack McBride</span>
                </div>
                <Image src="/more.png" alt="" width={16} height={16}/>
            </div>
            {/*DESC*/}
            <div className="flex flex-col gap-4">
                <div className="w-full min-h-96 relative">
                <Image src="https://images.pexels.com/photos/21802316/pexels-photo-21802316/free-photo-of-italy.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" fill className="object-cover rounded-md" alt="" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quas at eveniet possimus molestias enim eum mollitia ipsum inventore animi sit architecto sapiente, 
                    cupiditate quis? Quidem eligendi quod fugit itaque possimus!</p>
            </div>
            {/*INTERACTION*/}
            <div className="flex items-center justify-between text-sm my-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/like.png" alt="" width={16} height={16} className="cursor-pointer"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Likes</span></span>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/comment.png" alt="" width={16} height={16} className="cursor-pointer"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Comments</span></span>
                    </div>
                </div>
                <div className="">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                        <Image src="/share.png" alt="" width={16} height={16} className="cursor-pointer"/>
                        <span className="text-gray-300">|</span>
                        <span className="text-gray-500">123<span className="hidden md:inline"> Shares</span></span>
                    </div>
                </div>
            </div>
            <Comments/>
        </div>
    )
}

export default Post