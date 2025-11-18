import { avatar } from "../../../../assets/images";
import LabelSection from "../../../../components/LabelSection";
function AboutRight() {
    return (
        <>
            <div className="relative flex-1">
                <img
                    className=" object-cover max-w-[400px] rounded-2xl me-10"
                    src={avatar}
                    alt=""
                />

                <LabelSection
                    label="ABOUT ME"
                    className="rotate-90 absolute -right-[136px] top-1/2 -translate-y-1/2"
                />
            </div>
        </>
    );
}

export default AboutRight;
