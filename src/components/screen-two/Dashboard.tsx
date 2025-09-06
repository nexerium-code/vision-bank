export default function Dashboard() {
    return (
        <div className="test relative z-10 flex h-full flex-col overflow-y-auto px-6 py-8 text-white">
            {/* Header */}
            <div className="mb-12 flex items-center justify-between">
                {/* User Welcome */}
                <div className="flex items-center gap-3">
                    <img src="/user_icon.svg" alt="user" className="size-14" />
                    <div>
                        <p className="text-xl font-bold">Welcome</p>
                        <p className="text-xl">Hamad</p>
                    </div>
                </div>
                <img src="/notification_icon.svg" alt="notification" className="size-16" />
            </div>

            {/* Total Balance */}
            <div className="mb-18 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center justify-center gap-2">
                    <p className="text-[25px] font-bold">Total available balance</p>
                    <img src="eye_icon.svg" alt="eyeicon" className="size-9" />
                </div>
                <div className="flex items-center justify-center gap-2">
                    <img src="sar_icon.svg" alt="eyeicon" className="size-9" />
                    <p className="text-5xl font-bold">100,000.00</p>
                </div>
            </div>

            {/* Current Account Card */}
            <div className="mb-16 flex gap-8 rounded-2xl border-2 border-white/20 bg-white/5 p-6">
                <img src="wallet_icon.svg" alt="walleticon" className="size-14" />
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="text-xl font-light">Current Account</p>
                        <div className="flex items-center justify-center gap-2">
                            <img src="sar_icon.svg" alt="eyeicon" className="size-9" />
                            <p className="text-4xl font-bold">48,000</p>
                        </div>
                        <p className="text-xl font-light">46866108533000</p>
                    </div>
                    <div className="flex h-full flex-col items-end justify-between">
                        <img src="share_icon.svg" alt="shareicon" className="size-10" />
                        <img src="status_icon.svg" alt="statusicon" className="h-6" />
                    </div>
                </div>
            </div>

            {/* Noura Section */}
            <div className="mb-4 flex items-center justify-between border-b-3 border-b-white/5 pb-4">
                <div className="flex items-center justify-center gap-3">
                    <img src="io_blob_raw.svg" alt="nouraicon" className="size-12" />
                    <p className="text-3xl font-semibold">Noura</p>
                </div>
                <p className="text-2xl font-medium text-[#9194FF]">Explore Now</p>
            </div>

            {/* Credit Card Benefits */}
            <div className="mb-12 flex flex-col">
                <p className="mb-2 text-sm text-white/70">Credit Card</p>
                <h3 className="mb-4 text-2xl font-bold">Credit Card Benefits</h3>
                <p className="text-sm leading-relaxed text-white/80">Earn cashback, travel points, and more with Vision Bank credit cards.</p>
            </div>

            {/* Tap for assistance */}
            <div className="mb-8">
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-xl font-medium text-white/60">Tap for assistance...</p>
                    <div className="h-6 w-6 rounded bg-white/20"></div>
                </div>

                <div className="mb-4 flex gap-4">
                    <button className="flex h-20 flex-1 flex-col items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5">
                        <div className="h-6 w-6 rounded bg-blue-400"></div>
                        <span className="text-xs text-white/80">Transfer</span>
                    </button>
                    <button className="flex h-20 flex-1 flex-col items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5">
                        <div className="h-6 w-6 rounded-full bg-white/40"></div>
                        <span className="text-xs text-white/80">Beneficiary</span>
                    </button>
                    <button className="flex h-20 flex-1 flex-col items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/5">
                        <div className="h-6 w-6 rounded bg-blue-500"></div>
                        <span className="text-xs text-white/80">My Cards</span>
                    </button>
                </div>
            </div>

            {/* Explore Offers */}
            <div className="mb-6">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Explore Offers</h2>
                    <button className="text-sm font-medium text-blue-400">See all</button>
                </div>

                <div className="flex gap-4">
                    {/* Family Banking */}
                    <div className="flex-1 rounded-2xl border border-white/20 bg-white/5 p-5">
                        <div className="mb-4 flex items-start justify-between">
                            <div>
                                <h3 className="mb-1 text-lg font-semibold">Family Banking</h3>
                                <p className="mb-1 text-sm text-blue-400">
                                    Secure, <span className="text-blue-300">kids-friendly</span>
                                </p>
                                <p className="text-sm text-blue-300">family banking</p>
                            </div>
                            <div className="h-6 w-6 rounded bg-white/20"></div>
                        </div>
                        <div className="flex h-16 items-center justify-center">
                            <div className="flex items-center justify-center">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-purple-400 bg-purple-500/20">
                                    <div className="h-6 w-6 rounded-full bg-purple-400"></div>
                                </div>
                                <div className="-ml-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-purple-400 bg-purple-500/20">
                                    <div className="h-5 w-5 rounded-full bg-purple-400"></div>
                                </div>
                                <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple-400 bg-purple-500/20">
                                    <div className="h-4 w-4 rounded-full bg-purple-400"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Savings Account */}
                    <div className="flex-1 rounded-2xl border border-white/20 bg-white/5 p-5">
                        <div className="mb-4 flex items-start justify-between">
                            <div>
                                <h3 className="mb-1 text-lg font-semibold">Savings Account</h3>
                                <p className="mb-1 text-sm text-white/80">Daily earnings, No</p>
                                <p className="mb-2 text-sm text-white/80">minimum, up to</p>
                                <p className="text-lg font-semibold text-teal-400">3.35%</p>
                            </div>
                            <div className="h-6 w-6 rounded bg-white/20"></div>
                        </div>
                        <div className="flex h-16 items-center justify-center">
                            <div className="relative">
                                <div className="h-10 w-14 rounded-lg border-2 border-teal-400 bg-teal-400/20"></div>
                                <div className="absolute top-1 left-1 h-8 w-12 rounded-md border border-teal-300 bg-teal-400/10"></div>
                                <div className="absolute top-3 left-4 flex h-4 w-4 items-center justify-center rounded-full bg-teal-400">
                                    <div className="h-2 w-2 rounded-full bg-white"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation */}
            <div className="px-6 py-6">
                <div className="flex items-center justify-center">
                    <div className="flex items-center gap-12 rounded-full bg-white/10 px-8 py-4">
                        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent">
                            <div className="h-6 w-6 rounded bg-white/60"></div>
                        </button>
                        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-600">
                            <div className="text-lg font-bold text-white">io</div>
                        </button>
                        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent">
                            <div className="h-6 w-6 rounded bg-white/60"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
