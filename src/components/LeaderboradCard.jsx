export default function LeaderBoradCard({ image, name, points }) {
    return (
        <div className="flex gap-4 items-center my-3">
            <div className="h-10 w-10 rounded-full">
                <img src={image} alt={name} className="h-[100%] w-[100%] object-cover rounded-full" />
            </div>
            <div>
                <h1 className="font-semibold">{name}</h1>
                <h3 className="text-gray-500 font-semibold text-[.8rem]">{points}</h3>
            </div>
        </div>
    )
}