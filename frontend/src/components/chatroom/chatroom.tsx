import React, {useState} from 'react';
import './chatroom.scss';
import {Button, Classes} from "@blueprintjs/core";

const DARK_THEME = Classes.DARK;
const LIGHT_THEME = '';     // No class for light theme
const THEME_LOCAL_STORAGE_KEY = 'chatroom-theme';

// Returns the current theme class name
export function getThemeCookie(): string {
    return localStorage.getItem(THEME_LOCAL_STORAGE_KEY) || LIGHT_THEME;
}

// Set the theme in localstorage
export function setThemeCookie(theme: string) {
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, theme);
}

export default function Chatroom() {
    let [themeName, setThemeName] = useState(getThemeCookie);

    let useDark = themeName === DARK_THEME;
    const handleSetDark = (useDark: boolean) => {
        const nextThemeName = useDark ? DARK_THEME : LIGHT_THEME;
        setThemeName(nextThemeName);
        setThemeCookie(nextThemeName);
    }
    const handleToggleDark = () => {
        handleSetDark(!useDark);
    }

    return (
        <div className={`chatroom-root` + (themeName ? ` ${themeName}` : '')}>
            <Button onClick={handleToggleDark}>update</Button>
        </div>
    )

}
