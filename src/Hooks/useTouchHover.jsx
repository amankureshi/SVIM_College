import { useState } from "react";

export default function useTouchHover() {
    const [active, setActive] = useState(false);

    const touchProps = {
        onTouchStart: () => setActive(true),
        onTouchEnd: () => setActive(false),
    };

    return { active, touchProps };
}