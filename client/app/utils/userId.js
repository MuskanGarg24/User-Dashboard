let userId = null;

if (typeof window !== 'undefined') {
    userId = JSON.parse(sessionStorage.getItem('userData'));
} else {
    userId = null;
}

export { userId };