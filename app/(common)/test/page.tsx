import { showUser } from "@/actions/auth"
import test from "@/actions/test"

const User = () => {
    return(
        <div>
            <form action = {test} className="flex flex-row justify-center p-10 font-bold ">
                <button className="border border-white">test</button>
            </form>
        </div>
    )
}

export default User