import Cookies from 'js-cookie';

const authCheck = () => {
    const token = Cookies.get('token');
    if (token) {
        return true;
    }
    return false;
};

export default authCheck;