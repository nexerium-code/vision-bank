import { Button } from '@/components/ui/button';

export default function WelcomeScreen() {
    return (
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-8">
            {/* Language Switcher */}
            <div className="absolute top-8 right-10">
                <Button variant="outline" size="icon" className="rounded-xl border-2 border-white/40 bg-transparent text-lg font-medium text-white transition-colors hover:bg-white/10">
                    ع
                </Button>
            </div>

            {/* Logo */}
            <img src="/logo.svg" alt="Vision Bank Logo" className="mb-6 h-[300px] w-[135px]" />

            {/* Action Buttons */}
            <div className="flex w-[65%] flex-col gap-8">
                <Button className="primary-btn-gradient h-[56px] w-full rounded-full border-0 text-lg font-medium text-white transition-opacity hover:opacity-90" variant="default">
                    Login
                </Button>

                <Button className="h-[56px] rounded-full border-2 bg-transparent text-lg font-medium text-white transition-colors hover:bg-white/10" variant="outline" style={{ borderColor: "#8184FF" }}>
                    Join Now
                </Button>
            </div>

            {/* Bottom Right Logo */}
            <img src="/io_blob.svg" alt="IO Blob" className="absolute right-16 bottom-32 size-28" />

            {/* Bottom Center Text */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
                <p className="text-sm text-white/60">Vision Bank 0.0.15</p>
            </div>
        </div>
    );
}
