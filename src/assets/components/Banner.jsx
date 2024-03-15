const Banner = () => {
    return (
        <div className="container mx-auto lg:mt-10 w-full">
            <div className="hero bg-cover bg-center lg:p-32" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="text-center">
                    <h1 className="mb-5 text-5xl font-bold text-black">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="text-black">Embark on a culinary journey filled with excitement and discovery with our Kitchen Adventures recipes. From the sizzle of exotic spices to the comforting aroma of familiar favorites, each dish is a passport to new flavors and experiences. </p>
                    <div className="space-x-5 mt-10">
                        <button className="btn btn-accent rounded-full font-bold">Explore Now</button>
                        <button className="btn btn-ghost text-white border border-white rounded-full font-bold">Our Feedback</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;