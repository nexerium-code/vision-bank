import { Button } from '@/components/ui/button';

type WelcomeScreenProps = {
    onClick: () => void;
};

export default function WelcomeScreen({ onClick }: WelcomeScreenProps) {
    return (
        <div className="pt relative z-10 flex h-full flex-col items-center p-[50px]">
            {/* Language Switcher */}
            <div className="flex w-full items-center justify-end">
                <img src="/lang_select.svg" alt="Vision Bank Logo" className="size-[44px]" />
            </div>

            {/* Logo */}
            <img src="/logo.svg" alt="Vision Bank Logo" className="mt-18 mb-18 h-[140px] w-[135px]" />

            {/* Action Buttons */}
            <div className="mb-auto flex flex-col gap-6">
                <Button className="primary-btn-gradient h-[56px] w-[290px] rounded-full border-0 text-base font-medium text-white transition-opacity hover:opacity-90" variant="default" onClick={onClick}>
                    Login
                </Button>
                <Button className="h-[56px] w-[290px] rounded-full border-2 border-[#8184FF] bg-transparent text-base font-medium text-white transition-colors hover:bg-white/10" variant="outline" onClick={onClick}>
                    Join Now
                </Button>
            </div>

            {/* Bottom Right Logo */}
            <div className="-me-11 flex w-full items-center justify-end">
                <img src="/io_blob.svg" alt="IO Blob" className="size-16" onClick={onClick} />
            </div>

            {/* Bottom Center Text */}
            <p className="mt-1 text-xs text-white">Vision Bank 0.0.15</p>
        </div>
    );
}
