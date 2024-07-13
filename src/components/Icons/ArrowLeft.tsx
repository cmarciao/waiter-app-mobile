import { SvgXml } from "react-native-svg";
import { IconProps } from "@/types/IconProps";

export function ArrowLeft({ color }: IconProps) {
    const markup = `
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8L10 12L14 16" stroke="${color || '#323232'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;

    return <SvgXml xml={markup} />
}