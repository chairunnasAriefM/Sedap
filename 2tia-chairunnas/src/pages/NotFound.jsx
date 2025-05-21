export default function Error404() {
    return (

        <div className="bg-white h-screen flex flex-col items-center justify-center">
            <div className="flex justify-center mb-6">
                <img src="img/404.jpg" alt="404Img" className="max-w-sm w-full" />
            </div>

            <div className="text-center space-y-2">
                <p className="text-5xl text-blue-600 font-bold">Oops!</p>
                <p className="font-semibold text-4xl">Page Not Found</p>
                <p className="text-3xl font-medium">Looks Like Something went Wrong Completely</p>
                <a
                    id="button"
                    href="/"
                    className="bg-blue-600 text-white inline-block hover:bg-blue-700 px-6 py-2 rounded-lg transition mt-4"
                >
                    Go back Home
                </a>
            </div>
        </div>

    )
}