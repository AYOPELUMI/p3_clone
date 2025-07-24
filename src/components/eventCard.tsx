import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { TbCalendarEvent } from "react-icons/tb";
import { cn } from "@/lib/utils"; // Assuming you're using the shadcn/utils cn helper

interface EventCardProps {
    isInverted?: boolean;
    isRotated?: boolean;
}

export const EventCard = ({ isInverted = false, isRotated = false }: EventCardProps) => {
    return (
        <Card
            className={cn(
                "border-none shadow-[0px_10px_10px_0px_#2121214D] rounded-[10px] p-[30px] lg:p-6 xl:p-[30px] transition-transform duration-300 hover:-rotate-1",
                isInverted ? "bg-white text-primary" : "bg-primary text-white",
                isRotated ? "-rotate-6" : ""
            )}
        >
            <CardHeader className="p-0">
                <div className="flex items-center gap-3">
                    <TbCalendarEvent className={cn(
                        "size-12 -rotate-y-180",
                        isInverted ? "text-primary" : "text-white"
                    )} />
                    <CardTitle className="!text-base !leading-[28px] font-black">
                        Vision & Execution
                    </CardTitle>
                </div>
            </CardHeader>
            <CardContent className="p-0 pr-[45px]">
                <CardDescription className={isInverted ? "text-primary font-light" : "text-white font-light "}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardDescription>
            </CardContent>
            <CardFooter className="p-0 gap-2">
                <Button
                    variant="outline"
                    className={cn(
                        "flex items-center gap-3 !text-base !leading-7 lg:pl-3 xl:!pl-[22.5px] !pl-[22.5px] !pr-4  !font-bold",
                        isInverted
                            ? "bg-transparent text-primary border-primary hover:bg-primary/10"
                            : "bg-transparent text-white border-white hover:bg-white/10"
                    )}
                >
                    Book A Seat <ArrowRight className="size-4 font-bold" />
                </Button>
                <Button
                    variant="ghost"
                    className={cn(
                        "flex items-center gap-3 !font-light text-base leading-7 !p-0",
                        isInverted
                            ? "bg-transparent text-primary hover:bg-primary/10"
                            : "bg-transparent text-white hover:bg-white/10"
                    )}
                >
                    Event Details <ArrowRight className="w-4 h-4 font-bold" />
                </Button>
            </CardFooter>
        </Card>
    );
};