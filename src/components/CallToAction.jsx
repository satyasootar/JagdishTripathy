import { Cta11 } from "@/components/shadcnblocks-com-cta11"

const demoData = {
    heading: "Ready to Get Started?",
    description:
        "Join thousands of satisfied customers using our platform to build amazing websites.",
    buttons: {
        primary: {
            text: "Get Started",
            url: "https://www.shadcnblocks.com",
        },
        secondary: {
            text: "Learn More",
            url: "https://www.shadcnblocks.com",
        },
    },
};

function CallToAction() {
    return <Cta11 {...demoData} />;
}

export { CallToAction };
