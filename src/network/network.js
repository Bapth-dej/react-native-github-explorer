export const network = {
    async httpGet(url) {
        try {
            const response = await fetch(url);

            if (response.status >= 400) {
                throw new Error({ code: response.status, message: 'AIE' });
            }
            const json = await response.json();
            return json;
        } catch (error) {
            return createErrorPayload(error);
        }
    },
    httpPost() {}
};

const createErrorPayload = message => ({ error: true, message });
