import { Button } from '@/components/ui/button';

type WelcomeScreenProps = {
    onClick: () => void;
};

export default function WelcomeScreen({ onClick }: WelcomeScreenProps) {
    return (
        <div className="relative z-10 flex h-full flex-col items-center px-8">
            {/* Language Switcher */}
            <div className="absolute top-8 right-10">
                <Button variant="outline" size="icon" className="rounded-xl border-2 border-white/40 bg-transparent p-5 text-lg font-medium text-white transition-colors hover:bg-white/10" onClick={onClick}>
                    ع
                </Button>
            </div>

            {/* Logo */}
            <img src="/logo.svg" alt="Vision Bank Logo" className="mt-96 mb-30 h-[400px] w-[225px]" />

            {/* Action Buttons */}
            <div className="flex w-[800px] flex-col gap-8">
                <Button className="primary-btn-gradient h-[85px] w-full rounded-full border-0 text-2xl font-medium text-white transition-opacity hover:opacity-90" variant="default" onClick={onClick}>
                    Login
                </Button>
                <Button className="h-[85px] rounded-full border-3 border-[#8184FF] bg-transparent text-2xl font-medium text-white transition-colors hover:bg-white/10" variant="outline" onClick={onClick}>
                    Join Now
                </Button>
            </div>

            {/* Bottom Right Logo */}
            <img src="/io_blob.svg" alt="IO Blob" className="absolute right-14 bottom-32 size-28" onClick={onClick} />

            {/* Bottom Center Text */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
                <p className="text-sm text-white/60">Vision Bank 0.0.15</p>
            </div>
        </div>
    );
}
