export default function Dashboard() {
    return (
        <div className="relative z-10 flex h-full flex-col text-white">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-8">
                {/* User Welcome */}
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500 bg-blue-500/20">
                        <div className="h-6 w-6 rounded-full bg-white/60"></div>
                    </div>
                    <div>
                        <p className="text-lg font-medium text-white/80">Welcome</p>
                        <p className="text-xl font-semibold">Hamad</p>
                    </div>
                </div>

                {/* Notification Only */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                    <div className="h-6 w-6 rounded-full bg-white/40"></div>
                    <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500">
                        <span className="text-xs font-bold">3</span>
                    </div>
                </div>
            </div>

            {/* Total Balance */}
            <div className="px-6 pb-8">
                <div className="mb-3 flex items-center gap-2">
                    <p className="text-lg text-white/80">Total available balance</p>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                        <div className="h-4 w-4 rounded-full bg-white/60"></div>
                    </div>
                </div>
                <p className="text-5xl font-bold">₦ 100,000.00</p>
            </div>

            {/* Current Account Card */}
            <div className="px-6 pb-6">
                <div className="rounded-2xl border border-white/20 bg-white/5 p-6">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500">
                                <div className="h-7 w-7 rounded bg-white/60"></div>
                            </div>
                            <div>
                                <p className="text-sm text-white/80">Current Account</p>
                                <p className="text-2xl font-semibold">₦ 48,000</p>
                            </div>
                        </div>
                        <div className="h-6 w-6 rounded bg-blue-400"></div>
                    </div>
                    <p className="mb-3 text-sm text-white/60">46866108533000</p>
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm font-medium text-green-400">Active</span>
                    </div>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6">
                {/* Noura Section */}
                <div className="mb-8">
                    <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                                <div className="h-4 w-4 rounded-full bg-blue-400"></div>
                            </div>
                            <h2 className="text-xl font-semibold">Noura</h2>
                        </div>
                        <button className="text-sm font-medium text-blue-400">Explore Now</button>
                    </div>

                    {/* Credit Card Benefits */}
                    <div className="rounded-2xl border border-white/20 bg-gradient-to-br from-green-600/15 to-blue-600/15 p-6">
                        <p className="mb-2 text-sm text-white/70">Credit Card</p>
                        <h3 className="mb-4 text-2xl font-bold">Credit Card Benefits</h3>
                        <p className="text-sm leading-relaxed text-white/80">Earn cashback, travel points, and more with Vision Bank credit cards.</p>
                    </div>
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
