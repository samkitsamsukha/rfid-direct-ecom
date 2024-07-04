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
import { motion } from "framer-motion";

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
				<div className="container px-5 py-24 mx-auto flex flex-col space-y-10">
					<div className="lg:w-4/5 mx-auto flex flex-wrap">
						<Image
							whileInView={{x: 0, opacity: 1}}
							initial={{x: -100, opacity: 0}}
							transition={{duration: 0.5}}
							src="/securelocker.jpg"
							alt="RFID Secure Locker"
							width={400}
							height={256}
							className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
						></Image>
						<div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
							<motion.h2 
								whileInView={{x: 0, opacity: 1}}
								initial={{x: 100, opacity: 0}}
								transition={{duration: 0.5}}
								className="text-sm title-font text-gray-500 tracking-widest">
								SECURITY
							</motion.h2>
							<motion.h1 
								whileInView={{x: 0, opacity: 1}}
								initial={{x: 100, opacity: 0}}
								transition={{duration: 0.5}}
								className="text-gray-900 text-3xl title-font font-medium mb-5">
								RFID Secure Locker
							</motion.h1>
							<motion.p 
								whileInView={{x: 0, opacity: 1}}
								initial={{x: 100, opacity: 0}}
								transition={{duration: 0.5}}
								className="leading-relaxed">
								RFID Enabled Secure Locker which has been built in such a way
								that it can be opened/accessed only by tapping the smart card.
								This feature makes it robust and it allows great safety and
								performance. The build quality is amazing and is absolutely
								reliable.
							</motion.p>
							<motion.div 
								whileInView={{x: 0, opacity: 1}}
								initial={{x: 100, opacity: 0}}
								transition={{duration: 0.5}}
								className="flex mt-6 items-center jus pb-5 border-b-2 border-gray-100 mb-5">
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
							</motion.div>
							<motion.div 
								whileInView={{y: 0, opacity: 1}}
								initial={{y: 100, opacity: 0}}
								transition={{duration: 0.5}}
								className="flex justify-between">
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
							</motion.div>
							<motion.div 
								whileInView={{y: 0, opacity: 1}}
								initial={{y: 100, opacity: 0}}
								transition={{duration: 0.5}}
								className="pincode flex space-x-2 justify-start mt-4">
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
							</motion.div>
						</div>
					</div>
					<div className="lg:w-4/5 mx-auto flex flex-col space-y-1">
						<motion.div 
							whileInView={{x: 0, opacity: 1}}
							initial={{x: -100, opacity: 0}}
							transition={{duration: 0.5}}
							className="text-2xl font-semibold text-black">
							Product Details
						</motion.div>
						<motion.div whileInView={{x: 0, opacity: 1}}
							initial={{x: -100, opacity: 0}}
							transition={{duration: 0.5}} className="text-xl font-semibold text-black py-2">Key Features</motion.div>
						<motion.div whileInView={{x: 0, opacity: 1}}
							initial={{x: -100, opacity: 0}}
							transition={{duration: 0.5}} className="text-base">
							<ul>
								<li><span className="font-semibold text-pink-700">RFID-Technology:</span> Effortlessly scan and authenticate RFID cards.
								</li>
								<li><span className="font-semibold text-pink-700">Automatic Software Reset: </span> Ensures all components return to their initial states, preventing any operation hiccups.
								</li>
								<li><span className="font-semibold text-pink-700">Physical Reset Switch: </span> Provides a manual backup for resetting the system.
								</li>
								<li><span className="font-semibold text-pink-700">Secure Access: </span> Only pre-authorized RFID cards can activate the relay, unlocking the solenoid.
								</li>
								<li><span className="font-semibold text-pink-700">Visual and Audible Indicators: </span> Green LED and buzzer for access granted, red LED and buzzer for access denied.
								</li>
								<li><span className="font-semibold text-pink-700">Compact and Durable Design: </span> Built to fit seamlessly into cupboards and other storage solutions. 
								</li>
								<li><span className="font-semibold text-pink-700">Customizable UID: </span> Easily update the authorized RFID card UID in the code.
								</li>
							</ul>
						</motion.div>
						<motion.div whileInView={{x: 0, opacity: 1}}
							initial={{x: -100, opacity: 0}}
							transition={{duration: 0.5}} className="text-xl font-semibold text-black py-2">Specifications</motion.div>
						<motion.div whileInView={{x: 0, opacity: 1}}
							initial={{x: -100, opacity: 0}}
							transition={{duration: 0.5}}>
							Power Supply: 12V DC (via USB or external adapter)
						</motion.div>
						<motion.div whileInView={{x: 0, opacity: 1}}
							initial={{x: -100, opacity: 0}}
							transition={{duration: 0.5}} className="text-xl font-semibold text-black py-2">Package Includes</motion.div>
						<motion.div whileInView={{x: 0, opacity: 1}}
							initial={{x: -100, opacity: 0}}
							transition={{duration: 0.5}}>
							<table cellPadding={2} className="border border-gray-400">
								<thead>
								<tr>
									<th>Item</th>
									<th className="border border-gray-400 px-4">Quantity</th>
								</tr>
								</thead>
								<tbody>
								<tr>
									<td className="border border-gray-400 px-4">RFID Access Control System (assembled)</td>
									<td className="border border-gray-400 px-4">1</td>
								</tr>
								<tr>
									<td className="border border-gray-400 px-4">Authorized RFID Card</td>
									<td className="border border-gray-400 px-4">1</td>
								</tr>
								<tr>
									<td className="border border-gray-400 px-4">USB Power Cable</td>
									<td className="border border-gray-400 px-4">1</td>
								</tr>
								<tr>
									<td className="border border-gray-400 px-4">User Manual</td>
									<td className="border border-gray-400 px-4">1</td>
								</tr>
								</tbody>
							</table>
						</motion.div>
						<motion.div whileInView={{x: 0, opacity: 1}}
							initial={{x: -100, opacity: 0}}
							transition={{duration: 0.5}} className="text-xl font-semibold text-black py-2">Usage Instructions</motion.div>
						<motion.div whileInView={{x: 0, opacity: 1}}
							initial={{x: -100, opacity: 0}}
							transition={{duration: 0.5}}>
						1. Power On: Connect the system to a 12V power supply using the provided DC Barrel cable.
<br/>2. Present RFID Card: Place the authorized RFID card near the reader to unlock.
<br/>3. Access Granted: Green LED lights up, and the solenoid unlocks for 1 second.
<br/>4. Access Denied: Red LED lights up, and the buzzer sounds.
<br/>5. Reset Options: The system automatically resets after each card scan. Use the physical reset switch if needed. 
						</motion.div>
						<motion.div whileInView={{x: 0, opacity: 1}}
							initial={{x: -100, opacity: 0}}
							transition={{duration: 0.5}} className="text-xl font-semibold text-black py-2">Benefits</motion.div>
						<motion.div whileInView={{x: 0, opacity: 1}}
							initial={{x: -100, opacity: 0}}
							transition={{duration: 0.5}}>
						Enhanced Security: Reliable access control with authorized RFID cards.
<br/>Smooth Operation: Automated reset ensures no component gets stuck.
<br/>User-Friendly: Simple setup and operation with visual and audible feedback.
<br/>Versatile: Suitable for various secure storage applications.
						</motion.div>
					</div>
						
					</div>
			</section>
			<ToastContainer />
		</div>
	);
};

export default SecureLocker;
