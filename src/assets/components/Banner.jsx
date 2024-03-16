const Banner = () => {
    return (
        <div className="container mx-auto lg:mt-10 w-full">
            <div className=" bg-cover bg-center lg:p-32 rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/RN9FSnZ/Rectangle-1.png)' }}>
                <div className="text-center">
                    <h1 className="mb-5 text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-white">Embark on a culinary journey filled with excitement and discovery with our Kitchen Adventures recipes. From the sizzle of exotic spices to the comforting aroma of familiar favorites, each dish is a passport to new flavors and experiences. </p>
                    <div className="space-x-5 mt-5 lg:mt-10">
                        <button className="btn btn-accent rounded-full font-bold">Explore Now</button>
                        <button className="btn btn-ghost text-white border border-white rounded-full font-bold">Our Feedback</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;