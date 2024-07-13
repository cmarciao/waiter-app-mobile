import { SvgXml } from "react-native-svg";
import { IconProps } from "@/types/IconProps";

type LoadingIconProps = IconProps & {
    size?: number;
}

export function LoadingIcon({ color, size = 24 }: LoadingIconProps) {
    const markup = `<svg width="${size}" height="${size}" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.8" d="M21.5039 12H18.5027" stroke="${color || 'white'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M3.49634 12H6.49759" stroke="${color || 'white'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5002 2.99622V5.99747" stroke="${color || 'white'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.6" d="M12.5002 21.0038V18.0025" stroke="${color || 'white'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.7" d="M18.8668 18.3666L16.7449 16.2448" stroke="${color || 'white'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.3" d="M6.13354 5.63336L8.25543 7.75525" stroke="${color || 'white'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.9" d="M16.7449 7.75525L18.8668 5.63336" stroke="${color || 'white'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.5" d="M8.25543 16.2448L6.13354 18.3666" stroke="${color || 'white'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;

    return <SvgXml xml={markup} />
}
