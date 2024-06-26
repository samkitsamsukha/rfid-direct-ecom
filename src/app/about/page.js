import React from "react";
import Image from "next/image";

const About = () => {
	return (
		<div>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-12 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
							OUR TEAM
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							RFID-Direct owes it roots to the creators. This e-commerce platform has been built by the following students from the R.V. College of Engineering, Bengaluru as a part of the Experiential Learning.
						</p>
					</div>
					<div className="flex flex-wrap -m-4">
						<div className="p-4 lg:w-1/2">
							<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
								<Image
									src="/samkit.jpg"
									alt="Likith Photo"
									width={192}
									height={192}
									className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
								></Image>
								<div className="flex-grow sm:pl-8">
									<h2 className="title-font font-semibold text-lg text-gray-900">
										Samkit Samsukha
									</h2>
									<h3 className=" mb-3 text-violet-700 font-semibold">Web Development</h3>
									<p className="mb-4">
										1RV23IS105, Information Science and Engineering at RVCE.
									</p>
									<span className="inline-flex">
										<a className="text-gray-500">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
											</svg>
										</a>
										<a className="ml-2 text-gray-500">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
											</svg>
										</a>
										<a className="ml-2 text-gray-500">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
											</svg>
										</a>
									</span>
								</div>
							</div>
						</div>
						<div className="p-4 lg:w-1/2">
							<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
								<Image
									src="/sudhanvar.jpg"
									alt="Sudhanvar Photo"
									width={192}
									height={192}
									className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
								></Image>
								<div className="flex-grow sm:pl-8">
									<h2 className="title-font font-semibold text-lg text-gray-900">
										Sudhanvar B P
									</h2>
									<h3 className="mb-3 text-violet-700 font-semibold">Product Development</h3>
									<p className="mb-4">
										1RV23ET051, Electronics and Telecommunication Engineering at RVCE.
									</p>
									<span className="inline-flex">
										<a className="text-gray-500">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
											</svg>
										</a>
										<a className="ml-2 text-gray-500">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
											</svg>
										</a>
										<a className="ml-2 text-gray-500">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
											</svg>
										</a>
									</span>
								</div>
							</div>
						</div>
						<div className="p-4 lg:w-1/2">
							<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
								<Image
									src="/likith.jpg"
									alt="Likith Photo"
									width={192}
									height={192}
									className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
								></Image>
								<div className="flex-grow sm:pl-8">
									<h2 className="title-font font-semibold text-lg text-gray-900">
										Likith K S
									</h2>
									<h3 className="mb-3 text-violet-700 font-semibold">Blockchain Development</h3>
									<p className="mb-4">
                  1RV23ET021, Electronics and Telecommunication Engineering at RVCE.
									</p>
									<span className="inline-flex">
										<a className="text-gray-500">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
											</svg>
										</a>
										<a className="ml-2 text-gray-500">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
											</svg>
										</a>
										<a className="ml-2 text-gray-500">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
											</svg>
										</a>
									</span>
								</div>
							</div>
						</div>
						<div className="p-4 lg:w-1/2">
							<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
								<Image
									src="/aditya.jpg"
									alt="Likith Photo"
									width={192}
									height={192}
									className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
								></Image>
								<div className="flex-grow sm:pl-8">
									<h2 className="title-font font-semibold text-lg text-gray-900">
										Aditya Ranjan
									</h2>
									<h3 className="mb-3 text-violet-700 font-semibold">Product Development</h3>
									<p className="mb-4">
										1RV23AI008, Artificial Intelligence and Machine Learning at RVCE.
									</p>
									<span className="inline-flex">
										<a className="text-gray-500">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
											</svg>
										</a>
										<a className="ml-2 text-gray-500">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
											</svg>
										</a>
										<a className="ml-2 text-gray-500">
											<svg
												fill="none"
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												className="w-5 h-5"
												viewBox="0 0 24 24"
											>
												<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
											</svg>
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
