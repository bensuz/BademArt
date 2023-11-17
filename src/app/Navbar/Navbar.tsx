import logo from "../assets/logo.png";
import { getCart } from "@/lib/db/cart";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";

async function searchProducts(formData: FormData) {
    "use server";

    const searchQuery = formData.get("searchQuery")?.toString();

    if (searchQuery) {
        redirect("/search?query=" + searchQuery);
    }
}

export default async function Navbar() {
    const session = await getServerSession(authOptions);
    const cart = await getCart();

    return (
        <div className=" min-h-fit bg-base-100">
            <div className="navbar m-auto min-h-fit max-w-7xl flex-col gap-2 sm:flex-row">
                <div className="flex-1">
                    <Link href="/" className=" min-h-fit text-xl normal-case">
                        <Image src={logo} height={50} alt="logo" />
                    </Link>
                </div>
                <div className="flex-none gap-2">
                    <form action={searchProducts}>
                        <div className="form-control">
                            <input
                                name="searchQuery"
                                placeholder="Search"
                                className="input input-bordered w-full min-w-[100px]"
                            />
                        </div>
                    </form>
                    <ShoppingCartButton cart={cart} />
                    <UserMenuButton session={session} />
                </div>
            </div>
        </div>
    );
}
