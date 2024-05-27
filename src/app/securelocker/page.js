"use client";

import React from "react";
import Image from "next/image";
import { useRef } from "react";

const SecureLocker = () => {
	const turnPink = () => {
		if (ref.current.classList.contains("text-gray-500")) {
			ref.current.classList.remove("text-gray-500");
			ref.current.classList.remove("bg-gray-200");
			ref.current.classList.add("text-pink-500");
			ref.current.classList.add("bg-pink-200");
		} else if (!ref.current.classList.contains("text-pink-gray")) {
			ref.current.classList.add("text-gray-500");
			ref.current.classList.add("bg-gray-200");
			ref.current.classList.remove("text-pink-500");
			ref.current.classList.remove("bg-pink-200");
		}
	};
	const ref = useRef();
	return (
		<div>
			<section className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto">
					<div className="lg:w-4/5 mx-auto flex flex-wrap">
						<Image
							src="/securelocker.jpg"
							alt="RFID Secure Locker"
							width={400}
							height={256}
							className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
						></Image>
						<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
							<h2 className="text-sm title-font text-gray-500 tracking-widest">
								SECURITY
							</h2>
							<h1 className="text-gray-900 text-3xl title-font font-medium mb-5">
								RFID Secure Locker
							</h1>
							<p className="leading-relaxed">
								RFID Enabled Secure Locker which has been built in such a way
								that it can be opened/accessed only by tapping the smart card.
								This feature makes it robust and it allows great safety and
								performance. The build quality is amazing and is absolutely
								reliable.
							</p>
							<div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
								<div className="flex">
									<span className="mr-3">Color</span>
									<button className="border-2 border-gray-300  bg-amber-950 rounded-full w-6 h-6 focus:outline-none"></button>
									<button className="border-2 border-gray-300 ml-1 bg-slate-900 rounded-full w-6 h-6 focus:outline-none"></button>
									<button className="border-2 border-gray-300 ml-1 bg-red-900 rounded-full w-6 h-6 focus:outline-none"></button>
								</div>
								<div className="flex ml-6 items-center">
									<span className="mr-3">Size</span>
									<div className="relative">
										<select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
											<option>SM</option>
											<option>M</option>
											<option>L</option>
											<option>XL</option>
										</select>
										<span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-4 h-4"
												viewBox="0 0 24 24"
											>
												<path d="M6 9l6 6 6-6"></path>
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div className="flex">
								<span className="title-font font-medium text-2xl text-gray-900">
									Rs. 2000
								</span>
								<button className="flex ml-auto text-white bg-pink-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
									Add to Cart
								</button>
								<button
									ref={ref}
									onClick={turnPink}
									className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 duration-300"
								>
									<svg
										fill="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default SecureLocker;
