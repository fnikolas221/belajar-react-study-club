import Social from "./Social";
import { faFacebook,faInstagram,faYoutube,faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Socials(){
    return (<>
        <div className="flex w-100 gap-16">
            <Social icon={faFacebook} link="www.facebook.com"/>
            <Social icon={faInstagram} link="www.instagram.com"/>
            <Social icon={faYoutube} link="www.youtube.com"/>
            <Social icon={faTwitter} link="www.twitter.com"/>
        </div>
    </>);
}