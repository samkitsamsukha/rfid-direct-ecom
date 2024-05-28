"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { useRef } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Navbar = () => {
	const toggleCart = () => {
		if (ref.current.classList.contains("translate-x-full")) {
			ref.current.classList.remove("translate-x-full");
			ref.current.classList.add("translate-x-0");
		} else if (!ref.current.classList.contains("translate-x-full")) {
			ref.current.classList.add("translate-x-full");
			ref.current.classList.remove("translate-x-0");
		}
	};
	const ref = useRef();
	return (
		<div className="flex flex-col md:flex-row md:justify-between justify-center items-center bg-white py-2 shadow-md">
			<Link href={'/'}>
			<div className="logo mx-5 flex justify-start items-center space-x-4 text-3xl font-semibold">
				<Image src="/RFID.png" height={60} width={60} alt="RFID logo"></Image>
				<h1>RFID-Direct</h1>
			</div>
			</Link>
			<div className="nav mx-6">
				<ul className="flex justify-center flex-row items-center space-x-5">
					<Link href={"/contact"}>
						<li className="text-xl">Contact</li>
					</Link>
					<Link className="flex w-full items-center justify-center" href={"/about"}>
						<li className="text-xl">About</li>
					</Link>
					<button
					onClick={toggleCart}
					className="flex space-x-2 text-xl cursor-pointer"
				>
					<span>Cart</span>
					<IoMdCart size={25} />
				</button>
				</ul>
			</div>
			<div
				ref={ref}
				className=" w-96 h-[80vh] sidecart absolute top-0 right-0 z-10 shadow-md rounded-bl-2xl rounded-tl-2xl my-20 bg-pink-100 p-10 transform transition-transform translate-x-full duration-300 flex flex-col"
			>
				<h2 className="text-3xl font-bold text-center">Shopping Cart</h2>
				<span
					onClick={toggleCart}
					className="absolute top-2 right-2 text-2xl cursor-pointer text-pink-600"
				>
					<IoCloseSharp />
				</span>
				<ol className="list-decimal py-5">
					<li className="">
						<div className="item flex my-5">
							<div className="w-2/3 font-semibold">1. RFID Secure Locker</div>
							<div className="flex items-center justify-center w-1/3 font-semibold space-x-2">
								<FaCircleMinus
									className="cursor-pointer text-pink-600"
									size={15}
								/>
								<p>1</p>
								<FaCirclePlus
									className="cursor-pointer text-pink-600"
									size={15}
								/>
							</div>
						</div>
					</li>
				</ol>
				<button className="flex justify-center items-center text-center bg-pink-600 px-3 py-2 my-2 text-white font-semibold space-x-2 rounded-lg shadow-sm hover:bg-pink-500 duration-300">
					<span>Checkout</span>
					<MdShoppingCartCheckout size={20} />
				</button>
				<button className="flex justify-center items-center text-center bg-pink-600 px-3 py-2  text-white font-semibold space-x-2 rounded-lg shadow-sm hover:bg-pink-500 duration-300">
					<span>Clear Cart</span>
					<RiDeleteBin6Fill size={20}/>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
