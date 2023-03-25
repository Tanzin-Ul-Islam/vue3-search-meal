export default function useHelperHook() {
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return {
        scrollToTop,
    }
}