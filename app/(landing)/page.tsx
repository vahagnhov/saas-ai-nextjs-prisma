import {LandingNavbar} from '@/components/landing-navbar'
import {LandingHero} from '@/components/landing-hero'
import {LandingContent} from '@/components/landing-content'

const LandingPage = () => {
    const appName = process.env.APP_NAME;
    return (
        <div className="h-full ">
            <LandingNavbar appName={appName}/>
            <LandingHero/>
            <LandingContent/>
        </div>
    );
}

export default LandingPage;