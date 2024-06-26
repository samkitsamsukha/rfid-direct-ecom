"use client";

import React from "react";
import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";
import { IoMdAlert } from "react-icons/io";
import { MdVerified } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SecureLocker = () => {
	const { cart, addToCart, removeFromCart, clearCart, subTotal } =
		useContext(CartContext);

	const [pin, setPin] = useState();
	const [serviceability, setServiceability] = useState();

	const checkServiceability = async () => {
		//asynchronous function keeps running in the background
		let pins = await fetch("http://localhost:3000/api/pincode"); // go to next line only after this fetching is complete
		let pinJson = await pins.json(); // go to next line only after json conversion is complete
		if (pinJson.includes(pin)) {
			setServiceability(true);
			availNotif();
		} else {
			setServiceability(false);
			unavailNotif();
		}
	};

	const onChangePin = (e) => {
		setPin(e.target.value); //
	};

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

	const addNotif = () => {
		toast.success('Added to cart successfully', {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: "colored",
			transition: Slide,
			});
	};

	const availNotif = () => {
		toast.success('Delivery is available at this pincode', {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: "colored",
			transition: Slide,
			});
	}

	const unavailNotif = () => {
		toast.error('Delivery is not available at this pincode', {
			position: "bottom-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: "colored",
			transition: Slide,
			});
	}

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
							<div className="flex mt-6 items-center jus pb-5 border-b-2 border-gray-100 mb-5">
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
							<div className="flex justify-between">
								<span className="flex items-center justify-center title-font font-medium text-2xl text-gray-900">
									<div className="flex items-center  mt-[5px]">
										<FaIndianRupeeSign size={20} />
									</div>{" "}
									<div className="h-full flex items-center justify-center">
										1999
									</div>
								</span>
								<div className="flex space-x-4">
									<button className="flex ml-auto text-white bg-pink-600 border-0 md:py-2 p-2 md:px-6 focus:outline-none hover:bg-pink-400 duration-300 rounded">
										Buy Now
									</button>
									<button
										onClick={() => {
											addNotif();
											addToCart(
												"locker",
												1,
												1999,
												"RFID Secure Locker",
												"SM",
												"brown"
											);
										}}
										className="flex ml-auto text-white bg-pink-600 border-0 md:py-2 p-2 md:px-6 focus:outline-none hover:bg-pink-400 duration-300 rounded"
									>
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
							<div className="pincode flex space-x-2 justify-start mt-4">
								<input
									onChange={onChangePin}
									className="px-2 w-2/3 shadow-sm border-[1px] border-black text-sm bg-pink-50 rounded"
									type="text"
									placeholder="Enter your pincode to check serviceability"
								/>
								<button
									onClick={checkServiceability}
									className="flex shadow-sm ml-auto text-white bg-pink-600 border-0 text-sm p-2 md:py-2 md:px-6 focus:outline-none hover:bg-pink-400 duration-300 rounded"
								>
									Check Pincode
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ToastContainer />
		</div>
	);
};

export default SecureLocker;
