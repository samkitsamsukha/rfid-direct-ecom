import Image from "next/image";
import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Orders = () => {
	return (
		<div>
			<section className="text-gray-600 body-font overflow-hidden">
				<div className="container px-5 py-24 mx-auto">
					<div className="lg:w-4/5 mx-auto flex flex-wrap">
						<div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
							<h2 className="text-sm title-font text-gray-500 tracking-widest">
								RFID-Direct
							</h2>
							<h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
								Order Id:
							</h1>
							<p className="leading-relaxed mb-4">
								Your order has been successfully placed
							</p>
							<div className="flex mb-4 justify-around text-center">
								<a className="flex-grow text-pink-500 border-b-2 border-pink-500 py-2 text-lg px-1">
									Description
								</a>
								<a className="flex-grow  text-pink-500 border-b-2 border-pink-500 py-2 text-lg px-1">
									Quantity
								</a>
								<a className="flex-grow   text-pink-500 border-b-2 border-pink-500 py-2 text-lg px-1">
									Item Total
								</a>
							</div>
							<div className="flex w-full py-2 text-center">
								<span className="w-1/3 text-gray-500">RFID Secure Locker</span>
								<span className="w-1/3 text-gray-900">1</span>
								<span className="w-1/3 text-gray-900 flex items-center justify-center font-medium">
									<FaIndianRupeeSign size={13} />
									<p>1999</p>
								</span>
							</div>
							<div className="flex w-full py-2 text-center">
								<span className="w-1/3 text-gray-500">RFID Secure Locker</span>
								<span className="w-1/3 text-gray-900">1</span>
								<span className="w-1/3 text-gray-900 flex items-center justify-center font-medium">
									<FaIndianRupeeSign size={13} />
									<p>1999</p>
								</span>
							</div>
							<div className="flex w-full py-2 text-center">
								<span className="w-1/3 text-gray-500">RFID Secure Locker</span>
								<span className="w-1/3 text-gray-900">1</span>
								<span className="w-1/3 text-gray-900 flex items-center justify-center font-medium">
									<FaIndianRupeeSign size={13} />
									<p>1999</p>
								</span>
							</div>
							<div className="flex items-center title-font text-xl font-semibold text-gray-900">
								<p>Subtotal -</p>
								<p>
									<FaIndianRupeeSign />
								</p>
								<p>58.00</p>
								<button className="flex ml-auto text-base text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
									Track Order
								</button>
							</div>
						</div>
						<Image
							alt="ecommerce"
							className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
							width={200}
							height={200}
							src="/pending.jpg"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Orders;
