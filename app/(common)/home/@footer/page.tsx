export default function Footer() {
    return (
        <div>
            <footer className="bg-black text-white py-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-2xl mb-4">Glitz Brand</h1>
                    <p className="mb-8 px-6 text-justify lg:text-center">
                        GLITZ, the trendiest fashion brand from Bangladesh. We are inspired by our customers - souls full of unconventional fashion senses. We import and provide the best Cosmetics and Beauty products and fashionable Dresses also... We always ensure the quality of Our products & offering amazing value price.
                        <br /> <br />
                        Explore GLITZ and look through our windows for contemporary global fashion trends.
                    </p>
                    <div className="flex flex-col justify-center gap-y-4 lg:space-x-12 mb-8  justify-items-center lg:flex-row">
                        <div>
                            <h2 className="font-bold mb-2">SHIPPING & DELIVERY</h2>
                        </div>
                        <div>
                            <h2 className="font-bold mb-2">PROBLEM & RETURN</h2>
                        </div>
                        <div>
                            <h2 className="font-bold mb-2">BILLING & PAYMENT</h2>
                        </div>
                    </div>
                    <div className="border-t border-gray-600 py-4">
                        <p className="mb-4">Stay Connected</p>
                        <p className="mb-4">Facebook - Whatsapp - Messenger</p>
                        <div className="flex justify-center mb-4">
                            <img src="Glitz Brand Logo" alt="Glitz Brand Logo" className="h-10" />
                        </div>
                        <p>@2024 Glitz Brand. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
