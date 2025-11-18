import { avatar } from "../../../../assets/images";
import LabelSection from "../../../../components/LabelSection";
function AboutRight() {
    return (
        <>
            <div className="relative flex-1">
                <div className="overflow-hidden max-w-[400px] rounded-2xl">
                    <img
                        className="object-cover w-full rounded-[inherit] me-10  hover:scale-120 transition-all duration-700"
                        src={avatar}
                        alt=""
                    />
                </div>

                <LabelSection
                    label="ABOUT ME"
                    className="rotate-90 absolute -right-[136px] top-1/2 -translate-y-1/2"
                />
            </div>
        </>
    );
}

export default AboutRight;
