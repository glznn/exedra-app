import React from 'react'
import { LiaHomeSolid } from "react-icons/lia";
import { PiRanking } from "react-icons/pi";
import { LuSparkle } from "react-icons/lu";
import { GiMagicPortal } from "react-icons/gi";



export const SidebarData = [
    {
        title: "Home",
        icon: <LiaHomeSolid />,
        link: "/"
    },
    {
        title: "Characters",
        icon: <LuSparkle />,
        link: "/characters"
    },
    {
        title: "Tier List",
        icon: <PiRanking />,
        link: "/tierlist"
    },
    {
        title: "Simulator",
        icon: <GiMagicPortal />,
        link: "/simulator"
    }
]
