"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { useRef } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../src/context/CartContext";
import { MdAccountCircle } from "react-icons/md";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const Navbar = () => {
	const { cart, addToCart, removeFromCart, clearCart, subTotal } =
		useContext(CartContext);
	// console.log(cart, addToCart, removeFromCart, clearCart, subTotal)
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
		<div className="flex flex-col md:flex-row md:justify-between justify-center items-center bg-white py-2 shadow-md overflow-hidden">
			<Link href={"/"}>
				<div className="logo mx-5 flex justify-start items-center space-x-4 text-3xl font-semibold">
					<Image src="/RFID.png" height={60} width={60} alt="RFID logo"></Image>
					<h1>RFID-Direct</h1>
				</div>
			</Link>
			<div className="nav mx-6">
				<ul className="flex font-semibold justify-center flex-row items-center space-x-8">
					<Link
						href={"/contact"}
						className="flex font-semibold space-x-2 items-center cursor-pointer"
					>
						<span className="">Contact</span>
						<IoMdCall size={20} />
					</Link>
					<Link
						className="flex font-semibold  w-full items-center space-x-2"
						href={"/about"}
					>
						<span className="">About</span>
						<MdGroups size={25} />
					</Link>
					<button
						onClick={toggleCart}
						className="flex font-semibold space-x-2 text-red-950 items-center cursor-pointer"
					>
						<span>Cart</span>
						<IoMdCart size={20} />
					</button>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<Link href={"/login"}>
									<MdAccountCircle size={40} color="#e91e63" />
								</Link>
							</TooltipTrigger>
							<TooltipContent>
								<button className="flex mr-6 font-semibold space-x-2 cursor-pointer items-center text-pink-500">
									<span>Favourites</span>
									<FaHeart size={20} />
								</button>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
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
					{Object.keys(cart).length == 0 && (
						<div className="my-4 text-base font-semibold">
							Your cart is empty.
						</div>
					)}
					{Object.keys(cart).map((k) => {
						return (
							<li className="" key={k}>
								<div className="item flex my-5">
									<div className="w-2/3 font-semibold">{cart[k].name}</div>
									<div className="flex items-center justify-center w-1/3 font-semibold space-x-2">
										<FaCircleMinus
											onClick={() => {
												removeFromCart(
													k,
													1,
													cart[k].price,
													cart[k].name,
													cart[k].size,
													cart[k].variant
												);
											}}
											className="cursor-pointer text-pink-600"
											size={15}
										/>
										<p>{cart[k].qty}</p>
										<FaCirclePlus
											onClick={() => {
												addToCart(
													k,
													1,
													cart[k].price,
													cart[k].name,
													cart[k].size,
													cart[k].variant
												);
											}}
											className="cursor-pointer text-pink-600"
											size={15}
										/>
									</div>
								</div>
							</li>
						);
					})}
				</ol>
				<div className="flex justify-between text-xl font-bold py-2 px-4 bg-pink-300 rounded">
					<p>Total Amt</p>
					<p>Rs. {subTotal}</p>
				</div>
				<Link href={"/checkout"}>
					<button
						onClick={toggleCart}
						className="flex justify-center items-center text-center bg-pink-600 px-3 py-2 my-2 text-white font-semibold space-x-2 rounded-lg shadow-sm hover:bg-pink-500 duration-300 w-full"
					>
						<span>Checkout</span>
						<MdShoppingCartCheckout size={20} />
					</button>
				</Link>
				<button
					onClick={clearCart}
					className="flex justify-center items-center text-center bg-pink-600 px-3 py-2  text-white font-semibold space-x-2 rounded-lg shadow-sm hover:bg-pink-500 duration-300"
				>
					<span>Clear Cart</span>
					<RiDeleteBin6Fill size={20} />
				</button>
			</div>
		</div>
	);
};

export default Navbar;
