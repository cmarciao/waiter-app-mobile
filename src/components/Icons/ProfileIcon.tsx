import { SvgXml } from "react-native-svg";
import { IconProps } from "@/types/IconProps";

export function ProfileIcon({ color }: IconProps) {
    const markup = `
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6 9.40002C15.8 10.6 15.8 12.5 14.6 13.6C13.4 14.7 11.5 14.8 10.4 13.6C9.29999 12.4 9.19999 10.5 10.4 9.40002C11.6 8.30002 13.4 8.20002 14.6 9.40002M6.39999 20C7.99999 18.5 10.1 17.5 12.5 17.5C14.8 17.5 17 18.4 18.6 20M4.49997 17C3.89997 15.8 3.49997 14.4 3.49997 13C3.49997 8 7.49997 4 12.5 4C17.5 4 21.5 8 21.5 13C21.5 14.4 21.1 15.8 20.5 17" stroke="${color || '#666666'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;

    return <SvgXml xml={markup} />
}
