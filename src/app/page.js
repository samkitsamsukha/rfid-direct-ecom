"use client"
import Link from "next/link";
import { motion } from "framer-motion"

export default function Home() {
	return (
		<>
			<div className="mx-4 md:mx-32 mt-10">
				<motion.h1 
					whileInView={{x: 0, opacity: 1}}
					initial={{x: -100, opacity: 0}}
					transition={{duration: 0.5}}
					className="text-4xl font-semibold text-indigo-800 p-2">Welcome, Customer</motion.h1>
				<motion.p
					whileInView={{x: 0, opacity: 1}}
					initial={{x: -100, opacity: 0}}
					transition={{duration: 0.5}}
					className="text-xl p-2">RFID-Direct puts forward multiple products based on the RFID technology at a very affordable price and guarantees good quality along with robust security. Click on Check Out to get a detailed view of the product and choose the different variants and colours.</motion.p>
			</div>
			<section className="text-gray-600 body-font">
				<motion.div 
					whileInView={{y: 0, opacity: 1}}
					initial={{y: 100, opacity: 0}}
					transition={{duration: 0.5}}
					className="container px-5 py-12 mx-auto">
					<div className="flex flex-wrap -m-4">
						<div className="p-4 lg:w-1/3">
							<div className="h-full bg-green-100 shadow-md bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
								<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
									Security
								</h2>
								<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
									RFID Secure Locker
								</h1>
								<p className="leading-relaxed mb-3">
									A secure locker made using RFID technology which grants access
									to authorized personel only.
								</p>
								<Link
									href={"/securelocker"}
									className="text-indigo-500 inline-flex items-center"
								>
									Check Out
									<svg
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M5 12h14"></path>
										<path d="M12 5l7 7-7 7"></path>
									</svg>
								</Link>
							</div>
						</div>
						<div className="p-4 lg:w-1/3">
							<div className="h-full bg-yellow-100 shadow-md bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
								<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
									Furniture
								</h2>
								<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
									RFID Enabled Smart Door
								</h1>
								<p className="leading-relaxed mb-3">
									Smart Door which has been manufactured using RFID and can be
									opened/locked via a smart card.
								</p>
								<Link
									href={"/smartdoor"}
									className="text-indigo-500 inline-flex items-center"
								>
									Check Out
									<svg
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M5 12h14"></path>
										<path d="M12 5l7 7-7 7"></path>
									</svg>
								</Link>
							</div>
						</div>
						<div className="p-4 lg:w-1/3">
							<div className="h-full bg-blue-100 shadow-md bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
								<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
									Appliance
								</h2>
								<h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
									Inventory Management Reader
								</h1>
								<p className="leading-relaxed mb-3">
									RFID based Scanner which helps connect with RF Tags and store
									information.
								</p>
								<Link
									href={"/inventorymanagement"}
									className="text-indigo-500 inline-flex items-center"
								>
									Check Out
									<svg
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M5 12h14"></path>
										<path d="M12 5l7 7-7 7"></path>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</motion.div>
			</section>
		</>
	);
}
