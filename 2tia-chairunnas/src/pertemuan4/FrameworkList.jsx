import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="p-8">
            {frameworkData.map((item) => (
                <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                    <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-gray-600">Developed by <b>{item.details.developer}</b> ({item.details.releaseYear})</p>
                    <a className="text-blue-400 underline mb-4  " href={item.details.officialWebsite}> Visit Website</a>
                    <div className="mt-2 text-gray-600 font-medium">
                        {item.tags.map((tag, index) => (
                            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>


            ))}

        </div>
    )
}

