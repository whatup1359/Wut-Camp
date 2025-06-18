"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Share2 } from "lucide-react";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  LineShareButton,
  LineIcon
} from "react-share";

const ShareButton = ({
  landmarkId,
  name,
}: {
  landmarkId: string;
  name: string;
}) => {
    const url = process.env.NEXT_PUBLIC_WEBSITE_URL
    const shareLink = `${url}/landmark/${landmarkId}`

  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer flex items-center justify-center">
        <Share2 />
        <p className="ml-2">Share</p>
      </PopoverTrigger>
      <PopoverContent 
      side="bottom" 
      align="end" 
      className="flex gap-2 items-center justify-center">
        <FacebookShareButton url={shareLink} name={name}>
            <FacebookIcon size={"30"} className="rounded-md hover:scale-120 transition-all duration-200"/>
        </FacebookShareButton>
        <FacebookMessengerShareButton appId="" url={shareLink} name={name}>
            <FacebookMessengerIcon size={"30"} className="rounded-md hover:scale-120 transition-all duration-200"/>
        </FacebookMessengerShareButton>
        <TwitterShareButton url={shareLink} name={name}>
            <TwitterIcon size={"30"} className="rounded-md hover:scale-120 transition-all duration-200"/>
        </TwitterShareButton>
        <LineShareButton url={shareLink} name={name}>
            <LineIcon size={"30"} className="rounded-md hover:scale-120 transition-all duration-200"/>
        </LineShareButton>
      </PopoverContent>
    </Popover>
  );
};
export default ShareButton;
