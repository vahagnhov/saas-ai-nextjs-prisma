import {UserButton} from '@clerk/nextjs'

const DashBoardPage = () => {
    return (
        <div>
            <p>Dashboard Page (Protected)</p>
            <UserButton afterSignOutUrl='/'/>
        </div>
    )
}

export default DashBoardPage