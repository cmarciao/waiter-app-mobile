import { SvgXml } from "react-native-svg";
import { IconProps } from "@/types/IconProps";

export function HomeIcon({ color }: IconProps) {
    const markup = `
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0283 7.98621L14.2683 3.50589C13.2286 2.69661 11.7723 2.69661 10.7317 3.50589L4.97167 7.98621C4.26991 8.53245 3.85999 9.37149 3.85999 10.2595V17.2992C3.85999 18.8899 5.14927 20.1792 6.73999 20.1792H18.26C19.8507 20.1792 21.14 18.8899 21.14 17.2992V10.2595C21.14 9.37149 20.7301 8.53245 20.0283 7.98621Z" stroke="${color || '#666666'}" stroke-width="1.5"/>
        </svg>
    `;

    return <SvgXml xml={markup} />
}
