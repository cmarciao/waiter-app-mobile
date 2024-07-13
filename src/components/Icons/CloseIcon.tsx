import { SvgXml } from "react-native-svg";
import { IconProps } from "@/types/IconProps";

type CloseIconProps = IconProps & {
    filled?: boolean;
}

export function CloseIcon({ filled = false, color }: CloseIconProps) {
    const markup = `
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            ${filled ? `<rect width="32" height="32" rx="16" fill="black" fill-opacity="0.5"/>` : ''}
            <path d="M12 12L20 20M20 12L12 20" stroke="${color || filled ? 'white' : '#666'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `

    return (
        <SvgXml xml={markup} />
    );
}
