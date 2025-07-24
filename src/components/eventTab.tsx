import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs";
import { EventCard } from "@/components/eventCard";

export default function EventTabs() {
    return (
        <Tabs defaultValue="all" className="my-[65px]">
            <TabsList className="mb-8 bg-primary w-full !rounded-none !pt-0 !px-0 *:rounded-none">
                <TabsTrigger
                    value="all"
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black !mt-0"
                >
                    All Event
                </TabsTrigger>
                <TabsTrigger
                    value="brn"
                    className="rounded-full data-[state=active]:bg-white data-[state=active]:text-black !mt-0"
                >
                    BRN Only
                </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-[41px] px-5">
                {[...Array(5)].map((_, i) => (
                    <EventCard key={i} />
                ))}
            </TabsContent>

            <TabsContent value="brn" className="space-y-[41px] px-5">
                {[...Array(3)].map((_, i) => (
                    <EventCard key={i} isInverted /> // Replace with filtered BRN-only events
                ))}
            </TabsContent>
        </Tabs>
    )
}
