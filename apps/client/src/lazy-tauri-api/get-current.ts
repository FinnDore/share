export const importGetCurrent = async () => {
    const { getCurrent } = await import('@tauri-apps/api/window');
    return getCurrent();
};

export const window = {
    async closeCurrentWindow() {
        const current = await importGetCurrent();
        return current.close();
    },
    async maximizeCurrentWindow() {
        const current = await importGetCurrent();
        return current.maximize();
    },
    async minimizeCurrentWindow() {
        const current = await importGetCurrent();
        return current.minimize();
    },
    async isCurrentWindowFullscreen() {
        const current = await importGetCurrent();
        return current.isFullscreen();
    },
    async getCurrentWindow() {
        const current = await importGetCurrent();
        return current;
    },
};
