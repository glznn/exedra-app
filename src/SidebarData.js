import React from 'react'
import { LiaHomeSolid } from "react-icons/lia";
import { PiRanking } from "react-icons/pi";
import { LuSparkle } from "react-icons/lu";


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
]
