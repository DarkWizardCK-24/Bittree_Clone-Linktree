import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const poppins1 = localFont({
    src: "../fonts/Poppins-ExtraBold.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
});

const poppins2 = localFont({
    src: "../fonts/Poppins-SemiBold.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
});

const poppins3 = localFont({
    src: "../fonts/Poppins-Bold.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
});

const poppins4 = localFont({
    src: "../fonts/Poppins-Medium.ttf",
    variable: "--font-poppins",
    weight: "100 200 400 500 700 900",
});

export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    // If the handle is already claimed, you cannot create the bittree
    const item = await collection.findOne({ handle: handle })
    if (!item) {
        return notFound()
    }

    console.log(item)

    const item2 = {
        "_id": {
            "$oid": "676f42c47dbcd18474dd670e"
        },
        "links": [
            {
                "link": "https://github.com/DarkWizardCK-24",
                "linktext": "Github"
            },
            {
                "link": "https://linktr.ee/DarkWizard_CK",
                "linktext": "Linktree"
            },
            {
                "link": "https://bitbucket.org/dark_wizard/workspace/overview/",
                "linktext": "Bitbucket"
            },
            {
                "link": "https://vercel.com/chaitanya-katares-projects",
                "linktext": "Vercel"
            },
            {
                "link": "https://www.instagram.com/the_keys_of_passion/profilecard/?igsh=MXV0bGVtd29ubzd0Zw==",
                "linktext": "Instagram"
            },
            {
                "link": "https://www.linkedin.com/in/chaitanya-katare-3b765b281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                "linktext": "LinkedIn"
            }
        ],
        "handle": "Wizard",
        "pic": "https://coc.guide/static/imgs/og/troop/wizard.png",
        "desc": "A coder with artistic mindset"
    }

    return (
        <div className="flex min-h-screen bg-purple-400 justify-center items-start py-5">
            {item && <div className="photo flex justify-center flex-col items-center gap-2">
                <img src={item.pic} alt="" />
                <span className={`${poppins3.className} text-3xl py-3`}>@{item.handle}</span>
                <span className={`${poppins4.className} text-md w-80 text-center`}>{item.desc}</span>
                <div className="links">
                    {item.links.map((item, index) => {
                        return (
                            <div key={index} className="flex justify-between">
                                <Link href={item.link} className={`${poppins4.className} bg-[#00FC3F] hover:bg-green-500 text-black hover:text-black min-w-96 flex justify-center my-4 py-4 px-2 bg-white rounded-xl text-xl`}>
                                    <div>
                                        {item.linktext}

                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>}
        </div>
    )
}
