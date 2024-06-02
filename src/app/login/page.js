import React from "react";
import Link from "next/link";

const Login = () => {
	return (
			<div className="flex justify-center items-center my-auto bg-gray-100 h-[82vh]">
				<div className="mx-16 lg:mx-0 bg-white lg:p-18 md:p-26 sm:20 p-8 w-full lg:w-1/2 border-[1px] rounded-lg border-pink-600">
					<h1 className="text-2xl font-semibold mb-4">Login</h1>
					<form action="#" method="POST">
						<div className="mb-4">
							<label htmlFor="username" className="block text-gray-600">
								Username
							</label>
							<input
								type="text"
								id="username"
								name="username"
								className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-500"
								autocomplete="off"
							/>
						</div>

						<div className="mb-4">
							<label htmlFor="password" className="block text-gray-600">
								Password
							</label>
							<input
								type="password"
								id="password"
								name="password"
								className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-500"
								autocomplete="off"
							/>
						</div>

						<div className="mb-4 flex justify-between items-center">
							<div>
              <input
								type="checkbox"
								id="remember"
								name="remember"
								className="text-pink-500"
							/>
							<label htmlFor="remember" className="text-gray-600 ml-2">
								Remember Me
							</label>
              </div>
              <Link href={'/forgot'} className="text-pink-600">
                Forgot Password?
              </Link>
						</div>

						<div className="mb-6 text-pink-500">
							
						</div>

						<button
							type="submit"
							className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md py-2 px-4 w-full"
						>
							Login
						</button>
					</form>

					<div className="mt-6 text-pink-500 text-center">
						<Link href={'/signup'} className="focus:underline hover:underline">
              Sign up here
            </Link>
					</div>
				</div>
			</div>
	);
};

export default Login;
