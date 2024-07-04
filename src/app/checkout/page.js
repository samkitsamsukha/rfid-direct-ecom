"use client"

import React from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import Link from "next/link";
import { MdShoppingCartCheckout } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import Script from "next/script";

const Checkout = () => {

	const addNotif = () => {
		toast.success("Added to cart successfully", {
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

	const removeNotif = () => {
		toast.success("Removed from cart successfully", {
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

	const cartClearNotif = () => {
		toast.success("Cart cleared successfully", {
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

  const { cart, addToCart, removeFromCart, clearCart, subTotal } = useContext(CartContext);

	return (
		<div className="container px-32 mb-32">
			<Head><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/></Head>
			<Script></Script>
			<h1 className="text-3xl font-bold my-8 text-center">Checkout</h1>
			<h2 className="font-semibold text-xl">1. Delivery Details</h2>
			<div className="mx-auto flex my-4 space-x-6">
				<div className="px-1/2 w-1/2">
					<div className=" mb-4">
						<label htmlFor="name" className="leading-7 text-sm text-gray-600">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
				<div className="px-1/2 w-1/2">
					<div className=" mb-4">
						<label htmlFor="email" className="leading-7 text-sm text-gray-600">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
			</div>
			<div className="px-1/2 w-full">
				<div className=" mb-4">
					<label htmlFor="address" className="leading-7 text-sm text-gray-600">
						Address
					</label>
					<textarea
						name="address"
						id="address"
						cols="30"
						rows="2"
						className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					></textarea>
				</div>
			</div>
      <div className="mx-auto flex my-4 space-x-6">
				<div className="px-1/2 w-1/2">
					<div className=" mb-4">
						<label htmlFor="phone" className="leading-7 text-sm text-gray-600">
							Contact Number
						</label>
						<input
							type="number"
							id="phone"
							name="phone"
							className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
				<div className="px-1/2 w-1/2">
					<div className=" mb-4">
						<label htmlFor="city" className="leading-7 text-sm text-gray-600">
							City
						</label>
						<input
							type="text"
							id="city"
							name="city"
							className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
			</div>
      <div className="mx-auto flex my-4 space-x-6">
				<div className="px-1/2 w-1/2">
					<div className=" mb-4">
						<label htmlFor="state" className="leading-7 text-sm text-gray-600">
							State
						</label>
						<input
							type="text"
							id="state"
							name="state"
							className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
				<div className="px-1/2 w-1/2">
					<div className=" mb-4">
						<label htmlFor="pincode" className="leading-7 text-sm text-gray-600">
							Pincode
						</label>
						<input
							type="number"
							id="pincode"
							name="pincode"
							className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						/>
					</div>
				</div>
			</div>

      <h2 className="font-semibold text-xl">2. Review Cart Items</h2>

      <div className="w-1/2 mt-4 h-auto sidecart z-10 shadow-md rounded-bl-2xl rounded-tl-2xl bg-pink-50 px-10 pb-5 mb-5 flex flex-col">  
				<ol className="list-decimal py-2">
					{Object.keys(cart).length == 0 && (
						<div className="my-4 text-base font-semibold">
							Your cart is empty.
						</div>
					)}
					{Object.keys(cart).map((k) => {
						return (
							<li className="" key={k}>
								<div className="item flex my-4 justify-around">
									<div className="w-3/4 font-semibold">{cart[k].name}</div>
									<div className="flex items-center justify-center w-1/4 font-semibold space-x-2">
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
												removeNotif();
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
												addNotif();
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
					<p>Subtotal</p>
					<p>Rs. {subTotal}</p>
				</div>
			</div>
      <div>
      <Link href={'/checkout'} className="flex justify-center items-center p-2">
					<button  className="flex justify-center items-center text-center bg-pink-600 px-3 py-2 my-2 text-white font-semibold space-x-2 rounded-lg shadow-sm hover:bg-pink-500 duration-300 w-fit  ">
						<span>Pay</span>
						<FaIndianRupeeSign size={15} />
            <span>{subTotal}</span>
					</button>
				</Link>
      </div>

		</div>
	);
};

export default Checkout;
