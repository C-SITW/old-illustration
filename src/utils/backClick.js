import { useRouter } from "vue-router";
export const useBackClickEffect = () => {
    const router = useRouter();
    // 点击返回
    const handleBackClick = () => {
        router.back();
    };
    return { handleBackClick }
}