import React from 'react'
import Link from 'next/link'

const Signup = () => {
  return (
    <div>
      <div className="flex justify-center items-center my-auto bg-gray-100 h-[82vh]">
				<div className="mx-16 lg:mx-0 bg-white lg:p-18 md:p-26 sm:20 p-8 w-full lg:w-1/2 border-[1px] rounded-lg border-pink-600">
					<h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
					<form action="#" method="POST">
						<div className="mb-4">
							<label htmlFor="email" className="block text-gray-600">
								E-mail
							</label>
							<input
								type="text"
								id="email"
								name="email"
								className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-500"
								autocomplete="off"
                placeholder='Your email address here'
							/>
						</div>

            <div className="mb-4">
							<label htmlFor="name" className="block text-gray-600">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-pink-500"
								autocomplete="off"
                placeholder='Your name here'
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
                placeholder='Enter password'
							/>
						</div>

						<div className="mb-6 text-pink-500">
							
						</div>

						<Link href={'/'} className="flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md py-2 px-4 w-full">
							Signup
						</Link>
					</form>

					<div className="mt-6 text-pink-500 text-center">
						<Link href={'/signup'} className="focus:underline hover:underline">
              Login here
            </Link>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Signup
