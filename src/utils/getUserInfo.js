import { reactive, toRefs } from "vue";
import { get } from './request'

export const useUserInfoEffect = () => {
    const data = reactive({ userinfo: {} });
    const getUserInfo = async () => {
        const res = await get("api/user/info");
        if (res?.errno === 0) {
            data.userinfo = res.data;
        }
    };
    getUserInfo();
    const { userinfo } = toRefs(data);
    return { userinfo };
};