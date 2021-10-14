const authCheck = () => {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user && user.isLogged) {
        return user.isLogged;
    }
    return false;
};

export default authCheck;