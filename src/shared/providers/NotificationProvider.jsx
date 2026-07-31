import { Toaster } from "sonner"; 
import { useTheme } from "../../features/theme/hooks/useTheme";

export default function NotificationProvider() {
    const { theme, colorMode } = useTheme();

    return (
        <Toaster
            position="bottom-right"
            richColors
            theme={colorMode}
            closeButton
            toastOptions={{
                className: `
                    ${theme.border}
                    ${theme.text}
                `,
            }}
        />
    );
}