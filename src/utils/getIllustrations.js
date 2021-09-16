import { ref } from "vue";
import { get } from './request'

export const useIllustrationsEffect = (url) => {
    const IllustrationList = ref([]);
    const getIllustrationList = async () => {
        const res = await get(url);
        if (res?.errno === 0 && res?.data?.length) {
            IllustrationList.value = res.data;
        }
    };
    getIllustrationList()
    return { IllustrationList };
}



