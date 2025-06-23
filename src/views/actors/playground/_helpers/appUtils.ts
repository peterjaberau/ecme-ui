export async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        // toast.success('Copied to clipboard!');
    } catch (err) {
        console.log('Failed to copy!', err);
    }
}
