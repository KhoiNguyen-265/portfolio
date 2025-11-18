function LabelSection({ label = "", className = "" }) {
    return (
        <div className={`flex items-center ${className}`}>
            <span className="w-24 h-0.5 bg-line-blue"></span>
            <span className="px-5 py-2 shrink-0 bg-line-blue rounded-md">
                {label}
            </span>
            <span className="w-24 h-0.5 bg-line-blue"></span>
        </div>
    );
}

export default LabelSection;
